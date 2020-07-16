import axios from 'axios'
import actionTypes from "./taximeters.types";

const {
    SET_SHOW_SUCCESS,
    FETCH_TAXIMETERS_FAILURE,
    FETCH_TAXIMETERS_SUCCESS,
    POST_TAXIMETER_FAILURE,
    POST_TAXIMETER_SUCCESS,
    UPDATE_TAXIMETER_FAILURE,
    UPDATE_TAXIMETER_SUCCESS,
    DELETE_TAXIMETER_FAILURE,
     DELETE_TAXIMETER_SUCCESS,
    GET_VERIFICATION_FAILURE,
    GET_VERIFICATION_SUCCESS
} = actionTypes

export const setShowSuccess = () => ({
    type: SET_SHOW_SUCCESS
})

const fetchTaximetersSuccess = taximeters => ({
    type: FETCH_TAXIMETERS_SUCCESS,
    payload: taximeters
})

const fetchTaximetersFailure = err => ({
    type: FETCH_TAXIMETERS_FAILURE,
    payload: err
})

export const startFetchTaximetersAsync = (cb = () => cb()) => async dispatch => {
    await axios('http://178.159.45.188/api/taximeters', {
        method: "get",
        withCredentials: true
    })
        .then(res => dispatch(fetchTaximetersSuccess(res.data)))
        .then(_ => cb())
        .catch(err => dispatch(fetchTaximetersFailure(err)))
}


const postTaximeterSuccess = () => ({
    type:POST_TAXIMETER_SUCCESS
})

const postTaximeterFailure = err => ({
    type: POST_TAXIMETER_FAILURE,
    payload: err
})


export const startPostTaximeter = (taximeter, cb = () => cb()) => async dispatch => {
    await axios('http://178.159.45.188/api/taximeters', {
        method: "post",
        withCredentials: true,
        data: {...taximeter}
    })
        .then(_ => dispatch(postTaximeterSuccess()))
        .then(_ => cb())
        .catch(err => dispatch(postTaximeterFailure(err)))
}

const updateTaximeterSuccess = () => ({
    type:UPDATE_TAXIMETER_SUCCESS
})

const updateTaximeterFailure = err => ({
    type: UPDATE_TAXIMETER_FAILURE,
    payload: err
})

export const startUpdateAsync = (taximeter, cb = () => cb()) => async dispatch => {
    await axios('http://178.159.45.188/api/taximeters', {
        method: "put",
        withCredentials: true,
        data: {...taximeter}
    })
        .then(_ => dispatch(updateTaximeterSuccess()))
        .then(_ => cb())
        .catch(err => dispatch(updateTaximeterFailure(err)))
}


const deleteTaximeterSuccess = () => ({
    type:DELETE_TAXIMETER_SUCCESS
})

const deleteTaximeterFailure = err => ({
    type: DELETE_TAXIMETER_FAILURE,
    payload: err
})

export const startDeleteTaximeterAsync = (id, cb = () => cb()) => async dispatch => {
    await axios('http://178.159.45.188/api/taximeters', {
        method: "delete",
        withCredentials: true,
        data: {id}
    })
        .then(_ => dispatch(deleteTaximeterSuccess()))
        .then(_ => cb())
        .catch(err => dispatch(deleteTaximeterFailure(err)))
}


const getVerificationSuccess = session_id => ({
    type:GET_VERIFICATION_SUCCESS,
    payload: session_id
})

const getVerificationFailure = err => ({
    type: GET_VERIFICATION_FAILURE,
    payload: err
})

export const getVerification = id => async dispatch => {
    await axios('http://178.159.45.188/api/taximeters/verification', {
        method: 'get',
        withExtraArgument: true,
        data: {id}
    })
        .then(res => dispatch(getVerificationSuccess(res.data.session_id)))
        .catch(err => dispatch(getVerificationFailure(err)))
}

export const postVerificationCode = (session_id, code, cb) => async dispatch => {
    await axios('http://178.159.45.188/api/taximeters/verification', {
        method: 'post',
        withCredentials: true,
        data: {
            session_id, code
        }
    })
        .then(_ => cb())
        .catch(err => dispatch(getVerificationFailure(err)))
}