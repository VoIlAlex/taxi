import actionTypes from "./order.types";

const {
    SET_SHOW_SUCCESS,
    START_ORDER_FETCH,
    SUCCESS_ORDER_FETCH,
    FAILURE_ORDER_FETCH
} = actionTypes

const initialState = {
    orderCredentials: {},
    showSuccess: false,
    isLoading: false,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
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
                orderCredentials: {...action.payload}
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