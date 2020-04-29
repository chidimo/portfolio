import React, { Suspense } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Navigation } from './Navigation';
import { Home } from './pages/Home';
import { ProjectsPage } from './projects/ProjectsPage';
import { Publications } from './publication/Publications';
import { Certifications } from './certifications/Certifications';
import { LeftSideBar } from './LeftSideBar';

export const Routes = (props: RouteComponentProps) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Navigation />
      <Container fluid>
        <Row>
          <Col xs="12" md="3" className="left-column">
            <div className="left-column-child">
              <LeftSideBar />
            </div>
          </Col>
          <Col xs="12" md="8" className="middle-column">
            <Router className="middle-column-child">
              <Home path="/" />
              <ProjectsPage path="/projects" />
              <Publications path="/publications" />
              <Certifications path="/certifications" />
            </Router>
          </Col>

          <Col xs="12" md="1" className="right-column"></Col>
        </Row>
      </Container>
    </Suspense>
  );
};
