import React from 'react';
import { connect } from 'react-redux'

export default class Cat extends React.Component {

  render() {
    const { cat, onClick } = this.props;
    return (
      <div>
        { onClick &&
          <a href="#" onClick={onClick.bind(this, cat)}>
            <img src={cat.url} />
          </a>
        }
        { !onClick &&
          <img src={cat.url} />
        }
      </div>
    )
  }
}

Cat.propTypes = {
  cat: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
};
