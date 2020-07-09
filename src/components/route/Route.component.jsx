import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import SignInPage from "../../page/sign-in-page/SignInPage.component";
import MainForm from "../../page/main-form/MainForm.component";
import CurrentOrders from "../../page/current-orders/CurrentOrders.component";

const Routes = ({currentUser}) => {
    return (
        currentUser
            ?
            <>
                <Switch>
                    <Route exact path={'/app/'} component={MainForm}/>
                    <Route path={'/app/currentorders'} component={CurrentOrders}/>
                </Switch>
            </>
            :
            <Route path={'/app/'} component={SignInPage}/>
    )
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(Routes)