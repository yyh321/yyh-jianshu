import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { createActions } from './store';
import {
  HeaderWrapper,
  LogoImg,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
 } from './style'

class Header extends PureComponent {
  render() {
    const {focused, handleInputFocus, handleInputBlur} = this.props;
    return (
      <HeaderWrapper>
        <LogoImg href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={300} in={focused} classNames="slide">
              <NavSearch 
              href="/"
              placeholder="搜索"
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus} 
              onBlur = {handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont search' : 'iconfont search'}>&#xe6e4;</span>
          </SearchWrapper>
          <Addition>
            <Button className="write">
            <span className="iconfont">&#xe61b;</span>
            写文章
            </Button>
            <Button className="register">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused'])//state是一个immutable对象，获取是用get方法,等价下面写法state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = createActions.focusSearchAction();
      dispatch(action);
    },
    handleInputBlur() {
      const action = createActions.blurSearchAction();
      dispatch(action);
    }
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);



