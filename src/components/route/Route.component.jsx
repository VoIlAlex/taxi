import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import SignInPage from "../../page/sign-in-page/SignInPage.component";
import MainForm from "../../page/main-form/MainForm.component";
import CurrentOrders from "../../page/current-orders/CurrentOrders.component";
import AdminSignInPage from "../../page/admin-signin-page/AdminSigninPage.component";
import AddTaxiparkForm from "../../page/add-taxipark-form/AddTaxiparkForm.component";
import SmsCodeForm from "../sms-code-form/SmsCodeForm.component";
import UpdateTaxiparkForm from "../../page/update-taximeter-page/UpdateTaxiparkForm.component";
import ResetPasswordPage from "../../page/reset-password-page/ResetPasswordPage.component";

const Routes = ({currentUser}) => {
    return (
        currentUser
            ?
            <>
                <Switch>
                    <Route exact path={'/'} component={MainForm}/>
                    <Route path={'/currentorders'} component={CurrentOrders}/>
                    <Route path={'/admin_panel'} component={AdminSignInPage}/>
                    <Route path={'/add_taxipark'} component={AddTaxiparkForm}/>
                    <Route path={'/code_apply/:id'} component={SmsCodeForm}/>
                    <Route path={'/update_taximeter/:id'} component={UpdateTaxiparkForm}/>
                    <Route path={'/reset_password'} component={ResetPasswordPage}/>
                </Switch>
            </>
            :
            <Switch>
                <Route exact path={'/'} component={SignInPage}/>
                <Route path={'/admin_panel'} component={AdminSignInPage}/>
                <Route path={'/add_taxipark'} component={AddTaxiparkForm}/>
                <Route path={'/code_apply/:id'} component={SmsCodeForm}/>
                <Route path={'/update_taximeter/:id'} component={UpdateTaxiparkForm}/>
                <Route path={'/reset_password'} component={ResetPasswordPage}/>
            </Switch>

    )
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(Routes)