import {
    SHOW_MESSAGE,
    DO_SHOW_MESSAGE,
    HIDE_MESSAGE,
    SHOW_MINI_LOADER,
    HIDE_MINI_LOADER,
    SHOW_LOADER,
    HIDE_LOADER,
    SET_LOADING_MESSAGE,
    PROCESS_MESSAGE,
    HEART_BEAT_REQUEST
}from '../actionTypes'

export const showMessage = (message, status='error')=>{
    return {
        type:SHOW_MESSAGE,
        payload:{message, status}
    }
}

export const processMsg=()=>({type:PROCESS_MESSAGE});
export const heartBeatRequest=(token)=>({type:HEART_BEAT_REQUEST,payload:{token}});

export const doShowMessage = (message, status='error')=>{
    return {
        type:DO_SHOW_MESSAGE,
        payload:{message, status}
    }
}

export const setLoadingMsg = (msg)=>({type:SET_LOADING_MESSAGE, payload:msg})

export const hideMessage = ()=>{
    return {
        type:HIDE_MESSAGE
    }
}

export const showMiniLoader = ()=>{
    return {
        type:SHOW_MINI_LOADER
    }
}

export const hideMiniLoader = ()=>{
    return {
        type:HIDE_MINI_LOADER
    }
}

export const showLoader = ()=>{
    return {
        type:SHOW_LOADER
    }
}

export const hideLoader = ()=>{
    return {
        type:HIDE_LOADER
    }
}
