import {combineReducers} from 'redux'

import orderReducer from "./order/order.reducer";
import userReducer from "./user/user.reducer";
import ordersTableReducer from "./orderTable/ordersTable.reducer";

const rootReducer = combineReducers({
    order: orderReducer,
    user: userReducer,
    ordersTable: ordersTableReducer
})

export default rootReducer