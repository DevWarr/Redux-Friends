import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
    friends: [],
    loggingIn: false,
    fetchingFriends: false,
    deletingFriend: false,
    updatingFriend: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: null
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,

            }
        
        case LOGIN_FAILURE:
                return {
                    ...state,
                    loggingIn: false,
                    error: `${action.payload}`
                }

        default:
            return state;
    }
}