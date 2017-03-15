import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './react-components/app-layout/app';

// loads static files with file-loader when app lauches
var staticHTMLFile = require('file-loader?name=[name].[ext]!./index.html');

ReactDOM.render(<App/>, document.getElementById('base-container'));

// ReactDOM.render(<Router history={browserHistory}>
//   <Route path='/' component={ App }>
//     <IndexRoute component={ PostList } />
//     <Route path='post' component={ EditPost } />
//     <Route path='edit/:id' component={ EditPost } />
//   </Route>
// </Router>, document.getElementById("placeholder"));