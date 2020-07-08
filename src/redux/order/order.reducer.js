import actionTypes from "./order.types";

const {
    SET_SHOW_SUCCESS,
    START_ORDER_FETCH,
    SUCCESS_ORDER_FETCH,
    FAILURE_ORDER_FETCH,
    DELETE_PENDING_ORDERS,
    SUCCESS_FETCH_PENDING_ORDERS,
    FAILURE_FETCH_PENDING_ORDERS,
    FAILURE_DELETE_PENDING_ORDERS
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
        case FAILURE_DELETE_PENDING_ORDERS:
            return {
                ...state,
                error: action.payload
            }
        case FAILURE_FETCH_PENDING_ORDERS:
            return {
                ...state,
                isLoadingPending: false,
                error: action.payload
            }
        case SUCCESS_FETCH_PENDING_ORDERS:
            return {
                ...state,
                isLoadingPending: false,
                pendingOrders: action.payload
            }
        case DELETE_PENDING_ORDERS:
            return {
                ...state,
                pendingOrders: action.payload
            }
        case SET_SHOW_SUCCESS:
            return {
                ...state,
                showSuccess: !state.showSuccess,
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
                pendingOrders: [...state.pendingOrders, {...action.payload, to_address: action.payload.to_addresses[0]}]
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