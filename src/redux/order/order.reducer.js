import actionTypes from "./order.types";
import {sortTable} from "../../utills/tableSort";

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

const initialState = {
    orderCredentials: {},
    pendingOrders: [],
    orderForTable: [],
    showSuccess: false,
    isLoading: false,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case DRIVER_CHANGE_FAILURE:
        case FAILURE_DELETE_PENDING_ORDERS:
            return {
                ...state,
                error: action.payload
            }
        case FAILURE_FETCH_PENDING_ORDERS:
            return {
                ...state,
                isLoadingPending: false,
                error: action.payload
            }
        case SUCCESS_FETCH_PENDING_ORDERS:
            return {
                ...state,
                isLoadingPending: false,
                pendingOrders: action.payload,
                orderForTable: action.payload
            }
        case DELETE_PENDING_ORDERS:
            return {
                ...state,
                pendingOrders: [...state.pendingOrders.filter(order => order.id !== action.payload)],
                orderForTable: [...state.orderForTable.filter(order => order.id !== action.payload)]
            }
        case SET_SHOW_SUCCESS:
            return {
                ...state,
                showSuccess: !state.showSuccess,
                orderCredentials: {}
            }
        case START_ORDER_FETCH:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_ORDER_FETCH:
            return {
                ...state,
                isLoading: false,
                showSuccess: true,
                orderCredentials: {...action.payload},
                pendingOrders: [...state.pendingOrders, {...action.payload, to_address: action.payload.to_addresses[0]}]
            }
        case FAILURE_ORDER_FETCH:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FILTER_TABLE_SUCCESS:
            return {
                ...state,
                orderForTable: [...sortTable(state.orderForTable, action.payload.filterParam, action.payload.direction)]
            }
        default:
            return state
    }
}

export default orderReducer