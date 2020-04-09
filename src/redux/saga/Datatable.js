import {all,call,fork,put,takeEvery, select} from 'redux-saga/effects';
import { PAGE_CHANGE } from "../actionTypes";

import { pageChange as apiPageChange } from '../api/Datatable';

import { 
    showMiniLoader,
    hideMiniLoader,
    showMessage,
    hideMessage,
    pageChangeSuccess,
} from '../actions';

const callPageChange=async (data)=>await apiPageChange(data).then(resp=>resp).catch(error=>error);


function* doPageChange({payload}){
    const {page} = payload;
    console.log({payload});
    

    yield put(showMiniLoader());
    try {
        const resp = yield call(callPageChange, {page});
        if(resp.error === 401){
            yield put(showMessage("error!"))
        }else if(resp.message){
            yield put(showMessage(resp.message));
        }
        else {
            console.log({resp});
            
            yield put(pageChangeSuccess(resp, page));
        }
    } catch (error) {
        yield put(showMessage(error.message));        
    }
    yield put(hideMessage());
    yield put(hideMiniLoader());
}

export function* sagaPageChanges(){
    yield takeEvery(PAGE_CHANGE, doPageChange);
}

export default function* rootSaga(){
    yield all([
        fork(sagaPageChanges)
    ])
}