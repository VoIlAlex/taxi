import actionTypes from "./user.types";

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false,
                error: null
            }
        case actionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer