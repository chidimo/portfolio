import React from 'react';
import { RouteComponentProps } from '@reach/router';

export const Footer = (props: RouteComponentProps) => {
  return (
    <>
      <a id="back_to_top" href="#header" className="smooth_scroll">
        Back to Top
      </a>
      <footer>
        <div className="footer_text">
          <p>Chidi Orji Matthew</p>
          <p>+2349036650603 | orjichidi95@gmail.com</p>
        </div>
      </footer>
    </>
  );
};
