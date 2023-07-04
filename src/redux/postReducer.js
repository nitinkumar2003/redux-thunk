// import { FETCH_REQUEST,FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "./postActions"
import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "./postActions"


const initialState={
    postInfo:[],
    isLoading:false,
    error:null
}


export const  postReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null
            }
        case FETCH_REQUEST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:null,
                postInfo:action.payload
            }
        case FETCH_REQUEST_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
        default:
            return state
    }
}

