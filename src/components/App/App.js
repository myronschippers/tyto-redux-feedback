import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

// PAGE COMPONENTS
import Feeling from '../pages/Feeling/Feeling';
import Supported from '../pages/Supported/Supported';
import Understanding from '../pages/Understanding/Understanding';
import Comments from '../pages/Comments/Comments';
import Review from '../pages/Review/Review';
import ThankYou from '../pages/ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>

          <Route path="/" exact component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/supported" component={Supported} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/thank-you" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default App;
