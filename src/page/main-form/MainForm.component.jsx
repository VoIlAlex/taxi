import React from 'react'
import {connect} from 'react-redux'

import OrderForm from "../../components/order-form/OrderForm.component";
import SuccessOrder from "../../components/succes-order/SuccessOrder.component";
import ActiveOrders from '../../components/active-orders/ActiveOrders.component';
import Links from '../../components/links/Links.component'

import './main-form.style.scss'

const MainForm = ({showSuccess}) => {
    return (
        <>
            <Links />
            <div className="main-form">
                {
                    showSuccess
                        ?
                        <SuccessOrder buttonValue={'Создать новый'} contentValue={'Заказ успешно создан'}/>
                        :
                        <OrderForm/>
                }
            </div>
            <ActiveOrders/>
        </>
    )
}

const mapStateToProps = ({order}) => ({
    showSuccess: order.showSuccess
})

export default connect(mapStateToProps)(MainForm)