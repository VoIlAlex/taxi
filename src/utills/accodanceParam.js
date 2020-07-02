export const sortedParams = {
    'Таксопарк': 'taxName',
    'Заказ': 'order',
    'Время': 'time',
    'Статус': 'status',
    'Телефон': 'number',
    'Подача': 'filed',
    'Куда ехать': 'where',
    'Принят': 'apply',
    'На месте': 'onPlace',
    'Водитель': 'driver'
}

export const accodanceParam = param => {
    return sortedParams[param]
}