import React, {useState} from 'react'
import {connect} from 'react-redux'
import {v4} from 'uuid'
import {startOrderFetchingAsync} from '../../redux/order/order.actions'

import CustomButton from '../custom-button/CustomButton.component'
import FormInput from "../form-input/FormInput.component";
import Loader from "../loader/Loader";

import './order-form.style.scss'

const OrderForm = ({startOrderFetchingAsync, isLoading}) => {

    const [phone, setPhone] = useState('+375')
    const [fromAddress, setFromAddress] = useState('')
    const [toAddress, setToAddress] = useState('')
    const [additionalAddresses, setAdditionalAddresses] = useState([])
    const [valid, setValid] = useState(true)

    const validPhone = phone => {
        const reg = /[^[a-z]\+?(\d{1,3})?(\d{6,12})/
        if (reg.test(phone)) {
            setPhone(phone)
            setValid(true)
        }else{
            setValid(false)
        }
    }

    const addAdditionalAddress = (addressValue, id) => {
        return setAdditionalAddresses(additionalAddresses.map(address => id === address.id ?
            {
                address: addressValue,
                id: id
            } : address
            )
        )
    }

    const deleteAdditional = id => setAdditionalAddresses(additionalAddresses.filter(address => id !== address.id))

    const handleSubmit = event => {
        event.preventDefault()
        if(valid) {
            startOrderFetchingAsync({
                phone,
                additionalAddresses,
                fromAddress,
                toAddress
            })
            return ()=> {
                setPhone('+375')
                setAdditionalAddresses([])
                setFromAddress('')
                setToAddress('')
                setValid(true)
            }
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            {
                valid?
                    <FormInput
                        label={'Телефон'}
                        placeholder={'Введите номер телефона'}
                        defaultValue={'+375'}
                        onChange={event => validPhone(event.target.value)}
                        required
                    /> :
                    <FormInput
                        label={'Телефон'}
                        placeholder={'Введите номер телефона'}
                        defaultValue={'+375'}
                        onChange={event => validPhone(event.target.value)}
                        isInvalid
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
                        additionalAddresses.map(({address, id}) =>
                            <FormInput
                                key={Math.random()}
                                id={id}
                                placeholder={'Введите адрес полностью'}
                                defaultValue={address}
                                handleDelete={deleteAdditional}
                                onBlur={({target}) => addAdditionalAddress(target.value, target.id)}
                                label={' '}
                                isAdditional
                            />
                        ) : ''
                }
            </div>
            <div className='add-order'>
                {
                    additionalAddresses.length === 4 ? '' :
                        <span
                            className='add-address'
                            onClick={() => setAdditionalAddresses([...additionalAddresses, {id: v4()}])}
                        >
                    Добавить
                </span>
                }
            </div>
            {
                isLoading ? <Loader/> : <CustomButton type='submit'>Создать заказ</CustomButton>
            }
        </form>
    )
}

const mapStateToProps = ({order}) => ({
    isLoading: order.isLoading
})

const mapDispatchToProps = dispatch => ({
    startOrderFetchingAsync: orderCredentials => dispatch(startOrderFetchingAsync(orderCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)