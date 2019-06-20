import { axiosWithAuth } from "../utils/axiosWithAuth";



export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {

    dispatch({ type: LOGIN_START });
    
    console.log(creds);

    return axiosWithAuth()
        .post("/login", creds)
        .then(res => {
            console.log(res.data.payload);
            localStorage.setItem("userToken", res.data.payload);
            dispatch({type: LOGIN_SUCCESS});
            return true;
        })

        .catch(err => {
            console.log(err)
            dispatch({type: LOGIN_FAILURE, payload: err});
        });
}



export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const fetchData = () => dispatch => {

    dispatch({ type: FETCH_DATA_START });

    axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_DATA_FAILURE, payload: err });
        });
}



export const POST_FRIEND_START = "POST_FRIEND_START";
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS";
export const POST_FRIEND_FAILURE = "POST_FRIEND_FAILURE";
export const postFriend = friend => dispatch => {
    
    dispatch({ type: POST_FRIEND_START });

    axiosWithAuth()
        .post("/friends", friend)
        .then( res => {
            dispatch({ type: POST_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: POST_FRIEND_FAILURE, payload: err }))
}

export const PUT_FRIEND_START = "PUT_FRIEND_START";
export const PUT_FRIEND_SUCCESS = "PUT_FRIEND_SUCCESS";
export const PUT_FRIEND_FAILURE = "PUT_FRIEND_FAILURE";
export const putFriend = friend => dispatch => {
    
    dispatch({ type: PUT_FRIEND_START });

    const id = friend.id;
    axiosWithAuth()
        .put(`/friends/${id}`, friend)
        .then( res => {
            dispatch({ type: PUT_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: PUT_FRIEND_FAILURE, payload: err }))
}

export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";
export const deleteFriend = id => dispatch => {
    
    dispatch({ type: DELETE_FRIEND_START });

    axiosWithAuth()
        .delete(`/friends/${id}`, id)
        .then( res => {
            dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }))
}