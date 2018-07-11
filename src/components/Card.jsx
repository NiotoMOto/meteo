import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.element.isRequired,
    subtitleClass: PropTypes.string,
    classname: PropTypes.string,
  }

  static defaultProps = {
    subtitle: '',
    classname: '',
    subtitleClass: '',
  }

  render() {
    const {
      title, subtitleClass, subtitle, children, classname, ...otherProps
    } = this.props;
    return (
      <div className={`card ${classname}`} {...otherProps}>
        <div className="title">{title}
          <div className={`subtitle ${subtitleClass}`}>{subtitle}</div>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}
