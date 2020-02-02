import React from 'react';
import Nav from './Nav';


function Home() {
    return(
        <>
            <Nav />
            <section>
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

export default Home;