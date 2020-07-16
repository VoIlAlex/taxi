import React from 'react'
import {connect} from 'react-redux'

import UpdateForm from "../../components/update-form/UpdateForm.component";
import SuccessOrder from "../../components/succes-order/SuccessOrder.component";
import Taximeters from "../../components/taximeters/Taximeters.component";

import './update-taxipark-from.style.scss'

const UpdateTaxiparkForm = ({showSuccess}) => {
    return (
        <>
        <div className="update-page">
            {
                showSuccess
                    ?
                    <SuccessOrder
                        buttonValue={'Добавить таксопарк'}
                        contentValue={'Обновили'}
                        admin={true}
                    />
                    :
                    <UpdateForm/>
            }
        </div>
            <Taximeters margin={'-60px'}/>
            </>
    )
}

const mapStateToProps = state => ({
    showSuccess: state.taximeters.showSuccess
})

export default connect(mapStateToProps)(UpdateTaxiparkForm)