/**
 * CatPage
 *
 * General cats list page.
 * Since The only difference between Home and Breed pages is the navbar,
 * I'll make a general component that will be extended
 */
import React from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { Card } from 'material-ui/Card';

import Cat from './cat';
import CatIcon from './cat-icon';
import ErrorPage from './error-page';

import styles from '../index.scss';

export default class CatPage extends React.Component {
  getIcon() {
    const { cats, showCatIcon } = this.props;
    if (showCatIcon && cats && cats.length) {
      return <CatIcon cat={cats[0]} />;
    }
  }

  render() {
    const { cats, isFetching, title, subtitle, onCatClick, error } = this.props;

    if (!cats && !isFetching) {
      return <ErrorPage errorCode="404" />
    } else {
      return (
        <div>
          <AppBar className={styles.flexibleToolbar}
            iconElementLeft={this.getIcon()}
            />

          <Card className={styles.cardContainer}>
            <AppBar iconElementLeft={<div></div>} title={title}
              style={{ backgroundColor: 'transparent' }}
              titleStyle={{ color: 'black' }}
              />
            {!isFetching &&
              <GridList cols={2} cellHeight={448}>
                <Subheader>{subtitle}</Subheader>
                {cats.map((cat, index) =>
                  <Cat cat={cat} onClick={onCatClick} key={index} />
                )}
              </GridList>
            }
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
  isFetching: React.PropTypes.bool.isRequired,
  onCatClicked: React.PropTypes.func,
  showCatIcon: React.PropTypes.bool
};
