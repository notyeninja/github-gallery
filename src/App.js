import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/all';
import Nav from './Nav';
import RepoHome from './RepoHome';
import Home from './Home';
import { Router } from '@reach/router';


function App() {
  return (
    <>
      <Nav/>
      <div className="container" style={{ marginTop:16 }}>
        <Router>
          <Home path="/"/>
          <RepoHome path="search-repo"/>
        </Router>
      </div>
    </>
  );
}

export default App;
