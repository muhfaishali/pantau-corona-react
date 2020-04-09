import {all} from 'redux-saga/effects'
import dataTableSaga from './Datatable';
import processSaga from './Process';

export default function*(){
    yield all([
        dataTableSaga(),
        processSaga()
    ]);
}