import React from 'react';
import { hydrate } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import App from './app';

const renderApp = () => {
  hydrate((
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  ), document.getElementById('root'))
}

renderApp()

if (module.hot) {
  require('../src/app/styles/app.scss')
  module.hot.accept(() => {
    renderApp()
  });
}
