import { USER_ACTION_TYPES } from './user.types';

// actions are functions that return an object. so instead of setState we call this
export const setCurrentUser = user => ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
})