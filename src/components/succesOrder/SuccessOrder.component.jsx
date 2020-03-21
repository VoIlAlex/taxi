import React from 'react'
import {connect} from 'react-redux'

import CustomButton from "../custom-button/CustomButton.component";

import {resetOrder} from '../../redux/order/order.actions'

import './success-order.style.scss'

const SuccessOrder = ({resetOrder}) => {
    return (
        <div className="success">
            <div className="success-logo"><span><i className="fas fa-check"></i></span></div>
            <p>Заказ успешно создан</p>
            <CustomButton onClick={() => resetOrder()}>Создать новый</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    resetOrder: () => dispatch(resetOrder())
})

export default connect(null, mapDispatchToProps)(SuccessOrder)