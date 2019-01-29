import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { createActions } from './store';
// import { toJS } from 'immutable';
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

  getListArea = () => {
    const {focused,list,page,totalPage,mouseIn,handleMouseLeave,handleMouseEnter,handleChangePage} = this.props;
    const newList = list.toJS();//讲immutable对象转为普通对象，因为immutable对象不能通过下标获取数据
    const pageList = [];
    if(newList.length) {
      // 只要当数据请求完成时才添加，否则
        for(let i=(page-1)*10; i<page*10; i++) {
        if(newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}> {newList[i]} </SearchInfoItem>
        )
        }
      }
    }
    
    if(focused || mouseIn) {
      return (
        <SearchInfo 
        onMouseLeave={handleMouseLeave}
        onMouseEnter= {handleMouseEnter}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont">&#xe62c;</span>
            换一批
          </SearchSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
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
              onFocus={() =>handleInputFocus(list)} 
              onBlur = {handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont search' : 'iconfont search'}>&#xe6e4;</span>
            {this.getListArea()}
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
    list: state.getIn(['header','list']), // 从store中获取数据
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
     if(list.size === 0) {
      // 搜素框获得焦点时，通过redux-thunk获取异步数据,获取异步数据的方法写在action中
      dispatch(createActions.getListAction());
     }
      dispatch(createActions.focusSearchAction());
    },
    handleInputBlur() {
      const action = createActions.blurSearchAction();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(createActions.mouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(createActions.mouseLeaveAction());
    },
    handleChangePage(page,totalPage,spinIcon) {
    let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
    if(originAngle) {
      originAngle = parseInt(originAngle,10);
    } else {
      originAngle = 0;
    }
    spinIcon.style.transform = 'rotate('+(originAngle + 360)+'deg)';
      if(page < totalPage) {
        dispatch(createActions.changePageAction(page + 1));
      } else {
         dispatch(createActions.changePageAction(1));
      }
    }
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);



