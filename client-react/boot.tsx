import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/global.css';

ReactDOM.render(
    <Router>
        <Routes/>
    </Router>,
    document.getElementById("app")
);

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
