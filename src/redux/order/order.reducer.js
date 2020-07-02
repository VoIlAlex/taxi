import actionTypes from "./order.types";

const {
    SET_SHOW_SUCCESS,
    START_ORDER_FETCH,
    SUCCESS_ORDER_FETCH,
    FAILURE_ORDER_FETCH,
    DELETE_PENDING_ORDERS,
    SUCCESS_FETCH_PENDING_ORDERS,
    FAILURE_FETCH_PENDING_ORDERS,
} = actionTypes

const initialState = {
    orderCredentials: {},
    pendingOrders: [
        {
            taxName: 'OOO "Андрейка"',
            order: '123456',
            date: '02.12.20',
            time: '12:10',
            status: 'создан',
            waiting: '[ -10min]',
            number: '+375298220686',
            filed: 'проеспект Антонова, 10',
            where: 'проспект Маяковского, 283/5',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Виктор Гаупенко'
        },
        {
            taxName: 'OOO "Максимка"',
            order: '223456',
            date: '02.12.20',
            time: '12:10',
            status: 'Ожидание',
            waiting: '[ -1min]',
            number: '+375291234686',
            filed: 'улица Пантелеймонова, 10',
            where: 'проспект Машерова, 283/5',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Михаил Негаупенко'
        },
        {
            taxName: 'OOO "ГлебейкаБлять"',
            order: '423456',
            date: '02.12.20',
            time: '11:10',
            status: 'Выехал',
            waiting: '[ -24min]',
            number: '+355298220686',
            filed: 'проспект Машерова, 10',
            where: 'улица КогоНибудь, 283/5',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Эдуард Загаупенко'
        },
        {
            taxName: 'OOO "КакМожноНазвать"',
            order: '423456',
            date: '02.12.20',
            time: '22:30',
            status: 'создан',
            waiting: '[ -121min]',
            number: '+315298220686',
            filed: 'улица Антонова, 10',
            where: 'проспект Космонавт',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Инокентий Сквозьаупенко'
        }
    ],
    showSuccess: false,
    isLoading: false,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
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
                pendingOrders: action.payload
            }
        case DELETE_PENDING_ORDERS:
            return {
                ...state,
                pendingOrders: state.pendingOrders.filter(order => order.order !== action.payload)
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
        default:
            return state
    }
}

export default orderReducer