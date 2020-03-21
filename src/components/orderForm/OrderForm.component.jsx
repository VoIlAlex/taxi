import React from 'react'
import {connect} from 'react-redux'
import {store} from "../../redux/store";

import CustomButton from '../custom-button/CustomButton.component'
import FormInput from "../form-input/FormInput.component";

import {
    setFromAddress,
    setToAddress,
    addEmptyInput,
    setPhone,
    setTouchPhone,
    setAdditionalAddress,
    setShowSuccess
} from '../../redux/order/order.actions'

import './order-form.style.scss'


const OrderForm = ({
                       additionalAddresses, fromAddress, setFromAddress, toAddress, setToAddress, addEmptyInput,
                       phoneValidate, setPhone, touchedPhone, setTouchPhone, setAdditionalAddress, setShowSuccess
                   }) => {

    const handleSubmit = event => {
        event.preventDefault()
        if(phoneValidate){
            setShowSuccess()
        }
        console.log(store.getState())
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            {
                phoneValidate ?
                    <FormInput
                        label={'Телефон'}
                        placeholder={'Введите номер телефона'}
                        defaultValue={'+375'}
                        onChange={event => setPhone(event.target.value)}
                        isTouched={touchedPhone}
                        required
                    />
                    :
                    <FormInput
                        label={'Телефон'}
                        placeholder={'Введите номер телефона'}
                        defaultValue={'+375'}
                        onBlur={() => setTouchPhone()}
                        onChange={event => setPhone(event.target.value)}
                        isTouched={touchedPhone}
                        required
                    />
            }
            <FormInput
                label={'Адрес подачи'}
                placeholder={'Введите адрес полностью'}
                defaultValue={fromAddress}
                onBlur={event => setFromAddress(event.target.value)}
                isValid={true}
                required
            />
            <FormInput
                label={'Куда ехать?'}
                placeholder={'Введите адрес полностью'}
                defaultValue={toAddress}
                onBlur={event => setToAddress(event.target.value)}
                isValid={true}
                required
            />
            <div className="additionalAddresses">
                {
                    additionalAddresses.length ?
                        additionalAddresses.map(address => {
                            return (
                                <FormInput
                                    key={Math.random()}
                                    id={address.id}
                                    placeholder={'Введите адрес полностью'}
                                    defaultValue={address.address}
                                    onBlur={({target}) => setAdditionalAddress(target.value, target.id)}
                                    label={' '}
                                    isValid={true}
                                    isAdditional
                                />
                            )
                        })
                        :
                        ''
                }
            </div>
            <div className='add-order'>
                <span onClick={() => addEmptyInput()}>Добавить</span>
            </div>

            <CustomButton type='submit'>Создать заказ</CustomButton>
        </form>
    )
}

const mapStateToProps = ({order}) => ({
    additionalAddresses: order.additionalAddresses,
    fromAddress: order.fromAddress,
    toAddress: order.toAddress,
    phoneValidate: order.phoneValidate,
    touchedPhone: order.touchedPhone
})

const mapDispatchToProps = dispatch => ({
    setFromAddress: (value) => dispatch(setFromAddress(value)),
    setToAddress: (value) => dispatch(setToAddress(value)),
    addEmptyInput: () => dispatch(addEmptyInput()),
    setPhone: (value) => dispatch(setPhone(value)),
    setTouchPhone: () => dispatch(setTouchPhone()),
    setAdditionalAddress: (value, id) => dispatch(setAdditionalAddress(value, id)),
    setShowSuccess: () => dispatch(setShowSuccess())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)