import React from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import { Menu, MenuItem, Alignments } from 'react-foundation';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav id="navbar" role="navigation">
        <Menu alignment={Alignments.CENTER}>
          <MenuItem><Link className="nav-link" to="/">Main</Link></MenuItem>
          <MenuItem><Link className="nav-link" to="/about">About</Link></MenuItem>
          <MenuItem><Link className="nav-link" to="/projects">Portfolio</Link></MenuItem>
          <MenuItem><Link className="nav-link" to="/contact">Contact</Link></MenuItem>
        </Menu>
      </nav>
    </div>
  );
}

export default Navbar;