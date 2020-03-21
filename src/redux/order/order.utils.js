export const addAdditional = (addressList, additionalAddress) => {
    return addressList.map(address => additionalAddress.id === address.id ?
        {
            address:additionalAddress.value,
            id: additionalAddress.id
        }
        : address
    )
}

export const deleteAdditional = (addressList, id) => {
    return addressList.filter(address => address.id !== id)
}