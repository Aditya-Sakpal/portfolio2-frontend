import { FETCH_DATA_SUCCESS,FETCH_DATA_ERROR } from "../actions/actionTypes"
const intitalState = {
    data:null,
    error:null,
}

const dataReducer=(state=intitalState,action)=>{
    switch(action.type){
        case FETCH_DATA_SUCCESS:
            return {...state,data:action.payload,error:null}
        case FETCH_DATA_ERROR:
            return {...state,data:null,error:action.payload}
        default:
            return state
    }
}

export default dataReducer





