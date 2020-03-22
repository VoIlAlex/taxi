import React from 'react'
import {connect} from 'react-redux'

import CustomButton from "../custom-button/CustomButton.component";

import {resetOrder} from '../../redux/order/order.actions'

import {ReactComponent as SuccessLogo} from '../../asserts/Success.svg'

import './success-order.style.scss'

const SuccessOrder = ({resetOrder}) => {
    return (
        <div className="success">
            <div className="success-logo"> <SuccessLogo/></div>
            <p>Заказ успешно создан</p>
            <CustomButton onClick={() => resetOrder()}>Создать новый</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    resetOrder: () => dispatch(resetOrder())
})

export default connect(null, mapDispatchToProps)(SuccessOrder)