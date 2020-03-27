import {combineReducers} from 'redux'
import orderReducer from "./order/order.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
    order: orderReducer,
    user: userReducer
})

export default rootReducer