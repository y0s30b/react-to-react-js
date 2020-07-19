import React from 'react';

function Food(props) {
  return <h3>I love {props.fav} 😀</h3>
}

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Food fav="Sushi" />
      <Food fav="Gyukatsu" />
      <Food fav="Yakiniku" />
    </div>
  );
}

export default App;
