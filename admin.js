import React from 'react';
import ReactDOM from 'react-dom';
import Root from './admin/js/components/Root';
import configureStore, { history } from './admin/js/store/store';

const { store, persistor } = configureStore();
// window.addEventListener('DOMContentLoaded', event => {
//   console.log('DOM fully loaded and parsed');

//   const placeholder = document.getElementById('root');

//   if (placeholder) {
//     ReactDOM.render(<App />, placeholder);
//   } else {
//     console.warn('Check your placeholder');
//   }
// });

const placeholder = document.getElementById('rootAdmin');

if (placeholder) {
  ReactDOM.render(<Root
    store={store}
    persistor={persistor}
    history={history} />, placeholder);
} else {
  console.warn('Check your placeholder');
}
