import React from 'react';
import PropTypes from 'prop-types';

// function component 대신 class component 사용
class App extends React.Component {
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

  // return 없이 내부에서 render 메소드 사용
  render() {
    return <div>
      <h1>My counter ➡ {this.state.count} 🍋</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
