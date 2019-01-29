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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchSwitch,
  SearchInfoItem
 } from './style'

class Header extends PureComponent {

  getListArea = (show,list) => {
    if(show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchSwitch>
            换一批
          </SearchSwitch>
          </SearchInfoTitle>
          <div>
            {
              list.map((item) => {
                return <SearchInfoItem key={item}> {item} </SearchInfoItem>
              })
            }
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const {focused,list, handleInputFocus, handleInputBlur} = this.props;
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
            {this.getListArea(focused,list)}
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
    focused: state.getIn(['header','focused']),//state是一个immutable对象，获取是用get方法,等价下面写法state.get('header').get('focused')
    list: state.getIn(['header','list']) // 从store中获取数据
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      // 搜素框获得焦点时，通过redux-thunk获取异步数据,获取异步数据的方法写在action中
      dispatch(createActions.getListAction());
      dispatch(createActions.focusSearchAction());
    },
    handleInputBlur() {
      const action = createActions.blurSearchAction();
      dispatch(action);
    }
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);



