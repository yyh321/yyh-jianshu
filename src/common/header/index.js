import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
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
  constructor(props) {
    super(props);
    this.state = { 
      focused: false
     }
     this.handleInputFocus = this.handleInputFocus.bind(this);
     this.handleInputBlur = this.handleInputBlur.bind(this);
  }
handleInputFocus() {
  this.setState({
    focused: true
  })
}
handleInputBlur (){
  this.setState({
    focused:false
  })
}
  render() { 
    return (
      <HeaderWrapper>
        <LogoImg href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={this.state.focused} classNames="slide">
              <NavSearch 
              href="/"
              placeholder="搜索"
              className={this.state.focused ? 'focused' : ''}
              onFocus={this.handleInputFocus} 
              onBlur = {this.handleInputBlur}
              />
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont search' : 'iconfont search'}>&#xe6e4;</span>
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
 
export default Header;



