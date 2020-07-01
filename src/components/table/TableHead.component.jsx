import React from 'react'
import {ReactComponent as FilterIcon} from '../../asserts/filter-icon.svg'

const columnName = [
    'Таксопарк', 'Заказ', 'Дата', 'Время', 'Статус', '[ - ]',
    'Телефон', 'Подача', 'Куда ехать', 'Принят', 'На месте', 'Водитель'
]

const TableHead = () => {
    return (
            <tr>
                {
                    columnName.map((name, i) => (
                        <th><FilterIcon/> {name}</th>
                    ))
                }
            </tr>
    )
}

export default TableHead
