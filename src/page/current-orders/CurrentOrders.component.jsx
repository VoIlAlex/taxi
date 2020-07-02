import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Links from '../../components/links/Links.component'
import TableHead from "../../components/table/TableHead.component";
import TableBody from "../../components/table/TableBody.component";

import './current-orders.style.scss'

const CurrentOrders = ({orders}) => {

    return (
        <>
            <Links/>
            {
                !orders.length ? <h2>У вас пока нет заказов. <Link to={'/'}>Создать?</Link></h2> :
                    <div className="table">
                        <table>
                            <TableHead orders={orders}/>
                            <tbody>
                            {
                                orders.map((order, i) => (<TableBody key={i} {...order}/>))
                            }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    )
}

const mapStateToProps = state => ({
    orders: state.ordersTable.ordersList
})

export default connect(mapStateToProps)(CurrentOrders)