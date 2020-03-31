import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore, {history} from './store';
import { ConnectedRouter } from 'connected-react-router';
import MainApp from './MainApp';


const store = configureStore();


function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={MainApp} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;