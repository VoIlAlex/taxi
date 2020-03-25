import actionTypes from "./order.types";
import {addAdditional, deleteAdditional} from "./order.utils";

const {
    SET_PHONE,
    SET_FROM_ADDRESS,
    SET_TO_ADDRESS,
    ADD_EMPTY_INPUT,
    RESET_ORDER,
    SET_TOUCH_PHONE,
    SET_ADDITIONAL_ADDRESSES,
    DELETE_ADDRESS,
    START_ORDER_FETCH,
    SUCCESS_ORDER_FETCH,
    FAILURE_ORDER_FETCH
} = actionTypes

const initialState = {
    phone: '',
    touchedPhone: false,
    phoneValidate: false,
    fromAddress: '',
    toAddress: '',
    additionalAddresses: [],
    showSuccess: false,
    isLoading: false,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHONE:
            return {
                ...state,
                phone: action.payload.phone,
                phoneValidate: action.payload.validate,
                touchedPhone: !action.payload.validate
            }
        case SET_FROM_ADDRESS:
            return {
                ...state,
                fromAddress: action.payload
            }
        case SET_TO_ADDRESS:
            return {
                ...state,
                toAddress: action.payload
            }
        case ADD_EMPTY_INPUT:
            return {
                ...state,
                additionalAddresses: [...state.additionalAddresses, action.payload]
            }
        case SET_ADDITIONAL_ADDRESSES:
            return {
                ...state,
                additionalAddresses: addAdditional(state.additionalAddresses, action.payload)
            }
        case RESET_ORDER:
            return {
                phone: '',
                phoneValidate: false,
                fromAddress: '',
                toAddress: '',
                additionalAddresses: [],
                showSuccess: false
            }
        case DELETE_ADDRESS:
            return {
                ...state,
                additionalAddresses: deleteAdditional(state.additionalAddresses, action.payload)
            }
        case SET_TOUCH_PHONE:
            return {
                ...state,
                touchedPhone: true
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
                ...action.payload
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