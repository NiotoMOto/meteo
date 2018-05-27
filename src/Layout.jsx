import React from 'react';


export default class Layout extends React.Component {

  render() {
    return (
      <div className="layout">
        <header className="header">
          Météo
        </header>
        <section className="content">
          {this.props.children}
        </section>
        <footer className="footer">
          Développé par Guillemoto.io
      </footer>
      </div>
    )
  }
} 