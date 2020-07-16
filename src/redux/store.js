import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

import rootReducer from "./root.reducer";

const middleware = [logger, thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store