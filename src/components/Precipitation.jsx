import React from 'react';
import PropTypes from 'prop-types';

export default class Temperature extends React.PureComponent {
  static propTypes = {
    precipitation: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="value">
        {this.props.precipitation} %
      </div>
    );
  }
}
