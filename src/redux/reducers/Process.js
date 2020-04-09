import {
    DO_SHOW_MESSAGE,
    HIDE_MESSAGE,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_MINI_LOADER,
    SET_LOADING_MESSAGE,
    HIDE_MINI_LOADER,
    PROCESS_MESSAGE,
    SHOW_MESSAGE,
}from '../actionTypes';

const INIT_STATE = {
    message:'',
    showMessage:false,
    messages:[],
    loader:false,
    loadingMsg:'',
    miniLoader:false,
    status:'error'
}

export default (state=INIT_STATE, action)=>{
    switch(action.type){
        case DO_SHOW_MESSAGE:{
            state.messages.push(action.payload)
            return {
                ...state,
                messages:[...state.messages],                                
            }
        }
        case PROCESS_MESSAGE:{
            state.messages.shift();
            return {
                ...state,
                messages:[...state.messages]
            }
        }
        case SHOW_MESSAGE:{
            return{
                ...state,
                message:action.payload.message,
                status:action.payload.status,
                showMessage:true
            }
        }
        case HIDE_MESSAGE:
            return {
                ...state, 
                message:'',
                showMessage:false
            }
        case SET_LOADING_MESSAGE:
            return{
                ...state,
                loadingMsg:action.payload
            }
        case SHOW_LOADER:
            return {
                ...state,
                loader:true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loader:false,
                loadingMsg:''
            }
        case SHOW_MINI_LOADER:
            return {
                ...state,
                miniLoader:true,
            }
        case HIDE_MINI_LOADER:
            return {
                ...state,
                miniLoader:false,
                loadingMsg:'',
                message:'',
                showMessage:false

            }
        default:
            return state;
    }
}