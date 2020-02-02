import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free';
import Nav from './Nav';
import Footer from './Footer';


function App() {
  return (
    <>
      <Nav />
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-uppercase">
             Peek
            </h1>
            <h2 class="subtitle">
               A Simple GitHub Viewer
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p>
            This is a sample project to showcase basic
            React capabilities. I hope this is helpful to anyone who is learning React.
            The source code can be found here.
          </p>
          <button className="button is-warning is-medium is-bold">Let's Go!</button>
        </div>
      </section>
    
    </>
  );
}

export default App;
