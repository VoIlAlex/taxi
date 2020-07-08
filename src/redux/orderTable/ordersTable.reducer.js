import {sortTable} from '../../utills/tableSort'
import actionTypes from './ordersTable.types'

const initialState = {
    orderList: [],
    isLoading: true,
    error: null
}

const ordersTableReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FILTER_TABLE_SUCCESS:
            return {
                ...state,
                ordersList: [...sortTable(state.ordersList, action.payload.filterParam, action.payload.direction)],
                isLoading: false
            }
        default: return state
    }
}

export default ordersTableReducer

