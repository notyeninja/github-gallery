import React from 'react';
import Nav from './Nav';
import { navigate } from '@reach/router'


function Home() {

    function gotoRepoSearch() {
        navigate('/search-repo');
    }
    return (
        <section class="hero is-warning is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-uppercase">
                        Peek
                    </h1>
                    <h2 class="subtitle">
                        A Simple GitHub Viewer
                </h2>
                    <p>
                        This is a sample project to showcase basic
                        React capabilities. The source code can be found on &nbsp;
                        <a href="https://github.com/notyeninja/github-gallery"
                           rel="external"
                           target="_blank">GitHub</a>
                    </p>
                    <button onClick={gotoRepoSearch} 
                            className="button is-link is-outlined is-medium is-bold"
                            style={{ marginTop:16}}>Let's Go!</button>
                </div>
            </div>
        </section>
    );
}

export default Home;