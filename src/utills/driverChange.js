export const driverChange = (orderList, payload) => {
    return orderList.map(order => order.id === payload.id? ({
        ...order,
        driver_name: payload.drivers[0][0].name
    }): order)
}