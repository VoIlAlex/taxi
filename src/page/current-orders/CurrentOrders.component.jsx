import React from 'react'
import {Link} from 'react-router-dom'

import Links from '../../components/links/Links.component'
import TableHead from "../../components/form-input/TableHead.component";
import TableBody from "../../components/form-input/TableBody.component";

import './current-orders.style.scss'

const CurrentOrders = () => {
    //Обработка пустого массива заказов
    const orders = [
        {
            taxName: 'OOO "Андрейка"',
            order: '123456',
            date: '02.12.20',
            time: '13:10',
            status: 'создан',
            waiting: '12min',
            number: '+375298220686',
            filed: 'улица Антонова, 10',
            where: 'проспект Космонавтов, 283/5',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Виктор Гаупенко'
        },
        {
            taxName: 'OOO "Андрейка"',
            order: '123456',
            date: '02.12.20',
            time: '13:10',
            status: 'Ожидание',
            waiting: '12min',
            number: '+375298220686',
            filed: 'улица Антонова, 10',
            where: 'проспект Космонавтов, 283/5',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Виктор Гаупенко'
        },
        {
            taxName: 'OOO "Андрейка"',
            order: '123456',
            date: '02.12.20',
            time: '13:10',
            status: 'Выехал',
            waiting: '12min',
            number: '+375298220686',
            filed: 'улица Антонова, 10',
            where: 'проспект Космонавтов, 283/5',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Виктор Гаупенко'
        },
        {
            taxName: 'OOO "Андрейка"',
            order: '123456',
            date: '02.12.20',
            time: '13:10',
            status: 'создан',
            waiting: '12min',
            number: '+375298220686',
            filed: 'улица Антонова, 10',
            where: 'проспект Космонавт',
            apply: '19:10',
            onPlace: '15:12',
            driver: 'Виктор Гаупенко'
        }
    ]
    return (
        <>
            <Links/>
            {
                !orders.length ? <h2>У вас пока нет заказов. <Link to={'/'}>Создать?</Link></h2> :
                    <div className="table">
                        <table>
                            <TableHead/>
                            {
                                orders.map((order, i) => (<TableBody key={i} {...order}/>))
                            }
                        </table>
                    </div>
            }
        </>
    )
}

export default CurrentOrders