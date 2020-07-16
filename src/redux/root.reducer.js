import {combineReducers} from 'redux'

import orderReducer from "./order/order.reducer";
import userReducer from "./user/user.reducer";
import taximeterReducer from "./taximeters/taximeters.reducer";

const rootReducer = combineReducers({
    order: orderReducer,
    user: userReducer,
    taximeters: taximeterReducer
})

export default rootReducer