import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

import { componentNameFromString } from './utils';
interface ProjectProps {
  index: number;
  title: string;
  stack: string[];
  category: string;
  description: string;
}

const variants = {
  react: 'primary',
  python: 'primary',
  html5: 'secondary',
  django: 'success',
  meteor: 'danger',
  css3: 'warning',
  express: 'info',
  mongodb: 'light',
  default: 'dark',
};

// const borders = {
//   fullstack: 'primary',
//   frontend: 'success',
//   default: 'dark',
// };

export const Project = (props: ProjectProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { index, title, stack, category, description } = props;
  const componentTitle = componentNameFromString(title);
  const showChildren = `<${componentTitle}>`;
  const hideChildren = `<${componentTitle}/>`;

  const [toggleTitle, setToggle] = useState(index > 0 ? true : false);

  return (
    <Card className="mb-2 project-card">
      <Accordion.Toggle
        as={Card.Header}
        eventKey={`${index}`}
        className="project-title"
        onClick={(e) => {
          setToggle(!toggleTitle);
        }}
      >
        {toggleTitle ? hideChildren : showChildren}
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={`${index}`}>
        <Card className="details-card">
          <Card.Body className="details-card-body">
            {stack.map((s, i) => {
              return (
                <Badge key={i} pill variant={variants[s] || variants.default}>
                  {s}
                </Badge>
              );
            })}
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer className="project-card-footer">{`</${componentTitle}>`}</Card.Footer>
        </Card>
      </Accordion.Collapse>
    </Card>
  );
};
