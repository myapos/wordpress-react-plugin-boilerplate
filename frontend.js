import React from 'react';
import ReactDOM from 'react-dom';
import FrontEnd from './frontend/js/FrontEnd';

const placeholder = document.getElementById('rootFrontEnd');

if (placeholder) {
  ReactDOM.render(<FrontEnd />, placeholder);
} else {
  console.warn('Check your placeholder');
}
