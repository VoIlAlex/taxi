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

export const signInStartAsync = ({...userCredentials}) => {
    console.log(userCredentials)
    return dispatch => {
        dispatch(signInStart())

        setTimeout(()=> {
            console.log(userCredentials)
            dispatch(signInSuccess(userCredentials))
        },5000)
    }
}