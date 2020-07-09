import {accodanceParam} from "./accodanceParam";

export const sortTable = (orders, sortedParam, direction) => {
    console.log(orders)
    console.log(sortedParam)
    console.log(direction)
    if (sortedParam === 'Дата') {
        return orders.sort((a, b) => {
            let dateA = new Date(a.order_date).toISOString(), dateB = new Date(b.order_date).toISOString()
            return direction ?
                (dateA < dateB) ? -1 : ((dateA > dateB) ? 1 : 0) :
                (dateA > dateB) ? -1 : ((dateA < dateB) ? 1 : 0)
        })
    } else if (sortedParam === '[ - ]') {
        return orders.sort((a, b) => {
            let paramA = +/\d+/.exec(a.waiting), paramB = +/\d+/.exec(b.waiting)
            return direction ?
                (paramA < paramB) ? -1 : ((paramA > paramB) ? 1 : 0) :
                (paramA > paramB) ? -1 : ((paramA < paramB) ? 1 : 0)
        })
     }

    return orders.sort((a, b) => {
        let paramA = a[accodanceParam(sortedParam)]
        let paramB = b[accodanceParam(sortedParam)]
        return direction ?
            (paramA < paramB) ? -1 : ((paramA > paramB) ? 1 : 0) :
            (paramA > paramB) ? -1 : ((paramA < paramB) ? 1 : 0)
    })
}


