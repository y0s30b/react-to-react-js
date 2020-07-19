import React from 'react';

function Food({fav, picture}) {
  return <div>
  <div>I love {fav} 😀</div>
  <img width="160" src={picture} border="2" alt={fav}></img>
  </div>
}

const preferredFood = [
  {
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1570780775848-bc1897788ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }, 
  {
    name: "Katsu",
    image: "https://images.unsplash.com/photo-1591814252471-068b545dff62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  {
    name: "Yakiniku",
    image: "https://images.unsplash.com/photo-1494566942107-a6e23c42d69e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
  },
  {
    name: "Cold Soba",
    image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
  },
  {
    name: "Sashimi",
    image: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
  }
];

function App() {
  return (
    <div className="App">
      {preferredFood.map(food => (
      <Food fav={food.name} picture={food.image} />
      ))}
    </div>
  );
}

export default App;
