// app/javascript/packs/hello_react.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';  // Ensure the path is correct
console.log("first")
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
