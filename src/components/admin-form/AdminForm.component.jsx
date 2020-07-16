import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from "redux";

import {startPostTaximeter} from "../../redux/taximeters/taximeters.actions";
import FormInput from "../form-input/FormInput.component";
import LottieLoader from "../lottie-loader/LootieLoader.component";
import CustomButton from "../custom-button/CustomButton.component";

import './admin-form.style.scss'

const AdminForm = ({startPostTaximeter, history}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [taximeterCredentials, setTaximeterCredentials] = useState({
        title: '',
        login: '',
        password: ''
    })

    const onChangeHandler = e => {
        const {name, value} = e.target
        setTaximeterCredentials({...taximeterCredentials, [name]: value})
    }

    const submitHandler = e => {
        e.preventDefault()
        setIsLoading(true)
        startPostTaximeter(taximeterCredentials, () => setIsLoading(false))
    }

    return (
        <form className='form' onSubmit={(e) => submitHandler(e)}>
            <FormInput
                label={'Название парка'}
                placeholder={'Введите название парка'}
                name={'taxName'}
                onChange={e => onChangeHandler(e)}
                required
            />
            <FormInput
                label={'Яндекс-логин'}
                placeholder={'Введите яндекс-логин'}
                name={'yandexLogin'}
                onChange={e => onChangeHandler(e)}
                required
            />
            <FormInput
                type={'password'}
                label={'Пароль'}
                placeholder={'Введите пароль'}
                name={'password'}
                onChange={e => onChangeHandler(e)}
                required
            />
            {
                isLoading ? <LottieLoader/> : <CustomButton type='submit'>Добавить таксопарк</CustomButton>
            }
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    startPostTaximeter: (taximeter, cb) => dispatch(startPostTaximeter(taximeter, cb))
})

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(AdminForm)