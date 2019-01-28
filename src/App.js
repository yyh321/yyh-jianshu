import React, { Component } from 'react';
import GlobalStyle from './style'
import FontGlobalStyle from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <FontGlobalStyle />
        <Header />
      </div>
    );
  }
}

export default App;
