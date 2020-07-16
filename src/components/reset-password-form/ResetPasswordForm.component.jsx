import React, {useState} from 'react'
import {connect} from 'react-redux'

import FormInput from "../form-input/FormInput.component";
import LottieLoader from "../lottie-loader/LootieLoader.component";
import CustomButton from "../custom-button/CustomButton.component";

import {startResetPasswordAsync} from "../../redux/user/user.actions";

const ResetPasswordForm = ({startResetPasswordAsync}) => {
    const [isLoading, setIsLoading] = useState(false)

    const [passwordCredentials, setPasswordCredentials] = useState({
        admin_password:'',
        old_password:'',
        new_password: '',
        repeat_password:''
    })

    const changeHandler = e => {
        let {name, value} = e.target
        setPasswordCredentials({...passwordCredentials,[name]:value})
    }

    const submitHandler = e => {
        e.preventDefault()
        setIsLoading(true)
        startResetPasswordAsync(passwordCredentials, () => setIsLoading(false))
        console.log(passwordCredentials)
    }
    let {admin_password, old_password, new_password, repeat_password} = passwordCredentials
    return (
        <form className='form' onSubmit={e => submitHandler(e)}>
            <FormInput
                type={'password'}
                label={'Пароль АДМИНА'}
                placeholder={'Введите админский пароль'}
                value={admin_password}
                onChange={e => changeHandler(e)}
                name={'admin_password'}
                required
            />

            <FormInput
                label={'Старый пароль'}
                placeholder={'Введите старый пароль'}
                name={'old_password'}
                defaultValue={old_password}
                onChange={e => changeHandler(e)}
                required
            />
            <FormInput
                type={'password'}
                label={'Новый пароль'}
                placeholder={'Введите новый пароль'}
                name={'new_password'}
                defaultValue={new_password}
                onChange={e => changeHandler(e)}
                required
            />
            <FormInput
                type={'password'}
                label={'Подтверждение'}
                placeholder={'Введите новый пароль еще раз'}
                name={'repeat_password'}
                defaultValue={repeat_password}
                onChange={e => changeHandler(e)}
                required
            />
            {
                isLoading ? <LottieLoader/> : <CustomButton type='submit'>Обновить данные</CustomButton>
            }
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    startResetPasswordAsync: (password, cb) => dispatch(startResetPasswordAsync(password, cb))
})

export default connect(null, mapDispatchToProps)(ResetPasswordForm)