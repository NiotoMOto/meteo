import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.element.isRequired,
  }
  
  static defaultProps = {
    subtitle: '',
  }

  render() {
    return (
      <div className="card">
        <div className="title">{this.props.title}
          <div className="subtitle">{this.props.subtitle}</div>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}