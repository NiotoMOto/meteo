import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => (
  <div className="layout">
    <header className="header">
      Météo
      <Link to="/place">Place</Link>
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
