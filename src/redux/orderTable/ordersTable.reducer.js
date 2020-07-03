import {sortTable} from '../../utills/tableSort'
import actionTypes from './ordersTable.types'

const {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FILTER_TABLE_SUCCESS
} = actionTypes

const initialState = {
    // ordersList: [
    //     {
    //         taximeter: 'OOO "Андрейка"',
    //         order_number: '123456',
    //         order_date: '02.12.20',
    //         acceptance_time: '12:10',
    //         status: 'создан',
    //         waiting: '[ -10min]',
    //         phone: '+375298220686',
    //         from_address: 'проеспект Антонова, 10',
    //         to_address: 'проспект Маяковского, 283/5',
    //         apply: '19:10',
    //         arrival_time: '15:12',
    //         driver_name: 'Виктор Гаупенко'
    //     },
    //     {
    //         taxName: 'OOO "Максимка"',
    //         order: '223456',
    //         date: '02.12.20',
    //         time: '12:10',
    //         status: 'Ожидание',
    //         waiting: '[ -1min]',
    //         number: '+375291234686',
    //         filed: 'улица Пантелеймонова, 10',
    //         where: 'проспект Машерова, 283/5',
    //         apply: '19:10',
    //         onPlace: '15:12',
    //         driver: 'Михаил Негаупенко'
    //     },
    //     {
    //         taxName: 'OOO "ГлебейкаБлять"',
    //         order: '423456',
    //         date: '02.12.20',
    //         time: '11:10',
    //         status: 'Выехал',
    //         waiting: '[ -24min]',
    //         number: '+355298220686',
    //         filed: 'проспект Машерова, 10',
    //         where: 'улица КогоНибудь, 283/5',
    //         apply: '19:10',
    //         onPlace: '15:12',
    //         driver: 'Эдуард Загаупенко'
    //     },
    //     {
    //         taxName: 'OOO "КакМожноНазвать"',
    //         order: '423456',
    //         date: '02.12.20',
    //         time: '22:30',
    //         status: 'создан',
    //         waiting: '[ -121min]',
    //         number: '+315298220686',
    //         filed: 'улица Антонова, 10',
    //         where: 'проспект Космонавт',
    //         apply: '19:10',
    //         onPlace: '15:12',
    //         driver: 'Инокентий Сквозьаупенко'
    //     }
    // ],
    orderList: [],
    isLoading: true,
    error: null
}

const ordersTableReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_ORDERS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                error:null,
                ordersList: action.payload,
                isLoading: false
            }
        case FILTER_TABLE_SUCCESS:
            return {
                ...state,
                ordersList: [...sortTable(state.ordersList, action.payload.filterParam, action.payload.direction)],
                isLoading: false
            }
        default: return state
    }
}

export default ordersTableReducer

