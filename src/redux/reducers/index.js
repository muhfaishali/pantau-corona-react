import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import tbl from './Datatable';
import Process from './Process';

export default (history)=>combineReducers({
    router:connectRouter(history),
    tbl:tbl,
    pcs:Process
})