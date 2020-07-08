import React, {useState} from 'react'
import {connect} from 'react-redux'

import {startDeleteOrderAsync} from "../../redux/order/order.actions";
import {ReactComponent as Arrow} from '../../asserts/arrow.svg'

const OrderInf = ({
                      date, from_address, order, waiting, to_address, driver,
                      taxiPark, time, status, call_sign, startDeleteOrderAsync
                  }) => {
    const [showRemoveOrder, setShowRemoveOrder] = useState(false)

    const deleteHandler = id => {
        startDeleteOrderAsync(id);
        setShowRemoveOrder(!showRemoveOrder)
    }
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
                <p><span>{from_address}</span> <Arrow className={'arrow'}/><span>{to_address}</span></p>
                <p><span>{taxiPark}</span> &nbsp; - &nbsp; <span>{driver}</span></p>
            </div>
            {
                showRemoveOrder &&
                    <div className="delete-block" onClick={() => deleteHandler(order)}>
                        <small>Отменить</small>
                    </div>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startDeleteOrderAsync: id => dispatch(startDeleteOrderAsync(id))
})

export default connect(null, mapDispatchToProps)(OrderInf)