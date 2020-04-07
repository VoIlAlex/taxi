import React, {useState} from 'react'
import {connect} from 'react-redux'

import {deletePendingOrder} from "../../redux/order/order.actions";
import {ReactComponent as Arrow} from '../../asserts/arrow.svg'

const formatDate = date => {
    if (date < 10) return date = '0' + date
    return date
}

const OrderInf = ({id, date, from_address, to_addresses, zIndex, deletePendingOrder}) => {
    const [showRemoveOrder, setShowRemoveOrder] = useState(false)
    return (
        <div className="order">
            <div className="order-inf">
                <div className="main-inf">
                    <span className={'order-id'}>{id.slice(1, 6)}</span>
                    <span
                        className={'order-date'}>{formatDate(date.getDate())}.{formatDate(date.getMonth() + 1)}.{date.getFullYear()}</span>
                    <span className={'order-time'}>{formatDate(date.getHours())}:{formatDate(date.getMinutes())}</span>
                    <span>0м</span>
                </div>
                <div className="cancel">
                    <span className="order-cancel">Создан</span>
                    <div className="dots" onClick={() => setShowRemoveOrder(!showRemoveOrder)}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
            <div className="order-address">
                <p><span>{from_address}</span> <Arrow className={'arrow'}/> <span>{to_addresses[0]}</span></p>
            </div>
            {
                showRemoveOrder?
                    <div className="delete-block" onClick={() => {deletePendingOrder(id); setShowRemoveOrder(!showRemoveOrder)}}>
                        <small>Отменить</small>
                    </div> : ''
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deletePendingOrder: id => dispatch(deletePendingOrder(id))
})

export default connect(null, mapDispatchToProps)(OrderInf)