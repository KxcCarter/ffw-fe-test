import React from 'react';
import './Footer.css';

const date = new Date();
const now = date.getFullYear();

const Footer = () => (
  <footer aria-label={`Kenneth R Carter ${now}`}>
    &copy; Kenneth R Carter {now}
  </footer>
);

export default Footer;
