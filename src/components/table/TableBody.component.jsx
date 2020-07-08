import React, {useState} from 'react'
import {connect} from "react-redux";

import {startDeleteOrderAsync} from "../../redux/order/order.actions";

const TableBody = ({
                       taximeter, order_number, order_date, order_time, status, arrival_time, phone,
                       from_address, to_address, acceptance_time, in_place_time, driver_name, id,
                       startDeleteOrderAsync
                   }) => {
    const [showRemoveOrder, setShowRemoveOrder] = useState(false)

    const deleteHandler = (id) => {
        startDeleteOrderAsync(id);
        setShowRemoveOrder(!showRemoveOrder)
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
                    <div className="delete-block" onClick={() => deleteHandler(id)}>
                        <small>Отменить</small>
                    </div>
            }
        </tr>

    )
}

const mapDispatchToProps = dispatch => ({
    startDeleteOrderAsync: id => dispatch(startDeleteOrderAsync(id))
})


export default connect(null, mapDispatchToProps)(TableBody)