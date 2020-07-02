import React from 'react'
import {connect} from 'react-redux'

import {filterTable} from '../../redux/orderTable/ordersTable.actions'
import {ReactComponent as FilterIcon} from '../../asserts/filter-icon.svg'

const columnName = [
    'Таксопарк', 'Заказ', 'Дата', 'Время', 'Статус', '[ - ]',
    'Телефон', 'Подача', 'Куда ехать', 'Принят', 'На месте', 'Водитель'
]

const TableHead = ({orders, filterTable}) => {
    return (
        <thead>
        <tr>
            {
                columnName.map((name, i) => (
                    <th
                        key={i}
                        onClick={() => filterTable(name, 'right')}
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
