import actionTypes from "./taximeters.types";

const {
    SET_SHOW_SUCCESS,
    FETCH_TAXIMETERS_SUCCESS,
    FETCH_TAXIMETERS_FAILURE,
    POST_TAXIMETER_FAILURE,
    POST_TAXIMETER_SUCCESS,
    UPDATE_TAXIMETER_FAILURE,
    UPDATE_TAXIMETER_SUCCESS,
    DELETE_TAXIMETER_SUCCESS,
    DELETE_TAXIMETER_FAILURE,
    GET_VERIFICATION_FAILURE,
    GET_VERIFICATION_SUCCESS
} = actionTypes

const initialState = {
    showSuccess: false,
    error: null,
    taximeters:[
        {
            "error": -1,
            "id": "5f0ca6815b5b7996da5acfb4",
            "login": "kandk.team@yandex.ru",
            "title": "ОАО \"Андрейка\"",
            "next_number": 54234,
            "in_verification": 'False'
        },
        {
            "error": null,
            "id": "5f0ca7ba5b5b7996da5acfb5",
            "login": "taxist@kandk.team",
            "title": "ООО СЕРВИС 7663",
            "next_number": 34243,
            "in_verification": 'True'
        }
    ]
}

const taximeterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_SUCCESS:
            return {
                ...state,
                showSuccess: !state.showSuccess
            }
        case FETCH_TAXIMETERS_SUCCESS:
            return {
                ...state,
                taximeters: action.payload
            }
        case GET_VERIFICATION_FAILURE:
        case DELETE_TAXIMETER_FAILURE:
        case UPDATE_TAXIMETER_FAILURE:
        case POST_TAXIMETER_FAILURE:
        case FETCH_TAXIMETERS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_TAXIMETER_SUCCESS:
        case POST_TAXIMETER_SUCCESS:
        case DELETE_TAXIMETER_SUCCESS:
            return {
                ...state
            }
        case GET_VERIFICATION_SUCCESS:
            return {
                ...state,
                session_id: action.payload
            }
        default: return state
    }
}

export default taximeterReducer