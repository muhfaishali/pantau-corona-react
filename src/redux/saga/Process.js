import {all,call,fork,put,takeEvery,delay} from 'redux-saga/effects';
import { SHOW_MESSAGE, HEART_BEAT_REQUEST } from "../actionTypes";
import { NotificationManager } from "react-notifications";
import { 
    hideMessage, 
    doShowMessage as showMsg,
    // getNotif
} from "../actions";

function* _doShowMessage({payload}){
    const {message, status}=payload;
    yield put(showMsg(message, status));
    if(status==='error')
    {
        yield NotificationManager.error(message, 'Error', 3500)
    }
    else
    {
        yield NotificationManager.info(message, status.toUpperCase(), 3500)
    }
}

function* _doHeartBeat({payload}){
    const {token}=payload;
    // yield put(getNotif(token));    
}

export function* sagaShowMessage(){
    yield takeEvery(SHOW_MESSAGE, _doShowMessage);
}

export function* sagaHeartBeat(){
    yield takeEvery(HEART_BEAT_REQUEST, _doHeartBeat);
}

export default function* rootSaga(){
    yield all([
        fork(sagaShowMessage),
        fork(sagaHeartBeat)
    ])
}