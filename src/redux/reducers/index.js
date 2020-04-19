import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import tbl from './Datatable';
import Process from './Process';
import PerCountries from './PerCountries';

export default (history)=>combineReducers({
    router:connectRouter(history),
    tbl:tbl,
    pcs:Process,
    details:PerCountries
})