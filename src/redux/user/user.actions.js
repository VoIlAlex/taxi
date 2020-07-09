import axios from 'axios'
import actionTypes from "./user.types";


//@Route    POST https://178.159.45.188:5555/api/login/
//@Access   Public
//@Desc     Login user
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

export const signInStartAsync = (userCredentials, cb) => {
    return async dispatch => {
        dispatch(signInStart())
        await axios('http://178.159.45.188/api/login/', {
            data: userCredentials,
            method: "post",
            withCredentials: true
        })
            .then(res => {
                dispatch(signInSuccess({...userCredentials}))
                cb()
            })
            .catch(err => dispatch(signInFailure(err.message)))
    }
}