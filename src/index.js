import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';

import reducer from './reducers/UsuariosReducer' 
import App from './components/App';
const initialState = {
    "usuarios":{},
  
};

  const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, initialState, composeEnhancers)

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider >
   

, document.getElementById('app'));


