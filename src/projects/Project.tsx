import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

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

const borders = {
  fullstack: 'primary', frontend: 'success', default: 'dark',
}

export const Project = (props: ProjectProps) => {
  const { index, title, stack, category, description } = props;

  return (
    <Card className="mb-2"  border={borders[category] || borders.default}>

      <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
        {title}
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={`${index}`}>
        <Card>
          <Card.Body>
            {stack.map((s, i) => {
              return (
                <Badge
                  key={i}
                  pill
                  variant={variants[s] || variants.default}
                >
                  {s}
                </Badge>
              );
            })}
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>{category}</Card.Footer>
        </Card>
      </Accordion.Collapse>
    </Card>
  );
};
