import { createSelector } from 'reselect';

export const selectUserState = (state) => state.user;

export const selectUser = createSelector(
    [selectUserState],
    (user) => user.currentUser
)

