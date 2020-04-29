import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import { Project } from './Project';
import { projectsData } from './projectsData';

export const ProjectsPage = (props: RouteComponentProps) => {
  return (
    <Container>
      {projectsData
        .sort((a, b) => b.category.localeCompare(a.category))
        .map((data, index) => {
          return (
            <Accordion
              key={index}
              defaultActiveKey="0"
              className="project-parent-accordion"
            >
              <Project index={index} data={data} />
            </Accordion>
          );
        })}
    </Container>
  );
};
