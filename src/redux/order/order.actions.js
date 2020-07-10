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
    FAILURE_DELETE_PENDING_ORDERS,
    DRIVER_CHANGE_FAILURE,
    FILTER_TABLE_SUCCESS
} = actionTypes

//Show success modal
export const setShowSuccess = () => ({
    type: SET_SHOW_SUCCESS
})


//@Route    POST https://178.159.45.188/api/orders/
//@Access   Cookie required
//@Desc     Post new order
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
        await axios('http://178.159.45.188/api/orders/', {
            data: {...orderCredentials},
            method: "post",
            withCredentials: true
        })
            .then(res => dispatch(successOrderFetch({...orderCredentials, id: v4()})))
            .catch(err => dispatch(failureOrderFetch(err.message)))
    }
}


//@Route    GET https://178.159.45.188/api/orders/
//@Access   Cookie required
//@Desc     Fetch orders
const successFetchPendingOrders = pendingOrders => ({
    type: SUCCESS_FETCH_PENDING_ORDERS,
    payload: pendingOrders
})

const failureFetchPendingOrders = err => ({
    type: FAILURE_FETCH_PENDING_ORDERS,
    payload: err
})

export const fetchPendingOrdersAsync = (cb = () => cb()) => {
    return async dispatch => {
        await axios('http://178.159.45.188/api/orders/', {
            method: "get",
            withCredentials: true
        })
            .then(res => dispatch(successFetchPendingOrders(res.data)))
            .then(_ => cb())
            .catch(err => dispatch(failureFetchPendingOrders(err)))
    }
}


//@Route    DELETE https://178.159.45.188/api/orders/
//@Access   Cookie required
//@Desc     Delete order by id
const deletePendingOrder = id => ({
    type: DELETE_PENDING_ORDERS,
    payload: id
})

const failureDeleteOrder = err => ({
    type: FAILURE_DELETE_PENDING_ORDERS,
    payload: err
})

export const startDeleteOrderAsync = (id, cb) => async dispatch => {
    await axios('http://178.159.45.188/api/orders/', {
        method: "delete",
        withCredentials: true
    })
        .then(res => dispatch(deletePendingOrder(id)))
        .then(_ => cb())
        .catch(err => dispatch(failureDeleteOrder(err)))
}

//@Route    DELETE https://178.159.45.188/api/drivers/assign
//@Access   Cookie required
//@Desc     Change driver by order id
const driverChangeFailure = err => ({
    type: DRIVER_CHANGE_FAILURE,
    payload: err
})

export const startChangeDriverAsync = id => async dispatch => {
    await axios('http://178.159.45.188/api/orders/assign', {
        method: 'delete',
        withCredentials: true,
        data: {
            "id": id
        }
    })
        .then(_ => dispatch(fetchPendingOrdersAsync()))
        .catch(err => dispatch(driverChangeFailure(err)))
}

//Sort table
export const filterTable = ( filterParam, direction ) => ({
    type: FILTER_TABLE_SUCCESS,
    payload: {
        filterParam,
        direction
    }
})