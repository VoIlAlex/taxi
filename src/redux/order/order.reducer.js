import actionTypes from "./order.types";

const {
    SET_SHOW_SUCCESS,
    START_ORDER_FETCH,
    SUCCESS_ORDER_FETCH,
    FAILURE_ORDER_FETCH,
    DELETE_PENDING_ORDERS
} = actionTypes

const initialState = {
    orderCredentials: {},
    pendingOrders: [],
    showSuccess: false,
    isLoading: false,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PENDING_ORDERS:
            return {
                ...state,
                pendingOrders: state.pendingOrders.filter(order => order.id !== action.payload)
            }
        case SET_SHOW_SUCCESS:
            return {
                ...state,
                showSuccess: !state.showSuccess,
                // nor break orderCredentials
                orderCredentials: {}
            }
        case START_ORDER_FETCH:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_ORDER_FETCH:
            return {
                ...state,
                isLoading: false,
                showSuccess: true,
                orderCredentials: {...action.payload},
                pendingOrders: [...state.pendingOrders, action.payload]
            }
        case FAILURE_ORDER_FETCH:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default orderReducer