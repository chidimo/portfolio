import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { Home } from './pages/Home';
import { Footer } from './pages/Footer';
import { Projects } from './pages/Projects';
import { Publications } from './pages/Publications';
import { Certifications } from './pages/Certifications';

export const Routes = (props: RouteComponentProps) => {
  return (
    <section className="section-wrapper">
      <Router className="width__60_center">
        <Home path="/" />
        <Projects path="/projects" />
        <Publications path="/publications" />
        <Certifications path="/certifications" />
      </Router>
      <Footer />
    </section>
  );
};
