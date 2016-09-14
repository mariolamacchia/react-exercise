/**
 * CatPage
 *
 * General cats list page.
 * Since The only difference between Home and Breed pages is the navbar,
 * I'll make a general component that will be extended
 */
import React from 'react';

import AppBar from 'material-ui/AppBar';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { Card } from 'material-ui/Card';

import Cat from './cat';
import CatIcon from './cat-icon';
import ErrorPage from './error-page';

export default class CatPage extends React.Component {
  getIcon() {
    const { cats, showCatIcon } = this.props;
    if (showCatIcon && cats && cats.length) {
      return <CatIcon cat={cats[0]} />;
    }
  }

  getGridSettings() {
    let settings = {};

    switch (this.props.browser.mediaType) {
      case 'infinity':
        settings.cellHeight = 548;
        break;
      case 'large':
      case 'medium':
        settings.cellHeight = 350;
        break;
      case 'small':
        settings.cellHeight = 300;
        break;
      case 'extraSmall':
        settings.cellHeight = 320;
        settings.cols = 1;
        break;
      default:
        settings.cols = 2;
    }

    return settings;
  }

  getCardContainerStyle() {
    if (this.props.browser.lessThan.medium) {
      return { width: '100%' };
    }

    let style = {
      position: 'absolute',
      marginTop: '-64px',
      zIndex: '2000',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '100px'
    }

    switch (this.props.browser.mediaType) {
      case 'infinity':
        style.width = '1100px';
        break;
      case 'large':
        style.width = '900px';
        break;
      case 'medium':
        style.width = '768px';
    }

    return style;
  }

  render() {
    const {
      cats, isFetching,
      title, subtitle,
      onCatClick, error,
      browser
    } = this.props;

    const flexibleToolbarStyle = browser.greaterThan.small ? {
      minHeight: '200px'
    } : {};

    if (error) {
      return <ErrorPage errorCode={error} />
    } else if (!cats && !isFetching) {
      return <ErrorPage errorCode={404} />
    } else {
      return (
        <div>
          <AppBar style={flexibleToolbarStyle}
            iconElementLeft={this.getIcon()}
            title={browser.lessThan.medium && title}
          />

        <Card style={this.getCardContainerStyle()}>
            <div>
              {browser.greaterThan.small &&
                <AppBar iconElementLeft={<div></div>} title={title}
                  style={{ backgroundColor: 'transparent' }}
                  titleStyle={{ color: 'black' }}
                />
              }
              {!isFetching &&
                <GridList cols={this.getGridSettings().cols}
                  cellHeight={this.getGridSettings().cellHeight}
                >
                  <Subheader>{subtitle}</Subheader>
                  {cats.map((cat, index) =>
                    <Cat cat={cat} onClick={onCatClick} key={index} />
                  )}
                </GridList>
              }
            </div>
          </Card>
        </div>
      )
    }
  }
}

CatPage.propTypes = {
  cats: React.PropTypes.array,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  error: React.PropTypes.number,
  isFetching: React.PropTypes.bool.isRequired,
  onCatClick: React.PropTypes.func,
  browser: React.PropTypes.object.isRequired,
  showCatIcon: React.PropTypes.bool
};
