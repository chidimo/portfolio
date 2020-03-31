import React from 'react';
import { RouteComponentProps } from '@reach/router';

export const Information = (props: RouteComponentProps) => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <a href="./index.html">Chidi Orji</a>
          <p className="job_title">Full Stack Developer</p>
        </div>
        <div className="header_flex">
          <p>
            <i className="fab fa-github-square" />{' '}
            <a href="https://github.com/chidimo">Github</a>
          </p>
          <p>
            <i className="fab fa-linkedin" />{' '}
            <a href="https://www.linkedin.com/in/chidi-orji/">LinkedIn</a>
          </p>
          <p>
            <i className="far fa-file" />{' '}
            <a href="https://docs.google.com/document/d/17cSfgjRHbDGr3LJogh574jM3QJIwj8tOILyo2I1vKXM/edit?usp=sharing">
              Resume
            </a>
          </p>
        </div>
        <div className="header_flex">
          <p>
            <a href="posts.html">Posts</a>
          </p>
          <p>
            <a href="certifications.html">Certifications</a>
          </p>
        </div>
        <div className="contact header_flex">
          <p>orjichidi95@gmail.com</p>
          <p>+234903665063</p>
        </div>
      </div>
    </header>
  );
};
