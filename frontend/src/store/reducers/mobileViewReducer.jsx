import { MOBILE_VIEW_DISABLED ,MOBILE_VIEW_ENABLED} from "../actions/actionTypes";

const intitalState={
    isMobileView:true,
}

const mobileViewReducer=(state=intitalState,action)=>{
    switch(action.type){
        case MOBILE_VIEW_ENABLED:
            return {...state,isMobileView:true};
        case MOBILE_VIEW_DISABLED:
            return {...state,isMobileView:false};
        default:
            return state;
    }
}


export default mobileViewReducer
