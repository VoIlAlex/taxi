import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {startFetchingOrdersAsync} from "../../redux/orderTable/ordersTable.actions";

import Links from '../../components/links/Links.component'
import TableHead from "../../components/table/TableHead.component";
import TableBody from "../../components/table/TableBody.component";
import LottieLoader from "../../components/lottie-loader/LootieLoader.component";

import './current-orders.style.scss'

const CurrentOrders = ({orders, isLoading, startFetchingOrdersAsync}) => {
    useEffect(() => {
        startFetchingOrdersAsync()
    }, [startFetchingOrdersAsync])

    return (
        <>
            <Links/>
            {
                isLoading ? <LottieLoader/> :
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
    orders: state.ordersTable.ordersList,
    isLoading: state.ordersTable.isLoading
})

const mapDispatchToProps = dispatch => ({
    startFetchingOrdersAsync: () => dispatch(startFetchingOrdersAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrders)