import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { pubsData } from './pubsData';
import Container from 'react-bootstrap/Container';

export const Publications = (props: RouteComponentProps) => {
  return (
    <Container>
      {pubsData.map((c, i) => {
        const { title, link } = c;
        return (
          <div key={i}>
            <a href={link}>{title}</a>
          </div>
        );
      })}
    </Container>
  );
};
