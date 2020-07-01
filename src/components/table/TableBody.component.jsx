import React, {useState} from 'react'
import {deletePendingOrder} from "../../redux/order/order.actions";
import {connect} from "react-redux";

const TableBody = ({
                       taxName, order, date, time, status, waiting,
                       number, filed, where, apply, onPlace, driver
                   }) => {
    const [showRemoveOrder, setShowRemoveOrder] = useState(false)

    return (
        <tr className={`${status==='Выехал'? 'left':status==='Ожидание'?'wait':''}`}>
            <td>{taxName? taxName:'Не определен'}</td>
            <td>{order}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{status}</td>
            <td>{waiting}</td>
            <td>{number}</td>
            <td>{filed}</td>
            <td>{where}</td>
            <td>{apply}</td>
            <td>{onPlace}</td>
            <td>{driver}</td>
            <td>
                <div className="dots" onClick={() => setShowRemoveOrder(!showRemoveOrder)}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </td>
            {
                showRemoveOrder &&
                    <div className="delete-block" onClick={() => {
                        deletePendingOrder(order);
                        setShowRemoveOrder(!showRemoveOrder)
                    }}>
                        <small>Отменить</small>
                    </div>
            }
        </tr>

    )
}

const mapDispatchToProps = dispatch => ({
    deletePendingOrder: order => dispatch(deletePendingOrder(order))
})


export default connect(null, mapDispatchToProps)(TableBody)