import axios from "axios"
export const FETCH_REQUEST='FETCH_REQUEST'
export const FETCH_REQUEST_SUCCESS='FETCH_REQUEST_SUCCESS'
export const FETCH_REQUEST_FAILURE='FETCH_REQUEST_FAILURE'

export const fetchPostRequest=()=>{
    return{
        type:FETCH_REQUEST
    }
}
export const fetchPostSuccess=(payload)=>{
    return{
        type:FETCH_REQUEST_SUCCESS,
        payload:payload
    }
}
export const fetchPostFailure=(error)=>{
    return{
        type:FETCH_REQUEST_FAILURE,
        payload:error
    }
}


export const fetchPostJsonplaceholder = () => {
    return (dispatch) => {
      dispatch(fetchPostRequest());
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => {
          dispatch(fetchPostSuccess(data)); // Dispatch the success action with the data
        })
        .catch((err) => {
          console.log(err);
          dispatch(fetchPostFailure(err));
        });
    };
  };
  
