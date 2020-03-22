import actionTypes from "./order.types";
import validator from "validator/es";
import {v4} from 'uuid'

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

export const setPhone = number => {
    number = number.trim()
    if (validator.isMobilePhone(number, ['be-BY'])) {
        return {
            type: SET_PHONE,
            payload: {
                phone: number,
                validate: true
            }
        }
    }
    return {
        type: SET_PHONE,
        payload: {
            phone: number,
            validate: false
        }
    }
}

export const setFromAddress = address => ({
    type: SET_FROM_ADDRESS,
    payload: address
})

export const setToAddress = address => ({
    type: SET_TO_ADDRESS,
    payload: address
})

export const addEmptyInput = () => ({
    type: ADD_EMPTY_INPUT,
    payload: {id: v4(), address: ''}
})

export const setShowSuccess = () => ({
    type: SHOW_SUCCESS
})

export const resetOrder = () => ({
    type: RESET_ORDER
})

export const setTouchPhone = () => ({
    type: SET_TOUCH_PHONE
})

export const setAdditionalAddress = (value, id) => {
    return {
        type: SET_ADDITIONAL_ADDRESSES,
        payload: {
            value,
            id
        }
    }
}

export const deleteAddress = id => ({
        type: DELETE_ADDRESS,
        payload: id
})