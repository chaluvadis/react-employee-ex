import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import App from './App/App';
import './index.css';

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
