import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import SignInPage from "../../page/sign-in-page/SignInPage.component";
import MainForm from "../../page/main-form/MainForm.component";
import CurrentOrders from "../../page/current-orders/CurrentOrders.component";

import { routes }  from "../../constants/routes";

const Routes = ({currentUser}) => {
    return (
        currentUser
            ?
            <>
                <Switch>
                    <Route exact path={routes.main} component={MainForm}/>
                    <Route path={routes.currentOrders} component={CurrentOrders}/>
                </Switch>
            </>
            :
            <Route path={routes.main} component={SignInPage}/>
    )
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(Routes)