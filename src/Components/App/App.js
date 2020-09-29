import React from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import TopBar from '../TopBar/TopBar';
import SearchPage from '../SearchPage/SearchPage';
import SpeechPage from '../SpeechPage/SpeechPage';
import SignIn from '../SignIn/SignIn';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Router>
          <TopBar />
          <Switch>
            <Route path='/login'>
              <SignIn />
            </Route>
            <Route path="/speech/:id">
              <SpeechPage />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </SnackbarProvider>
  );
}

export default App;
