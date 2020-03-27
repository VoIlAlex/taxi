import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {
    selectAdditionalAddresses,
    selectFromAddress,
    selectToAddress,
    selectTouchedPhone,
    selectPhoneValidate,
    selectPhoneNumber,
    selectLoading
} from '../../redux/order/order.selectors'

import CustomButton from '../custom-button/CustomButton.component'
import FormInput from "../form-input/FormInput.component";
import Loader from "../loader/Loader";

import {
    setFromAddress,
    setToAddress,
    addEmptyInput,
    setPhone,
    setTouchPhone,
    setAdditionalAddress,
    startOrderFetchingAsync
} from '../../redux/order/order.actions'

import './order-form.style.scss'


const OrderForm = ({
                       additionalAddresses, fromAddress, setFromAddress, toAddress, setToAddress, addEmptyInput,
                       phoneValidate, setPhone, touchedPhone, setTouchPhone, setAdditionalAddress, startOrderFetchingAsync,
                       phone, isLoading
                   }) => {


    const [] = useState()

    const handleSubmit = event => {
        event.preventDefault()
        if (phoneValidate) {
            startOrderFetchingAsync({
                phone,
                additionalAddresses,
                fromAddress,
                toAddress
            })
        }
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
                required
            />
            <FormInput
                label={'Куда ехать?'}
                placeholder={'Введите адрес полностью'}
                defaultValue={toAddress}
                onBlur={event => setToAddress(event.target.value)}
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
                                    isAdditional
                                />
                            )
                        })
                        :
                        ''
                }
            </div>
            <div className='add-order'>
                {
                    additionalAddresses.length === 4
                        ?
                        ''
                        :
                        <span
                            className='add-address'
                            onClick={() => addEmptyInput()}
                        >
                    Добавить
                </span>
                }
            </div>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    <CustomButton type='submit'>Создать заказ</CustomButton>
            }
        </form>
    )
}

const mapStateToProps = createStructuredSelector({
    phone: selectPhoneNumber,
    additionalAddresses: selectAdditionalAddresses,
    fromAddress: selectFromAddress,
    toAddress: selectToAddress,
    phoneValidate: selectPhoneValidate,
    touchedPhone: selectTouchedPhone,
    isLoading: selectLoading
})

const mapDispatchToProps = dispatch => ({
    setFromAddress: (value) => dispatch(setFromAddress(value)),
    setToAddress: (value) => dispatch(setToAddress(value)),
    addEmptyInput: () => dispatch(addEmptyInput()),
    setPhone: (value) => dispatch(setPhone(value)),
    setTouchPhone: () => dispatch(setTouchPhone()),
    setAdditionalAddress: (value, id) => dispatch(setAdditionalAddress(value, id)),
    startOrderFetchingAsync: (orderCredentials => dispatch(startOrderFetchingAsync(orderCredentials)))

})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)