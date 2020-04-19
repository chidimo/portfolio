import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { navigate } from '@reach/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from './NavLink';

export const Navigation = (props: RouteComponentProps) => {
  return (
    <Fragment>
      <Navbar
        bg="dark"
        expand="md"
        sticky="top"
        variant="dark"
        collapseOnSelect
        className="top-navigation"
      >
        <Navbar.Brand
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          Chidi Orji
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="projects"
              className="nav-link"
              data-rb-event-key="countries"
            >
              Projects
            </NavLink>

            <NavLink
              to="certifications"
              className="nav-link"
              data-rb-event-key="countries"
            >
              Certifications
            </NavLink>

            <NavLink
              to="publications"
              className="nav-link"
              data-rb-event-key="countries"
            >
              Publications
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};
