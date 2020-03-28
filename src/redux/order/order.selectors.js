import {createSelector} from 'reselect'

const selectOrder = state => state.order

export const selectShowSuccess = createSelector(
    [selectOrder],
    order => order.showSuccess
)