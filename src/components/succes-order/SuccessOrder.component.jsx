import React from 'react'
import {connect} from 'react-redux'
import successAnimation from './success-animation'
import Lottie from 'react-lottie'

import {setShowSuccess} from '../../redux/order/order.actions'

import CustomButton from "../custom-button/CustomButton.component";

import './success-order.style.scss'

const SuccessOrder = ({setShowSuccess}) => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <div className="success">
                <div className="success-logo">
                    <Lottie options={defaultOptions} height={150} width={300}/>
                </div>
                <p>Заказ успешно создан</p>
                <CustomButton onClick={() => setShowSuccess()}>Создать новый</CustomButton>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    setShowSuccess: () => dispatch(setShowSuccess())
})

export default connect(null, mapDispatchToProps)(SuccessOrder)