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

export const Routes = (props: RouteComponentProps) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Navigation />
      <Container>
        <Row>
          <Col xs="12" md="2" className="left-column">
            sidebar
          </Col>
          <Col xs="12" md="8" className="left-column">
            <Router className="width__60_center">
              <Home path="/" />
              <ProjectsPage path="/projects" />
              <Publications path="/publications" />
              <Certifications path="/certifications" />
            </Router>
          </Col>

          <Col xs="12" md="2" className="left-column">
            sidebar
          </Col>
        </Row>
      </Container>
    </Suspense>
  );
};
