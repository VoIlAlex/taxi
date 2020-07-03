import axios from 'axios'
import actionTypes from './ordersTable.types'

const {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FILTER_TABLE_SUCCESS
} = actionTypes

export const filterTable = ( filterParam, direction ) => ({
    type: FILTER_TABLE_SUCCESS,
    payload: {
        filterParam,
        direction
    }
})

const startOrdersFetching = () => ({
    type: FETCH_ORDERS_START
})

const failureOrdersFetching = err => ({
    type: FETCH_ORDERS_FAILURE,
    payload: err
})

const successOrdersFetching = orders => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
})

export const startFetchingOrdersAsync  = () => async dispatch => {
    dispatch(startOrdersFetching())
    await axios('https://kandk.team/api/orders/', {
        method: "get",
        withCredentials: true
    })
        .then(res => dispatch(successOrdersFetching(res.data)))
        .catch(err => dispatch(failureOrdersFetching(err)))
}