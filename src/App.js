import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersonData } from './Components/PersonData';
import { StartPage } from './Components/StartPage';
import { Education } from './Components/Education';
import { Contacts } from './Components/Contacts';
import { ResultPage } from './Components/ResultPage';
import { Finish } from './Components/Finish';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/FinalProject" component={StartPage} />

        <Route path="/step1" component={PersonData} />

        <Route path="/step2" component={Education} />

        <Route path="/step3" component={Contacts} />

        <Route path="/resultPage" component={ResultPage} />

        <Route path="/finish" component={Finish} />

      </Switch>
    </Router >

  );
}

export default App;