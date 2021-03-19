import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CaptureEmailUI from './App';
import reportWebVitals from './reportWebVitals';

const e = React.createElement;

// Find all DOM containers, and render our component into them.
const containers = document.querySelectorAll('.cap-ui')
containers.forEach(domContainer => {
  // render the component into the DOM
  ReactDOM.render(
    e(CaptureEmailUI, { config: domContainer.dataset}),
    domContainer
  )
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
