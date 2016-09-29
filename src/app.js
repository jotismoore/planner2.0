import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
//Import Components.
import { IndexPage, MasterPage, LoginPage, RegistrationPage, ProfilePage } from './pages';

ReactStormpath.init();
ReactDOM.render(
    <Router history={browserHistory}>
        <HomeRoute path='/' component={MasterPage}>
            <LoginRoute path='/login' component={LoginPage} />
            <Route path='/register' component={RegistrationPage} />
            <IndexRoute component={IndexPage} />
            <AuthenticatedRoute>
                <HomeRoute path='/profile' component={ProfilePage} />
            </AuthenticatedRoute>
        </HomeRoute>
    </Router>,
    document.getElementById('app-container')
);