import React from 'react';
import { RouteComponentProps } from '@reach/router';

export const Publications = (props: RouteComponentProps) => {
  return (
    <div className="page_wrapper">
      <div id="header" className="page_section_one">
        <section id="certifications">
          <div className="container">
            <h2>Posts</h2>
            <div className="posts">
              <div className="institution">
                <h3>Medium</h3>
                <p>
                  <a href="https://medium.com/@orjichidi95/how-i-fell-in-love-with-mathematics-and-the-sciences-601ed0a7b404?source=your_stories_page---------------------------">
                    How I fell in love with mathematics and the sciences
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
