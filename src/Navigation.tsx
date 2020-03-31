import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

export const Navigation = (props: RouteComponentProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        React + firebase
      </Link>
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
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="publications">
              Publications
            </Link>
          </li>

          <li className="nav-item">
            <Link to="certifications" className="nav-link">
              Certifications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
