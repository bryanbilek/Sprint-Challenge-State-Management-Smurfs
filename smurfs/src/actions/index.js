import axios from "axios";
//fetch
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

//post
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_FAIL = 'POST_SMURFS_FAIL';

//fetch
export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("GET response", res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
        .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
};

//post
export const postSmurfs = (data) => dispatch => {
    dispatch({ type: POST_SMURFS_START });
    axios
        .post('http://localhost:3333/smurfs', data)
        .then(res => {
            console.log('POST response', res)
            dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: POST_SMURFS_FAIL, payload: err }))
}

// http://localhost:3333/smurfs