import { SHOW_CHATBOT,HIDE_CHATBOT } from "../actions/actionTypes";

const intitalState={
    isChatbotVisible:false,
}

const botReducer=(state=intitalState,action)=>{
    switch(action.type){
        case SHOW_CHATBOT:
            return {...state,isChatbotVisible:true};
        case HIDE_CHATBOT:
            return {...state,isChatbotVisible:false};
        default:
            return state;
    }
}


export default botReducer