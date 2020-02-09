import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import MostClicked from './components/mostClicked.component';
import MostRecent from './components/mostRecent.component';
import MostPopularToday from './components/mostPopularToday.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Saved bookmarks</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/mostclicked'} className="nav-link">Most clicked bookmarks</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/mostRecent'} className="nav-link">Most recent bookmarks</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/mostPopularToday'} className="nav-link">Most popular today bookmarks</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/index' component={ Index } />
              <Route path='/mostclicked' component={ MostClicked } />
              <Route path='/mostRecent' component={ MostRecent } />
              <Route path='/mostPopularToday' component={ MostPopularToday } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
