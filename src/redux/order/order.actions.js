import actionTypes from "./order.types"
import {v4} from 'uuid'

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

export const setPhone = number => {
    number = number.trim()
    const reg = /[^[a-z]\+?(\d{1,3})?(\d{6,12})/
    if (reg.test(number)) {
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

const startOrderFetch = () => ({
    type: START_ORDER_FETCH
})

const failureOrderFetch = (msg) => ({
    type: FAILURE_ORDER_FETCH,
    payload: msg
})

const successOrderFetch = ({...orderCredentials}) => ({
    type: SUCCESS_ORDER_FETCH,
    payload: orderCredentials
})

export const startOrderFetchingAsync = ({...orderCredentials}) => {
    return dispatch => {
        dispatch(startOrderFetch())

        setTimeout(()=>{
            dispatch(successOrderFetch(orderCredentials))
            console.log(orderCredentials)
        },3000)
    }
}