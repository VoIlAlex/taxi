const sortedParams = {
    'Таксопарк':'taxName',
    'Заказ':'order',
    'Время':'time',
    'Статус':'status',
    'Телефон':'number',
    'Подача':'filed',
    'Куда ехать':'where',
    'Принят':'apply',
    'На месте':'onPlace',
    'Водитель':'driver'
}

export const sortTable = (orders, sortedParam, direction) => {
    if (sortedParam === 'Дата') {
        return orders.sort((a, b) => {
            let dateA = new Date(a.date).toISOString(), dateB = new Date(b.date).toISOString()
            return direction === 'right'?
                (dateA < dateB) ? -1 : ((dateA > dateB) ? 1 : 0):
                (dateA > dateB) ? -1 : ((dateA < dateB) ? 1 : 0)
        })
    } else if(sortedParam === '[ - ]'){
        return orders.sort((a,b) => {
            let paramA = +/\d+/.exec(a.waiting), paramB = +/\d+/.exec(b.waiting)
            return direction === 'right'?
                (paramA < paramB) ? -1 : ((paramA > paramB) ? 1 : 0):
                (paramA > paramB) ? -1 :  ((paramA < paramB) ? 1 : 0)
        })
    }

    return orders.sort((a, b) => {
        let paramA = a[sortedParams[sortedParam]].toLowerCase()
        let paramB = b[sortedParams[sortedParam]].toLowerCase()
        return direction === 'right'?
            (paramA < paramB) ? -1 : ((paramA > paramB) ? 1 : 0):
            (paramA > paramB) ? -1 :  ((paramA < paramB) ? 1 : 0)
    })

}


