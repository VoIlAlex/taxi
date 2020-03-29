import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import SignInPage from "../../page/sign-in-page/SignInPage.component";
import MainForm from "../../page/main-form/MainForm.component";

const Routes = ({currentUser}) => {
    return (
        currentUser
        ?
            <Route path={'/'} component={MainForm} />
            :
            <Route path={'/'} component={SignInPage} />
    )
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(Routes)