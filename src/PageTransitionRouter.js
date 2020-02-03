import React from 'react';
import { Router,Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function PageTransitionRouter(props){
    return(
        <Location>
            {
                ({ location }) => (
                  <TransitionGroup className="transition-group">
                      <CSSTransition key={location.key}
                                     className="fade"
                                     timeout={500}>
                         <Router location={location} className="router">
                            {props.children}
                         </Router>
                      </CSSTransition>
                  </TransitionGroup>
                )
            }
        </Location>
    );
}

export default PageTransitionRouter;