import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import logger  from 'redux-logger'

import rootReducer from "./root.reducer";

const middleware = [logger, thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware))