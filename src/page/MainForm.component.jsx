import React from 'react'
import {connect} from 'react-redux'

import OrderForm from "../components/orderForm/OrderForm.component";
import SuccessOrder from "../components/succesOrder/SuccessOrder.component";

import './main-form.style.scss'

const MainForm = ({showSuccess}) => {
    return (
        <div className="main-form">
            {
                showSuccess
                    ?
                    <SuccessOrder/>
                    :
                    <OrderForm/>
            }
        </div>
    )
}

const mapStateToProps = ({order}) => ({
    showSuccess: order.showSuccess
})

export default connect(mapStateToProps)(MainForm)