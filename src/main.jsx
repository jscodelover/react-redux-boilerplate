import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { store, history } from './store/createStore';

import App from './modules/App/index';

let persistor = persistStore(store);

const app = <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router history={history}>
                        <App />
                    </Router>
                </PersistGate>    
            </Provider>;    

ReactDOM.render(app, document.getElementById('root'));

//history.push
// why index.js file is not included
