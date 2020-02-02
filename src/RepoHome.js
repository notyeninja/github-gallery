import React from 'react';
import GitCard from './GitCard';

function RepoHome() {
    return (
        <>
                <form>
                    <div className="field has-addons">
                        <div className="control is-expanded">
                            <input className="input" type="text" placeholder="Find a repository" />
                        </div>
                        <div className="control">
                            <a className="button is-primary">
                                Search
                        </a>
                        </div>
                    </div>
                </form>
                <GitCard />
                <GitCard />
                <GitCard />
                <GitCard />
                <GitCard />
                <GitCard />
        </>
    );
}

export default RepoHome;