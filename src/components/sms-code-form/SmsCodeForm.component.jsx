import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from "redux";

import FormInput from "../form-input/FormInput.component";
import LottieLoader from "../lottie-loader/LootieLoader.component";
import CustomButton from "../custom-button/CustomButton.component";
import Taximeters from "../taximeters/Taximeters.component";

import {setShowSuccess} from "../../redux/taximeters/taximeters.actions";
import {getVerification, postVerificationCode} from "../../redux/taximeters/taximeters.actions";

import './sms-code-form.style.scss'

const SmsCodeForm = ({showSuccess, session_id, getVerification, postVerificationCode, match, history}) => {
    let id = match.params.id
    useEffect(()=>{
        getVerification(id)
    }, [session_id])

    const [code, setCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = e => {
        e.preventDefault()
        setIsLoading(true)
        postVerificationCode(session_id, code, () => history.push('/add_taxipark'))
    }

    return (
        <>
        <div className="sms-code-page">
            <form className={'sign-form'} onSubmit={(e) => submitHandler(e)}>
                <FormInput
                    label={'Код из СМС'}
                    placeholder={'Шестизначный код'}
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    required
                />
                {
                    isLoading
                        ?
                        <LottieLoader/>
                        :
                        <CustomButton type={'submit'}>Подтвердить</CustomButton>
                }
            </form>
        </div>
            <Taximeters margin={'-30px'}/>
            </>
    )
}

const mapStateToProps = state => ({
    session_id: state.taximeters.session_id
})

const mapDispatchToProps = dispatch => ({
    showSuccess: () => dispatch(setShowSuccess()),
    getVerification: id => dispatch(getVerification(id)),
    postVerificationCode: (session_id, code, cb) => dispatch(postVerificationCode(session_id, code, cb))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(SmsCodeForm)