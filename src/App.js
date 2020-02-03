import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/all';
import Nav from './Nav';
import RepoHome from './RepoHome';
import Home from './Home';
import { Router } from '@reach/router';

/**
 * React learning app. Integrating Github APIs
 */
function App() {
  return (
    <>
      <Nav/>
        <Router>
          <Home path="/"/>
          <RepoHome path="search-repo"/>
        </Router>
    </>
  );
}

export default App;
