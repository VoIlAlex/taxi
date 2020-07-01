import React from 'react'
import {ReactComponent as FilterIcon} from '../../asserts/filter-icon.svg'

const TableHead = () => {
    return (
        <>
            <tr>
                <th><FilterIcon/> Таксопарк</th>
                <th><FilterIcon/> Заказ</th>
                <th><FilterIcon/> Дата</th>
                <th><FilterIcon/> Время</th>
                <th><FilterIcon/> Статус</th>
                <th><FilterIcon/> [ - ]</th>
                <th><FilterIcon/> Телефон</th>
                <th><FilterIcon/> Подача</th>
                <th><FilterIcon/> Куда ехать</th>
                <th><FilterIcon/> Принят</th>
                <th><FilterIcon/> На месте</th>
                <th><FilterIcon/> Водитель</th>
            </tr>
        </>
    )
}

export default TableHead
