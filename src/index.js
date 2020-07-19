import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Wasabi from './Wasabi';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Wasabi /> 같이 쓰는거 되는데 왜 강의에서는 안 된다고 하지?
  document.getElementById('wasabi')
);
