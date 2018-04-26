import React from 'react';


export default class Layout extends React.Component {

  render() {
    return (
      <div className="layout">
        <header className="header">
          Météo
      </header>
        <div className="content">
          {this.props.children}
        </div>
        <footer className="footer">
          Developed by Guillemoto.io
      </footer>
      </div>
    )
  }
} 