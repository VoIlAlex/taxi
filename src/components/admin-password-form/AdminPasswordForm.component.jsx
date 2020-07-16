import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from "redux";

import FormInput from "../form-input/FormInput.component";
import LottieLoader from "../lottie-loader/LootieLoader.component";
import CustomButton from "../custom-button/CustomButton.component";

import {signInStartAsync} from "../../redux/user/user.actions";

import './admin-password-form.scss'

const AdminPasswordForm =({isLoading, error, signInStartAsync, history}) => {

    const [password, setPassword] = useState('')

    const passwordHandler = e => {
        e.preventDefault()
        signInStartAsync({login:'admin', password}, () => history.push('/add_taxipark'))
    }
    return (
        <form className={'sign-form'} onSubmit={(e) => passwordHandler(e)}>
            {error ?
                <FormInput
                    type={'password'}
                    label={'Пароль АДМИНА'}
                    placeholder={'Введите админский пароль'}
                    onChange={({target}) => setPassword(target.value)}
                    errorMsg={'Неверные данные'}
                    isInvalid
                    required
                /> :
                <FormInput
                    type={'password'}
                    label={'Пароль АДМИНА'}
                    placeholder={'Введите админский пароль'}
                    onChange={({target}) => setPassword(target.value)}
                    required
                />}
            {
                isLoading
                    ?
                    <LottieLoader/>
                    :
                    <CustomButton type={'submit'}>Войти</CustomButton>
            }
        </form>
    )
}

const mapStateToProps = state => ({
    isLoading: state.user.isLoading,
    error: state.user.error
})

const mapDispatchToProps = dispatch => ({
    signInStartAsync: (userCredentials, cb) => dispatch(signInStartAsync(userCredentials, cb))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AdminPasswordForm)