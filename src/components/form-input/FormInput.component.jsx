import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {deleteAddress} from "../../redux/order/order.actions";

import {selectPhoneValidate} from '../../redux/order/order.selectors'

import {ReactComponent as Bucket} from '../../asserts/Vector.svg'

import './form-input.style.scss'

const FormInput = ({
                       label, placeholder, id, defaultValue, isAdditional,
                       phoneValidate, deleteAddress, isTouched, ...otherPops
                   }) => {
    return (
        <div className='group'>
            {
                label ?
                    <label className='form-input-label'>{label}</label>
                    :
                    null
            }
            <div className="bucket">
                <input
                    id={id}
                    type="text"
                    className={`${phoneValidate ? '' : 'phone-invalid'} 
                                ${isTouched ? 'touched' : ''}
                                form-input`
                    }
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    {...otherPops}
                />
                {
                    isTouched?
                        <p className={'error'}>Введите корректные данные</p>
                        :
                        ''
                }
                {
                    isAdditional
                        ?
                        <div className={'bucket-logo'}>
                            <Bucket id={id} onClick={({target}) => deleteAddress(target.id)}/>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    phoneValidate: selectPhoneValidate
})

const mapDispatchToProps = dispatch => ({
    deleteAddress: id => dispatch(deleteAddress(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormInput)