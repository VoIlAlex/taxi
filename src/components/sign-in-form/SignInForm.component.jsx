import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from "redux";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import LottieLoader from "../lottie-loader/LootieLoader.component";

import {signInStartAsync} from '../../redux/user/user.actions'

import './sign-in-form.style.scss'

import { routes } from '../../constants/routes';

const SignInForm = ({isLoading, error, history, signInStartAsync}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        signInStartAsync({
            login,
            password
        }, () => history.push(routes.main))
    }

    return (
        <form className={'sign-form'} onSubmit={(event) => handleSubmit(event)}>
            <FormInput
                label={'Логин'}
                placeholder={'Введите логин'}
                onChange={({target}) => setLogin(target.value)}
                required
            />
            <FormInput
                label={'Пароль'}
                placeholder={'Введите пароль'}
                type={'password'}
                onChange={({target}) => setPassword(target.value)}
                isInvalid={error}
                errorMsg={'Неверный логин или пароль'}
                required
            />
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
)(SignInForm)