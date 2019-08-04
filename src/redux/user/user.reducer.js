// this is similar to state in app.js
const INITIAL_STATE = {
    currentUser: null
}

//how do we return the actual state based on the action
const userReducer = (state = INITIAL_STATE, action) => {
    // you can use if an else too
    // based on the action.type value which will be a string, if the case of that action type is the one that we want, then we will render something in the case, otherwise by default we will just return the state
    // every single reducer gets every single action that gets fired, even if those actions are not related to this reducer. So if none of the actions match or we care about then we just want to return the default state
    switch (action.type) {
        case 'SET_CURRENT_USER': // whenever SET_CURRENT_USER is the action type that gets fired, we return a new object which represents the new state
            return {
                ...state, // set everything on the state
                currentUser: action.payload // the value that we care about. We are setting the current user value using this payload
            };

        default:
            return state;
    }
}

export default userReducer;