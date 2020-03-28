import React from 'react'

import {ReactComponent as Bucket} from '../../asserts/Vector.svg'

import './form-input.style.scss'

const FormInput = ({
                       label, placeholder, id, defaultValue, isAdditional,
                       isInvalid, handleDelete, ...otherPops
                   }) => {
    return (
        <div className='group'>
            {
                label ? <label className='form-input-label'>{label}</label> : ''
            }
            <div className="bucket">
                <input
                    id={id}
                    type="text"
                    className={`${isInvalid ? 'touched' : ''} form-input`}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    {...otherPops}
                />
                {
                    isInvalid ? <p className={'error'}>Введите корректные данные</p> : ''
                }
                {
                    isAdditional ?
                        <div className={'bucket-logo'}>
                            <Bucket
                                id={id}
                                onClick={({target}) => handleDelete(target.id)}
                            />
                        </div> : ''
                }
            </div>
        </div>
    )
}

export default FormInput