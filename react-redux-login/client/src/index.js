import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// applyMiddleware 引用中间件
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  // 应用Redux开发者工具
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
