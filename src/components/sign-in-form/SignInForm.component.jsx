import React, {useState} from 'react'
import {connect} from 'react-redux'

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import Loader from '../loader/Loader'

import {signInStartAsync} from '../../redux/user/user.actions'

import './sign-in-form.style.scss'

const SignInForm = ({isLoading, signInStartAsync}) => {

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
                name={'login'}
                onChange={({target}) => setLogin(target.value)}
                required
            />
            <FormInput
                label={'Пароль'}
                placeholder={'Введите пароль'}
                type={'password'}
                name={'password'}
                onChange={({target}) => setPassword(target.value)}
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
    isLoading: state.user.isLoading
})

const mapDispatchToProps = dispatch => ({
    signInStartAsync: userCredentials => dispatch(signInStartAsync(userCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)