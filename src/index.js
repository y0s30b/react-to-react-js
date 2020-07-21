import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// App Component에서 Life Cycle 함수인 componentWillUnmount() 함수의 동작을 확인하기 위한 코드
/*
function timeOutFunction() {
  ReactDOM.render("- End -", document.getElementById('root'));
}
setTimeout(timeOutFunction, 5000);*/