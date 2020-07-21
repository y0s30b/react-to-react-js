import React from 'react';
import PropTypes from 'prop-types';

// function component 대신 class component 사용
class App extends React.Component { 
  constructor(props) {
    super(props);
    console.log("hello");
  }

  // 변하는 data를 위해 state 사용 (state는 object)
  state = {
    count: 0
  };

  plus = () => {
    console.log("Plus");
    //this.setState({count: this.state.count + 1});
    this.setState(current => ({count: current.count + 1}));
  }
  minus = () => {
    console.log("Minus");
    //this.setState({count: this.state.count - 1});
    this.setState(current => ({count: current.count - 1}));

  }

  componentDidMount() {
    console.log("Component Rendered!");
  }

  componentDidUpdate() {
    console.log("Component Updated!");
  }

  componentWillUnmount() {
    console.log("Bye Bye :)");
  }

  // return 없이 내부에서 render 메소드 사용
  render() {
    // 왜 render()랑 constructor()에서의 log가 두 번씩 출력되는 걸까?
    console.log("Rendering...");
    return <div>
      <h1>My counter ➡ {this.state.count} 🍋</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
