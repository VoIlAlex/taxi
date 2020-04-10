import React, {useState} from 'react'
import {connect} from 'react-redux'

import {deletePendingOrder} from "../../redux/order/order.actions";
import {ReactComponent as Arrow} from '../../asserts/arrow.svg'

const OrderInf = ({date, from_address, order, waiting, to_address, time, status, call_sign, deletePendingOrder}) => {
    const [showRemoveOrder, setShowRemoveOrder] = useState(false)
    return (
        <div className="order">
            <div className="order-inf">
                <div className="main-inf">
                    <span className={'order-id'}>#{order}</span>
                    <span className={'order-date'}>{date}</span>
                    <span className={'order-time'}>{time}</span>
                    <span>{waiting}</span>
                </div>
                <div className="cancel">
                    <div className='call-sign'>
                        <span>{call_sign}</span>
                        <span className="order-cancel">
                        {status === 'Waiting' ? 'Ожидание' : status === 'Driving' ? 'Выехал' : 'Создан'}
                    </span>
                    </div>
                    <div className="dots" onClick={() => setShowRemoveOrder(!showRemoveOrder)}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
            <div className="order-address">
                <p><span>{from_address}</span> <Arrow className={'arrow'}/>
                    <span>{Array.isArray(to_address) ? to_address[0] : to_address}</span>
                </p>
            </div>
            {
                showRemoveOrder ?
                    <div className="delete-block" onClick={() => {
                        deletePendingOrder(order);
                        setShowRemoveOrder(!showRemoveOrder)
                    }}>
                        <small>Отменить</small>
                    </div> : ''
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deletePendingOrder: order => dispatch(deletePendingOrder(order))
})

export default connect(null, mapDispatchToProps)(OrderInf)