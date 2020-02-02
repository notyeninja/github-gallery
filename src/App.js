import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/all';
import Nav from './Nav';
import RepoHome from './RepoHome';


function App() {
  return (
    <>
      <Nav/>
      <div className="container" style={{ marginTop:16 }}>
        <RepoHome/>
      </div>
    </>
  );
}

export default App;
