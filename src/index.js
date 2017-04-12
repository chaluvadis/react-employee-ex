import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import App from './App/App';
import List from './List/List';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/list" component={List} />
    </div>
  </Router>,
  document.getElementById('root')
);
