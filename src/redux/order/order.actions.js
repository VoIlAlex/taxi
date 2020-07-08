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
    FAILURE_FETCH_PENDING_ORDERS,
    FAILURE_DELETE_PENDING_ORDERS
} = actionTypes

//Show success modal
export const setShowSuccess = () => ({
    type: SET_SHOW_SUCCESS
})

//Post new order
const startOrderFetch = () => ({
    type: START_ORDER_FETCH
})

const successOrderFetch = ({...orderCredentials}) => ({
    type: SUCCESS_ORDER_FETCH,
    payload: orderCredentials
})

const failureOrderFetch = msg => ({
    type: FAILURE_ORDER_FETCH,
    payload: msg
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


//Fetch orders
const successFetchPendingOrders = pendingOrders => ({
    type: SUCCESS_FETCH_PENDING_ORDERS,
    payload: pendingOrders
})

const failureFetchPendingOrders = err => ({
    type:FAILURE_FETCH_PENDING_ORDERS,
    payload: err
})


export const fetchPendingOrdersAsync = (cb = () => cb()) => {
    return async dispatch => {
        await axios('https://kandk.team/api/orders/', {
            method: "get",
            withCredentials: true
        })
            .then(res => dispatch(successFetchPendingOrders(res.data)))
            .then(_ => cb())
            .catch(err => dispatch(failureFetchPendingOrders(err)))
    }
}

//Delete order
const deletePendingOrder = orders => ({
    type: DELETE_PENDING_ORDERS,
    payload: orders
})

const failureDeleteOrder = err => ({
    type:FAILURE_DELETE_PENDING_ORDERS,
    payload: err
})

export const startDeleteOrderAsync = (id, cb) => async dispatch => {
    await axios('https://kandk.team/api/orders/', {
        method: "delete",
        withCredentials: true
    })
        .then(res => dispatch(deletePendingOrder(res.data.orders)))
        .then(_ => cb())
        .catch(err => dispatch(failureDeleteOrder(err)))
}