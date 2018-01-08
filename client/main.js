import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('app'),
    );
  };
  
  render(App);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const newApp = require('./App.jsx').default;
        render(newApp);
    })
}