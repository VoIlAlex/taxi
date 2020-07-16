import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'

import FormInput from "../form-input/FormInput.component";
import LottieLoader from "../lottie-loader/LootieLoader.component";
import CustomButton from "../custom-button/CustomButton.component";

import {setShowSuccess} from "../../redux/taximeters/taximeters.actions";
import {startUpdateAsync} from "../../redux/taximeters/taximeters.actions";

const UpdateForm = ({taximeters, history, match, showSuccess, startUpdateAsync}) => {
    let taximeter = taximeters.filter(tax => match.params.id === tax.id)[0]

    const [isLoading, setIsLoading] = useState(false)
    const [taximeterCredentials, setTaximeterCredentials] = useState({
        title: taximeter.title,
        login: taximeter.login,
        password: ''
    })

    const onChangeHandler = e => {
        const {name, value} = e.target
        setTaximeterCredentials({...taximeterCredentials, [name]: value})
    }

    const submitHandler = e => {
        e.preventDefault()
        startUpdateAsync(
            {...taximeterCredentials, id: match.params.id},
            showSuccess(history.push('/add_taxipark'))
            )
    }

    return (
        <form className='form' onSubmit={(e) => submitHandler(e)}>
            <FormInput
                label={'Название парка'}
                placeholder={'Введите название парка'}
                name={'taxName'}
                defaultValue={taximeterCredentials.title}
                onChange={e => onChangeHandler(e)}
                required
            />

            <FormInput
                label={'Яндекс-логин'}
                placeholder={'Введите яндекс-логин'}
                name={'yandexLogin'}
                defaultValue={taximeterCredentials.login}
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
                isLoading ? <LottieLoader/> : <CustomButton type='submit'>Обновить данные</CustomButton>
            }
        </form>
    )
}

const mapStateToProps = state => ({
    taximeters: state.taximeters.taximeters
})

const mapDispatchToProps = dispatch => ({
    showSuccess: cb => dispatch(setShowSuccess(cb)),
    startUpdateAsync:(taximeter, cb) => dispatch(startUpdateAsync(taximeter, cb))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
) (UpdateForm)