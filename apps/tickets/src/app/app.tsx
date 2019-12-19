import React, {useState, useEffect} from 'react';

import './app.scss';

import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Ticket } from '@goodfaith/data'



const StyledApp = styled.div`
  ...
`;



export const App = () => {

  const [tickets, setTickets] = useState<Ticket[]>([]);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */

  useEffect(() => {
    fetch('/api/tickets')
      .then(t => t.json())
      .then(setTickets);
  }, []);

  return (
    <StyledApp>
      <div className="app">
        <header className="flex">
          <img
            alt=""
            width="75"
            src="https://nx.dev/assets/images/nx-logo-white.svg"
          />
          <h1>Welcome to tickets!</h1>
        </header>
        <main>
          {tickets.map(t => (
            <p className="ticket flex" key={t.id}>
              {t.title}
            </p>
          ))}
        </main>

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        />
        {/* END: routes */}
      </div>
    </StyledApp>
  );
};

export default App;
