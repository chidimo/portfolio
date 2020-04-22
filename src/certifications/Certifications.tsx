import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { certData } from './certData';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const Certifications = (props: RouteComponentProps) => {
  return (
    <Container>
      {certData.map((c, index) => {
        const { title, platform } = c;
        return (
          <Card>
            <h3>{platform}</h3>
            <p>{title}</p>
          </Card>
        );
      })}
    </Container>
  );
};
