import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Welcome from './components/Welcome'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <App>
        <Route exact path="/" component={Welcome} />
    </App>
</Router>
, document.getElementById('root'));
registerServiceWorker();
