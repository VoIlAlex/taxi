import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import MainForm from "./page/main-form/MainForm.component";
import SignInPage from "./page/sign-in-page/SignInPage.component";

import {store} from "./redux/store";

import './index.css'


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div className={'main-page'}>
                <Switch>
                    <Route exact path={'/'} component={MainForm} />
                    <Route path={'/user'} component={SignInPage} />
                </Switch>
            </div>
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
