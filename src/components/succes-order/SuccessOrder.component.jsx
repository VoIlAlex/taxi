import React from 'react'
import {connect} from 'react-redux'
import successAnimation from './success-animation'
import Lottie from 'react-lottie'

import {setShowSuccess as setShowSuccessOrder} from '../../redux/order/order.actions'
import {setShowSuccess as setShowSuccessTaximeters} from "../../redux/taximeters/taximeters.actions";

import CustomButton from "../custom-button/CustomButton.component";

import './success-order.style.scss'

const SuccessOrder = ({buttonValue, contentValue, admin, setShowSuccessOrder, setShowSuccessTaximeters}) => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const successHandler = () => {
        if(admin){
            setShowSuccessTaximeters()
        } else {
            setShowSuccessOrder()
        }
    }

    return (
        <>
            <div className="success">
                <div className="success-logo">
                    <Lottie options={defaultOptions} height={150} width={300}/>
                </div>
                <p>{contentValue}</p>
                <CustomButton onClick={() => successHandler()}>{buttonValue}</CustomButton>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    setShowSuccessOrder: () => dispatch(setShowSuccessOrder()),
    setShowSuccessTaximeters: () => dispatch(setShowSuccessTaximeters())
})

export default connect(null, mapDispatchToProps)(SuccessOrder)