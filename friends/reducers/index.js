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
        default:
            return state;
    }
}