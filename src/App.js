import React from 'react';
import PropTypes from 'prop-types';

// function component 대신 class component 사용
class App extends React.Component {
  // 변하는 data를 위해 state 사용 (state는 object)
  state = {
    count: 0
  };

  // return 없이 내부에서 render 메소드 사용
  render() {
    return <h1> My counter ➡ {this.state.count} 🍋</h1>
  }
}

export default App;
