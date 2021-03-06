import React, { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import TopBar from '../TopBar/TopBar';
import SearchPage from '../SearchPage/SearchPage';
import SpeechPage from '../SpeechPage/SpeechPage';
import SignIn from '../SignIn/SignIn';

import { login, logout } from '../../Utils/AuthUtils';

function App() {
  const [isLogged, setLogged] = useState(false);

  const logIn = (userName, password) => {
    login(userName, password).then((response) => setLogged(true));
  }

  const logOut = () => {
    logout();
    setLogged(false);
  }

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Router>
          <TopBar logout={logOut} />
          <Switch>
            <Route path='/login'>
              <SignIn login={logIn} />
            </Route>
            <Route path="/speech/:id">
              <SpeechPage isLogged={isLogged} />
            </Route>
            <Route path="/">
              <SearchPage isLogged={isLogged} />
            </Route>
          </Switch>
        </Router>
      </div>
    </SnackbarProvider>
  );
}

export default App;
