import React from 'react'
import {connect} from 'react-redux'
import OrderInf from "../order-inf/OrderInf.component";

import './active-orders.style.scss'

const ActiveOrders = ({pendingOrders}) => {
    return (
        <>
            {
                pendingOrders ?
                    [...pendingOrders].reverse().map((order, i) => (
                        //TODO order status
                            <div key={i} className={
                                `${i === 0 ? 'left' : i === 1 ? 'expect' : ''} 
                                        active-orders`
                            } style={i!==0? {'marginTop': '-30px','zIndex': 100 - i}: {'marginTop': '-45px','zIndex': 100 - i}}>
                                <OrderInf zIndex={i} {...order}/>
                            </div>
                        )
                    ) : ''
            }
        </>
    )
}

const mapStateToProps = state => ({
    pendingOrders: state.order.pendingOrders
})

export default connect(mapStateToProps)(ActiveOrders)