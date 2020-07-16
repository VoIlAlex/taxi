import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import TaximeterInf from "../taximeter-inf/TaximeterInf.component";
import {useInterval} from "../../hooks/useInterval";
import {startFetchTaximetersAsync} from "../../redux/taximeters/taximeters.actions";

import './taximeters.style.scss'

const Taximeters = ({taximeters, margin, startFetchTaximetersAsync}) => {

    useEffect(() => {
        startFetchTaximetersAsync()
    }, [startFetchTaximetersAsync])

    useInterval(async () => {
        await startFetchTaximetersAsync()
    }, 7000)

    return (
        <div className={'taximeters'}>
            {
                taximeters ?
                    [...taximeters].map((taximeter, i) => (
                            <div
                                key={i}
                                className={`${taximeter.in_verification === 'True' ?
                                    'working' : 'error'
                                } active-taximeters`}
                                style={i !== 0 ? {'marginTop': '-30px', 'zIndex': 100 - i} : {
                                    'marginTop': `${margin}`,
                                    'zIndex': 100 - i
                                }}>
                                <TaximeterInf zIndex={i} {...taximeter}/>
                            </div>
                        )
                    ) : ''
            }
        </div>
    )
}

const mapStateToProps = state => ({
    taximeters: state.taximeters.taximeters
})

const mapDispatchToProps = dispatch => ({
    startFetchTaximetersAsync: () => dispatch(startFetchTaximetersAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Taximeters)