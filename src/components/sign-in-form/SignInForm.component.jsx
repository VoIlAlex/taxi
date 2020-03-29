import React, {useState} from 'react'
import {connect} from 'react-redux'

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import Loader from '../loader/Loader'

import {signInStartAsync} from '../../redux/user/user.actions'

import './sign-in-form.style.scss'

const SignInForm = ({isLoading, error, signInStartAsync}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        signInStartAsync({
            login,
            password
        })
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
                    <Loader/>
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
    signInStartAsync: userCredentials => dispatch(signInStartAsync(userCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)