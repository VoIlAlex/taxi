import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import SignInPage from "../../page/sign-in-page/SignInPage.component";
import MainForm from "../../page/main-form/MainForm.component";
import CurrentOrders from "../../page/current-orders/CurrentOrders.component";
import AdminSignInPage from "../../page/admin-signin-page/AdminSigninPage.component";
import AddTaxiparkForm from "../../page/add-taxipark-form/AddTaxiparkForm.component";
import SmsCodeForm from "../sms-code-form/SmsCodeForm.component";
import UpdateTaxiparkForm from "../../page/update-taximeter-page/UpdateTaxiparkForm.component";
import ResetPasswordPage from "../../page/reset-password-page/ResetPasswordPage.component";

import { routes }  from "../../constants/routes";

const Routes = ({currentUser}) => {
    return (
        currentUser
            ?
            <>
                <Switch>
                    <Route exact path={routes.main} component={MainForm}/>
                    <Route path={routes.currentOrders} component={CurrentOrders}/>
                    <Route path={routes.adminPanel} component={AdminSignInPage}/>
                    <Route path={routes.addTaxipark} component={AddTaxiparkForm}/>
                    <Route path={routes.codeApply} component={SmsCodeForm}/>
                    <Route path={routes.updateTaximeter} component={UpdateTaxiparkForm}/>
                    <Route path={routes.resetPassword} component={ResetPasswordPage}/>
                    <Route exact path="/">
                        <Redirect to={routes.main} />
                    </Route>
                </Switch>
            </>
            :
            <Switch>
                <Route exact path={routes.main} component={SignInPage}/>
                <Route path={routes.adminPanel} component={AdminSignInPage}/>
                <Route path={routes.addTaxipark} component={AddTaxiparkForm}/>
                <Route path={routes.codeApply} component={SmsCodeForm}/>
                <Route path={routes.updateTaximeter} component={UpdateTaxiparkForm}/>
                <Route path={routes.resetPassword} component={ResetPasswordPage}/>
                <Route exact path="/">
                    <Redirect to={routes.main} />
                </Route>
            </Switch>

    )
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(Routes)