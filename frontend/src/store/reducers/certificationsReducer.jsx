import { SHOW_CERTIFICATIONS,HIDE_CERTIFICATIONS } from "../actions/actionTypes";

const intitalState={
    isCertificationsVisible:false,
}

const certificationsReducer=(state=intitalState,action)=>{
    switch(action.type){
        case SHOW_CERTIFICATIONS:
            return {...state,isCertificationsVisible:true};
        case HIDE_CERTIFICATIONS:
            return {...state,isCertificationsVisible:false};
        default:
            return state;
    }
}


export default certificationsReducer