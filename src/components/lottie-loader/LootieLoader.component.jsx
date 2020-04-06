import React from 'react'
import animationData from './lootie'
import Lottie from 'react-lottie'

import './lottie-loder.style.scss'

const LottieLoader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={'lottie-loader'}>
            <Lottie options={defaultOptions}
                    height={80}
                    width={300}
            />
        </div>
    )
}


export default LottieLoader