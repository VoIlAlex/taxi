import {createSelector} from 'reselect'

const selectOrder = state => state.order

export const selectLoading = createSelector(
    [selectOrder],
    order => order.isLoading
)

export const selectPhoneNumber = createSelector(
    [selectOrder],
    order => order.phone
)

export const selectFromAddress = createSelector(
    [selectOrder],
    order => order.fromAddress
)

export const selectToAddress = createSelector(
    [selectOrder],
    order => order.toAddress
)

export const selectTouchedPhone = createSelector(
    [selectOrder],
    order => order.touchedPhone
)

export const selectPhoneValidate = createSelector(
    [selectOrder],
    order => order.phoneValidate
)

export const selectAdditionalAddresses = createSelector(
    [selectOrder],
    order => order.additionalAddresses
)

export const selectShowSuccess = createSelector(
    [selectOrder],
    order => order.showSuccess
)