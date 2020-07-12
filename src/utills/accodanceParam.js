export const sortedParams = {
    'Таксопарк': 'taximeter',
    'Заказ': 'order_number',
    'Время': 'order_time',
    'Статус': 'status',
    'Телефон': 'phone',
    'Подача': 'from_address',
    'Куда ехать': 'to_address',
    'Принят': 'acceptance_time',
    'На месте': 'in_place_time',
    'Водитель': 'driver_name'
}

export const accodanceParam = param => {
    return sortedParams[param]
}