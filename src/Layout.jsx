import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => (
  <div className="layout">
    <header className="header">
      <Link className="layout_title" href="/" to="/">Météo</Link>
      <div className="nav">
        <Link className="nav-item" href="/place" to="/place">Place</Link>
      </div>
    </header>
    <section className="content">
      {children}
    </section>
    <footer className="footer">
      Développé par Guillemoto.io
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
};

export default Layout;
