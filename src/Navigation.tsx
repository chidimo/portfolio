import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { NavLink } from './NavLink';

export const Navigation = (props: RouteComponentProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <NavLink className="navbar-brand" to="/">
        Chidi Orji
      </NavLink>
      <button
        type="button"
        aria-expanded="false"
        data-toggle="collapse"
        className="navbar-toggler"
        aria-label="Toggle navigation"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="publications">
              Publications
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="certifications" className="nav-link">
              Certifications
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
