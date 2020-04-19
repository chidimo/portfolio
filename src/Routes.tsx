import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { Home } from './pages/Home';
import { ProjectsPage } from './projects/ProjectsPage';
import { Publications } from './publication/Publications';
import { Certifications } from './certifications/Certifications';

export const Routes = (props: RouteComponentProps) => {
  return (
    <Router className="width__60_center">
      <Home path="/" />
      <ProjectsPage path="/projects" />
      <Publications path="/publications" />
      <Certifications path="/certifications" />
    </Router>
  );
};
