import React, {useState} from 'react'
import {connect} from 'react-redux'

import {accodanceParam} from '../../utills/accodanceParam'
import {filterTable} from "../../redux/order/order.actions";
import {ReactComponent as FilterIcon} from '../../asserts/filter-icon.svg'

const columnName = [
    'Таксопарк', 'Заказ', 'Дата', 'Время', 'Статус', '[ - ]',
    'Телефон', 'Подача', 'Куда ехать', 'Принят', 'На месте', 'Водитель'
]

const TableHead = ({filterTable}) => {
    const [direction, setDirection] = useState({
        taximeter: true,
        order_number: true,
        order_time: true,
        status: true,
        phone: true,
        from_address: true,
        to_address: true,
        acceptence_time: true,
        in_place_time: true,
        driver_name: true
    })

    const filterHandler = param => {
        let key = accodanceParam(param)
        setDirection({...direction, [key]: !direction[key]})
        filterTable(param, direction[key])
    }

    return (
        <thead>
        <tr>
            {
                columnName.map((name, i) => (
                    <th
                        key={i}
                        onClick={() => filterHandler(name)}
                    >
                        <FilterIcon className={'filter-icon'}/> {name}
                    </th>
                ))
            }
        </tr>
        </thead>
    )
}

const mapDispatchToProps = dispatch => ({
    filterTable: (filterParam, direction) => dispatch(filterTable(filterParam, direction))
})

export default connect(null, mapDispatchToProps)(TableHead)
