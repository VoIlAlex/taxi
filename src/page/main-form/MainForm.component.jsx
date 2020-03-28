import React from 'react'
import {connect} from 'react-redux'

import {createStructuredSelector} from "reselect";

import {selectShowSuccess} from '../../redux/order/order.selectors'

import OrderForm from "../../components/order-form/OrderForm.component";
import SuccessOrder from "../../components/succes-order/SuccessOrder.component";

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

const mapStateToProps = createStructuredSelector({
    showSuccess: selectShowSuccess
})

export default connect(mapStateToProps)(MainForm)