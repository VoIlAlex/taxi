import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {startDeleteTaximeterAsync} from "../../redux/taximeters/taximeters.actions";

import './taximeter-inf.style.scss'
import { routesWithoutParams } from '../../constants/routes';

const TaximeterInf = ({login, title, in_verification, id, error, startDeleteTaximeterAsync}) => {

    const [showRemoveOrder, setShowRemoveOrder] = useState(false)

    return (
        <div className="taximeter">
            <div className="information">
                <p>{login}</p>
                <p>{title}</p>
            </div>
            <div className="options-block">
                {
                    in_verification === 'True' ? (<span className={'working'}>Работает</span>) :
                        error === -1 ? (<span className={'error'}>Нужен СМС-код</span>) :
                            (<span className={'error'}>Ошибка</span>)
                }
                <div className="dots" onClick={() => setShowRemoveOrder(true)}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            {
                showRemoveOrder &&
                <div className="delete-block">
                    <small><Link to={`${routesWithoutParams.updateTaximeter}/${id}`}>Обновить данные</Link></small>
                    <small><Link to={`${routesWithoutParams.codeApply}/${id}`}>Запросить СМС</Link></small>
                    <small onClick={() => startDeleteTaximeterAsync(id)}>Удалить</small>
                </div>
            }
            {
                showRemoveOrder? <div className="modal-overlay" onClick={()=> setShowRemoveOrder(false)}/>: ''
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startDeleteTaximeterAsync: id => dispatch(startDeleteTaximeterAsync(id))
})

export default connect(null, mapDispatchToProps)(TaximeterInf)