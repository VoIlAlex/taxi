import axios from 'axios'
import actionTypes from './ordersTable.types'

const {
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FILTER_TABLE_SUCCESS,
    FILTER_TABLE_START
} = actionTypes

const filterStart = () => ({
    type: FILTER_TABLE_START
})

export const filterTable = ( filterParam, direction ) => ({
    type: FILTER_TABLE_SUCCESS,
    payload: {
        filterParam,
        direction
    }
})