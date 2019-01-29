import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import FontGlobalStyle from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <FontGlobalStyle />
          <Header />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
