import { createStore, applyMiddleware, compose } from "redux";
import  reducer from "../redux/reducers";
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/saga';

const history = createBrowserHistory()
const routeMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routeMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose 

export default function configureStore (initState){
    const store = createStore(reducer(history), initState, composeEnhancers(applyMiddleware(...middlewares)))
    sagaMiddleware.run(rootSaga);
    if(module.hot){
        module.hot.accept('../redux/reducers/index',()=>{
            const nextReducer = require('../redux/reducers/index')
            store.replaceReducer(nextReducer)
        })
    }
    return store;
}

export {history}