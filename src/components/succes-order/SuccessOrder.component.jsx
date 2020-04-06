import React from 'react'
import {connect} from 'react-redux'
import {setShowSuccess} from '../../redux/order/order.actions'

import CustomButton from "../custom-button/CustomButton.component";
import {ReactComponent as SuccessLogo} from '../../asserts/Success.svg'

import './success-order.style.scss'

const SuccessOrder = ({setShowSuccess}) => {
    return (
        <>
            <div className="success">
                <div className="success-logo"><SuccessLogo/></div>
                <p>Заказ успешно создан</p>
                <CustomButton onClick={() => setShowSuccess()}>Создать новый</CustomButton>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    setShowSuccess: () => dispatch(setShowSuccess())
})

export default connect(null, mapDispatchToProps)(SuccessOrder)