import React from 'react';

function GitCard({ item }) {
  return (
    <div className="box has-background-light" style={{ marginTop:20}}>
      <article className="media">
        <figure className="media-left">
          <p className="image is-96x96">
            <img src={item.avatar} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <h1 className="title is-3">{item.name}</h1>
            <h6 className="subtitle is-primary">{item.description}</h6>

          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Size</p>
                  <p className="subtitle">{item.repoSize}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Forks</p>
                  <p className="subtitle">{item.forks}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Score</p>
                  <p className="subtitle">{item.score}</p>
                </div>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <a href={item.repoHome} 
                   rel="external"
                   target="_blank"
                   className="button is-primary is-outlined">
                  <span className="icon"><i className="fab fa-github"></i></span>
                  <span>Check Them Out!</span>
                 </a>
              </div>
              <div className="level-item">
                <button className="button is-primary is-outlined">
                  <span className="icon"><i className="far fa-thumbs-up"></i></span>
                 </button>
              </div>
              <div className="level-item">
                <button className="button is-danger is-outlined">
                  <span className="icon"><i className="far fa-thumbs-down"></i></span>
                 </button>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}
export default GitCard;