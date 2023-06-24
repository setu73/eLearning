// Navigate.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigate = ({ to, children }) => {
  return (
    <Link to={to}>{children}</Link>
  );
};

export default Navigate;
