import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchPendingOrdersAsync} from'../../redux/order/order.actions'
import {useInterval} from "../../hooks/useInterval";

import Links from '../../components/links/Links.component'
import TableHead from "../../components/table/TableHead.component";
import TableBody from "../../components/table/TableBody.component";
import LottieLoader from "../../components/lottie-loader/LootieLoader.component";

import './current-orders.style.scss'
import { routes } from '../../constants/routes'

const CurrentOrders = ({orders, fetchPendingOrdersAsync}) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchPendingOrdersAsync(()=>setIsLoading(false))
    }, [fetchPendingOrdersAsync])

    useInterval(async () => {
        await fetchPendingOrdersAsync()
    }, 7000)

    return (
        <>
            <Links/>
            {
                isLoading ? <LottieLoader/> :
                    !orders.length ? <h2>У вас пока нет заказов. <Link to={routes.main}>Создать?</Link></h2> :
                        <div className="table">
                            <table>
                                <TableHead />
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
    orders: state.order.orderForTable
})

const mapDispatchToProps = dispatch => ({
    fetchPendingOrdersAsync: cb => dispatch(fetchPendingOrdersAsync(cb))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrders)