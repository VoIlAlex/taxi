import actionTypes from "./order.types";
import {addAdditional, deleteAdditional} from "./order.utils";

const {
    SET_PHONE,
    SET_FROM_ADDRESS,
    SET_TO_ADDRESS,
    ADD_EMPTY_INPUT,
    SHOW_SUCCESS,
    RESET_ORDER,
    SET_TOUCH_PHONE,
    SET_ADDITIONAL_ADDRESSES,
    DELETE_ADDRESS
} = actionTypes

const initialState = {
    phone: '',
    touchedPhone: false,
    phoneValidate: false,
    fromAddress: '',
    toAddress: '',
    additionalAddresses: [],
    showSuccess: false
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
        case SHOW_SUCCESS:
            return {
                ...state,
                showSuccess: !state.showSuccess
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
        default:
            return state
    }
}

export default orderReducer