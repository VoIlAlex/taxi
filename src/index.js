import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker';


import Routes from "./components/route/Route.component";

import {store, persistor} from "./redux/store";

import './index.css'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <div className={'main-page'}>
                    <Routes />
                </div>
            </PersistGate>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
