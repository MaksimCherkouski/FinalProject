import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersonData } from './Components/PersonData';
import { StartPage } from './Components/StartPage';
import { Education } from './Components/Education';
import { Contacts } from './Components/Contacts';
import { ResultPage } from './Components/ResultPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/step1">
          <PersonData />
        </Route>
        <Route path="/step2">
          <Education />
        </Route>
        <Route path="/step3">
          <Contacts />
        </Route>
        <Route path="/resultPage">
          <ResultPage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;