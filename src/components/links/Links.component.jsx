import React from 'react'
import {Link, withRouter} from "react-router-dom";

import './links.style.scss'

const Links = ({match}) => {
    return (
        <div className="links">
            <Link
                to={'/'}
                className={`${match.path === '/' ? 'active' : ''}`}
            >Создать заказ</Link>
            <Link
                to={'/currentorders'}
                className={`${match.path === "/currentorders" ? 'active' : ''}`}
            >Текущие заказы</Link>
        </div>
    )
}

export default withRouter(Links)