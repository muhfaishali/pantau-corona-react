import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import {
    GET_PERCOUNTRIES
} from '../actionTypes';

import {
    showMessage,
    hideMessage,
    getPercountrySuccess,
} from '../actions';

import percountry from '../api/PerCountries';

const doGetPerCountry = async(country)=>await percountry.getData(country).then(resp=>resp).catch(error=>error);

function* _getPercountry({payload}) {
    try {
        const resp = yield call(doGetPerCountry, payload.country);
        yield put(getPercountrySuccess(resp))
    } catch(error) {
        yield put(showMessage(error.getMessage()))
    }
    yield put(hideMessage())
}

export function* getCountry() {
    yield takeEvery(GET_PERCOUNTRIES, _getPercountry)
}

export default function* rootSaga() {
    yield all([
        fork(getCountry)
    ])
}