import React, {useState} from 'react'
import {connect} from 'react-redux'

import {startDeleteOrderAsync, startChangeDriverAsync} from "../../redux/order/order.actions";

import {ReactComponent as Arrow} from '../../asserts/arrow.svg'

const OrderInf = ({
                      order_date, from_address, order_number, arrival_time, to_address, driver_name,
                      taximeter, acceptance_time, status, id, call_sign, startDeleteOrderAsync,
                      startChangeDriverAsync
                  }) => {
    const [showRemoveOrder, setShowRemoveOrder] = useState(false)
    const deleteHandler = id => {
        startDeleteOrderAsync(id);
        setShowRemoveOrder(false)
    }

    const changeDriverHandler = id => {
        startChangeDriverAsync(id)
        setShowRemoveOrder(false)
    }
    console.log(status)
    return (
        <div className="order">
                <div className="order-inf">
                    <div className="main-inf">
                        <span className={'order-id'}>#{order_number}</span>
                        <span className={'order-date'}>{order_date}</span>
                        <span className={'order-time'}>{acceptance_time}</span>
                        <span>{arrival_time}</span>
                    </div>
                    <div className="cancel">
                        <div className='call-sign'>
                        <span className="order-cancel">
                            {status === 'Waiting' ? 'Ожидание' : status === 'Driving' ? 'Выехал' : 'Создан'}
                        </span>
                        </div>
                        <div className="dots" onClick={() => setShowRemoveOrder(true)}>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                </div>
                <div className="order-address">
                    <p><span>{from_address}</span> <Arrow className={'arrow'}/><span>{to_address}</span></p>
                    <p className={'address'}><span>{taximeter}</span> <span className={'dash'}>&nbsp; - &nbsp;</span>
                        <span>
                        {driver_name ? driver_name : 'Водитель неопределен'}
                    </span></p>
                </div>
                {
                    showRemoveOrder &&
                    <div className="delete-block">
                        <small onClick={() => deleteHandler(id)}>Отменить</small>
                        <small onClick={() => changeDriverHandler(id)}>След. водитель</small>
                    </div>
                }
            {
                showRemoveOrder? <div className="modal-overlay" onClick={()=> setShowRemoveOrder(false)}/>: ''
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startDeleteOrderAsync: id => dispatch(startDeleteOrderAsync(id)),
    startChangeDriverAsync: id => dispatch(startChangeDriverAsync(id))
})

export default connect(null, mapDispatchToProps)(OrderInf)