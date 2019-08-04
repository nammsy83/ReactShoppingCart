// actions are functions that return an object. so instead of setState we call this
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})