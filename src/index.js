import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';

import * as routes from './constants/routes';
import history from './constants/history';
import store from './store';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Posts from './components/Posts';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} >
            <Route exact path={routes.APP} component={() => <App />} />
            <Route exact path={routes.POSTS} component={() => <Posts />} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();