import React from 'react';
import { Link } from '@reach/router';

export const NavLink = (props) => {
  const { className } = props;
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? `${className} active` : className,
        };
      }}
    />
  );
};
