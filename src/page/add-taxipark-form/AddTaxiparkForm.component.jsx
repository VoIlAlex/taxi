import React from 'react'
import {connect} from 'react-redux'

import AdminForm from "../../components/admin-form/AdminForm.component";
import SuccessOrder from "../../components/succes-order/SuccessOrder.component";
import Taximeters from "../../components/taximeters/Taximeters.component";

import './add-taxipark-from.style.scss'

const AddTaxiparkForm = ({showSuccess}) => {
    return (
        <>
            <div className="add-taxi-park">
                {
                    showSuccess
                        ?
                        <SuccessOrder
                            buttonValue={'Добавить ещё'}
                            contentValue={'Успешно добавлено'}
                            admin={true}
                        />
                        :
                        <AdminForm/>
                }
            </div>
            <Taximeters margin={'-60px'}/>
        </>
    )
}

const mapStateToProps = state => ({
    showSuccess: state.taximeters.showSuccess
})

export default connect(mapStateToProps)(AddTaxiparkForm)