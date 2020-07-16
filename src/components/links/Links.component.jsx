import React from 'react'
import {Link, withRouter} from "react-router-dom";

import './links.style.scss'
import { routes } from '../../constants/routes';

const Links = ({match}) => {
    return (
        <div className="links">
            <Link
                to={routes.main}
                className={`${match.path === routes.main ? 'active' : ''}`}
            >Создать заказ</Link>
            <Link
                to={routes.currentOrders}
                className={`${match.path === routes.currentOrders ? 'active' : ''}`}
            >Текущие заказы</Link>
        </div>
    )
}

export default withRouter(Links)