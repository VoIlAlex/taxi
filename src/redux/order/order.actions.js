import axios from 'axios'
import actionTypes from "./order.types"

const {
    SET_SHOW_SUCCESS,
    START_ORDER_FETCH,
    SUCCESS_ORDER_FETCH,
    FAILURE_ORDER_FETCH
} = actionTypes

export const setShowSuccess = () => ({
    type: SET_SHOW_SUCCESS
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

export const startOrderFetchingAsync = (orderCredentials, token) => {
    return async dispatch => {
        dispatch(startOrderFetch())
        await axios('https://kandk.team/api/sendForm/', {
            data: {...orderCredentials},
            method: "post",
            withCredentials: true,
            headers: { Authorization: token}
        })
            .then(res => dispatch(successOrderFetch(orderCredentials)))
            // TODO JWToken
            .catch(err => dispatch(failureOrderFetch(err.message)))
    }
}