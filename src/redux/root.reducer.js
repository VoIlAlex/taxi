import {combineReducers} from 'redux'
import orderReducer from "./order/order.reducer";

const rootReducer = combineReducers({
    order: orderReducer
})

export default rootReducer