import axios from "axios";


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {

    dispatch({ type: LOGIN_START });
    
    console.log(creds);

    return axios.post("http://localhost:5000/api/login", creds)
        .then(res => {
            console.log(res.data.payload);
            localStorage.setItem("userToken", res.data.payload);
            dispatch({type: LOGIN_SUCCESS});
            return true;
        })
        .catch(err => {
            console.log(err)
            dispatch({type: LOGIN_FAILURE, payload: err.response.data.error});
        });
}

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios.get("http://localhost:5000/api/friends")
        .then(res=> {
            console.log(res);
        })
        .catch(err => console.log(err));
}