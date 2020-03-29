import axios from 'axios'
import actionTypes from "./user.types";

export const signInStart = () => ({
    type: actionTypes.SIGN_IN_START
})

export const signInFailure = error => ({
    type: actionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const signInSuccess = user => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInStartAsync = (userCredentials) => {
    return async dispatch => {
        dispatch(signInStart())
        await axios.post('/api/login/', userCredentials)
            .then(res => dispatch(signInSuccess(userCredentials)))
            // TODO JWToken
            .catch(err => dispatch(signInFailure(err.message)))
    }
}