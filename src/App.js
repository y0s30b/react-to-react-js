import React from 'react';
import PropTypes from 'prop-types';

const preferredFood = [
  {
    id: 1,
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1570780775848-bc1897788ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 4.5
  }, 
  {
    id: 2, 
    name: "Katsu",
    image: "https://images.unsplash.com/photo-1591814252471-068b545dff62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 4.3
  },
  {
    id: 3, 
    name: "Yakiniku",
    image: "https://images.unsplash.com/photo-1494566942107-a6e23c42d69e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    rating: 3.8
  },
  {
    id: 4, 
    name: "Cold Soba",
    image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    rating: 4.1
  },
  {
    id: 5, 
    name: "Sashimi",
    image: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2
  }
];

function Food({fav, picture, rating}) {
  return <div>
  <h2>I love {fav} 😀</h2>
  <h4>⭐{rating}/4.5</h4>
  <img width="320" src={picture} border="2" alt={fav}></img>
  </div>
}

Food.propTypes = { // 항상 이름을 propTypes로(대소문자 주의)
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}; // prop의 type과 값이 들어와야만 하는지 여부(isRequired)를 확인할 수 있다.

function renderFood(food) {
  // console.log(food);
  return <Food key={food.id} fav={food.name} picture={food.image} rating={food.rating} />;
}

function App() {
  return (
    <div className="App">
      {/*console.log(preferredFood.map(renderFood))*/
      preferredFood.map(renderFood)
      }
    </div>
  );
}

export default App;
