import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, POST_FRIEND_START, POST_FRIEND_SUCCESS, POST_FRIEND_FAILURE } from "../actions";

const initialState = {
    friends: [],
    loggingIn: false,
    fetchingFriends: false,
    deletingFriend: false,
    updatingFriend: false,
    addingFriend: false,
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

        case FETCH_DATA_START:
            return {
                ...state,
                fetchingFriends: true,
                error: null
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: `${action.payload}`
            }

        case POST_FRIEND_START:
            return {
                ...state,
                addingFriend: true,
                error: null
            }

        case POST_FRIEND_SUCCESS:
            return {
                ...state,
                addingFriend: false,
                friends: action.payload
            }

        case POST_FRIEND_FAILURE:
            return {
                ...state,
                addingFriend: false,
                error: `${action.payload}`
            }

        default:
            return state;
    }
}