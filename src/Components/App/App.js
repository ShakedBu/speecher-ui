import React from 'react';
import './App.css';
import TopBar from '../TopBar/TopBar';
import SearchPage from '../SearchPage/SearchPage';
import SpeechPage from '../SpeechPage/SpeechPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Switch>
          <Route path="/speech/:id">
            <SpeechPage />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
