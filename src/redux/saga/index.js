import {all} from 'redux-saga/effects'
import dataTableSaga from './Datatable';
import processSaga from './Process';
import perCountries from './PerCountries';

export default function*(){
    yield all([
        dataTableSaga(),
        processSaga(),
        perCountries()
    ]);
}