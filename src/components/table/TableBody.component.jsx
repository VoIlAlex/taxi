import React, {useState} from 'react'
import {connect} from "react-redux";

import {startDeleteOrderAsync, startChangeDriverAsync} from "../../redux/order/order.actions";

const TableBody = ({
                       taximeter, order_number, order_date, order_time, status, arrival_time, phone,
                       from_address, to_address, acceptance_time, in_place_time, driver_name, id,
                       startDeleteOrderAsync, startChangeDriverAsync
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

    return (
        <tr className={`${status==='Created'? 'left':status==='Waiting'?'wait':''}`}>
            <td>{taximeter? taximeter:'Не определен'}</td>
            <td>{order_number}</td>
            <td>{order_date}</td>
            <td>{order_time}</td>
            <td>{status}</td>
            <td>{arrival_time}</td>
            <td>{phone}</td>
            <td>{from_address}</td>
            <td>{to_address}</td>
            <td>{acceptance_time}</td>
            <td>{in_place_time}</td>
            <td>{driver_name}</td>
            <td>
                <div className="dots" onClick={() => setShowRemoveOrder(!showRemoveOrder)}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </td>
            {
                showRemoveOrder &&
                    <div className="delete-block">
                        <small onClick={() => deleteHandler(id)}>Отменить</small>
                        <small onClick={()=> changeDriverHandler(id)}>След. водитель</small>
                    </div>
            }
            {
                showRemoveOrder? <div className="modal-overlay" onClick={()=> setShowRemoveOrder(false)}/>: ''
            }
        </tr>

    )
}

const mapDispatchToProps = dispatch => ({
    startDeleteOrderAsync: id => dispatch(startDeleteOrderAsync(id)),
    startChangeDriverAsync: id => dispatch(startChangeDriverAsync(id))
})


export default connect(null, mapDispatchToProps)(TableBody)