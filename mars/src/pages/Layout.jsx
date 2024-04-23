import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Posts</Link></li>
          <li><Link to="/create">Create Post</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
      <footer>Footer Content</footer>
    </div>
  );
};

export default Layout;
