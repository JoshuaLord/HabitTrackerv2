import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import HabitManager from './components/Habits/HabitManager';
import DesignPatternManager from './components/DesignPatterns/DesignPatternManager';
import ConceptManager from './components/Concepts/ConceptManager';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">MERN</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/habits">Habits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/design-patterns">Design Patterns</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/concepts">Concepts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container mt-5">
            <Switch>
                <Route exact path="/">
                    <div>Welcome</div>
                </Route>
                <Route path="/habits">
                    <HabitManager/>
                </Route>
                <Route exact path="/design-patterns">
                    <DesignPatternManager/>
                </Route>    
                <Route exact path="/concepts">
                    <ConceptManager/>
                </Route>  
            </Switch>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);