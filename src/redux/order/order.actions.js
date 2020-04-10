import axios from 'axios'
import {v4} from 'uuid'
import actionTypes from "./order.types"

const {
    SET_SHOW_SUCCESS,
    START_ORDER_FETCH,
    SUCCESS_ORDER_FETCH,
    FAILURE_ORDER_FETCH,
    DELETE_PENDING_ORDERS,
    SUCCESS_FETCH_PENDING_ORDERS,
    FAILURE_FETCH_PENDING_ORDERS
} = actionTypes

const failureFetchPendingOrders = err => ({
    type:FAILURE_FETCH_PENDING_ORDERS,
    payload: err
})

const successFetchPendingOrders = pendingOrders => ({
    type: SUCCESS_FETCH_PENDING_ORDERS,
    payload: pendingOrders
})

export const deletePendingOrder = id => ({
    type: DELETE_PENDING_ORDERS,
    payload: id
})

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

export const startOrderFetchingAsync = orderCredentials => {
    return async dispatch => {
        dispatch(startOrderFetch())
         await axios('https://kandk.team/api/orders/', {
             data: {...orderCredentials},
             method: "post",
             withCredentials: true
         })
             .then(res => dispatch(successOrderFetch({...orderCredentials, id: v4()})))
             .catch(err => dispatch(failureOrderFetch(err.message)))
    }
}

export const fetchPendingOrdersAsync = () => {
    return async dispatch => {
        await axios('https://kandk.team/api/orders/', {
            method: "get",
            withCredentials: true
        })
            .then(res => dispatch(successFetchPendingOrders(res.data)))
            .catch(err => dispatch(failureFetchPendingOrders(err)))
    }
}