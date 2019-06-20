import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
    freinds: [],
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
        default:
            return state;
    }
}