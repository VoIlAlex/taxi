import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import OrderInf from "../order-inf/OrderInf.component";

import {fetchPendingOrdersAsync} from "../../redux/order/order.actions";

import './active-orders.style.scss'

const ActiveOrders = ({pendingOrders, fetchPendingOrdersAsync}) => {

    useEffect(()=> {
        fetchPendingOrdersAsync()
        setInterval(()=>{
            fetchPendingOrdersAsync()
        }, 10000)
    }, [fetchPendingOrdersAsync])

    return (
        <div className={'orders'}>
            {
                pendingOrders ?
                    [...pendingOrders].reverse().map((order, i) => (
                            <div key={i} className={
                                `${order.status === 'Driving' ? 'driving' : order.status === 'Waiting'? 'waiting' : ''} 
                                        active-orders`
                            } style={i!==0? {'marginTop': '-30px','zIndex': 100 - i}: {'marginTop': '-45px','zIndex': 100 - i}}>
                                <OrderInf zIndex={i} {...order}/>
                            </div>
                        )
                    ) : ''
            }
        </div>
    )
}

const mapStateToProps = state => ({
    pendingOrders: state.order.pendingOrders
})

const mapDispatchToProps = dispatch => ({
    fetchPendingOrdersAsync: () => dispatch(fetchPendingOrdersAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrders)