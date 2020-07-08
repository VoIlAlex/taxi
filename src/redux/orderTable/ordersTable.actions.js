import actionTypes from './ordersTable.types'

export const filterTable = ( filterParam, direction ) => ({
    type: actionTypes.FILTER_TABLE_SUCCESS,
    payload: {
        filterParam,
        direction
    }
})