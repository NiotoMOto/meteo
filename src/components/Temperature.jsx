import React from 'react';
import PropTypes from 'prop-types';

export default class Temperature extends React.PureComponent {
  static propTypes = {
    temperature: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div>
        {this.props.temperature} °C
      </div>
    );
  }
}
