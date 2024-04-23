import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import PostsPage from './pages/PostsPage';
import CreatePostPage from './pages/CreatePostPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={PostsPage} />
        <Route path="/create" component={CreatePostPage} />
      </Layout>
    </Router>
  );
};

export default App;
