import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import GlobalStyle from './style';
import FontGlobalStyle from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <FontGlobalStyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} ></Route>
              <Route path="/detail" exact component={Detail} ></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
