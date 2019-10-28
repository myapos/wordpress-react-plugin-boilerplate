import React from 'react';
import ReactDOM from 'react-dom';
import App from './admin/js/components/App';

// window.addEventListener('DOMContentLoaded', event => {
//   console.log('DOM fully loaded and parsed');

//   const placeholder = document.getElementById('root');

//   if (placeholder) {
//     ReactDOM.render(<App />, placeholder);
//   } else {
//     console.warn('Check your placeholder');
//   }
// });

const placeholder = document.getElementById('root');

if (placeholder) {
  ReactDOM.render(<App />, placeholder);
} else {
  console.warn('Check your placeholder');
}
