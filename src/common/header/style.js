import styled from 'styled-components'

import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div `
  position:relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const LogoImg = styled.a `
  display:block;
  position:absolute;
  cursor:pointer;
  top:0;
  left:0;
  height: 58px;
  width:100px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div `
  width:960px;
  height:100%;
  margin:0 auto;
  box-sizing:border-box;
  padding: 0 30px;
`
export const NavItem = styled.div `
  line-height:56px;
  height: 56px;
  color: #333;
  padding:0 15px;
  &.left {
    float:left;
  }
  &.right {
    float:right;
    color:#969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const NavSearch = styled.input `
  width:160px;
  height:38px;
  background:red;
  margin-top:9px;
  border-radius:19px;
  margin-left:10px;
  padding:0 40px 0 20px;
  border:1px solid #eee;
  font-size:14px;
  background:#eee;
  box-sizing:border-box;
  border:none;
  outline:none;
  color: #666;
  &::placeholder {
    color:#999;
  }
  &.focused {
    width:240px;
  }
  &.slide-enter {
    transition: all .3s ease-out;
  }
  &.slide-enter-active {
    width:240px;
  }
  &.slide-exit {
      transition: all .3s ease-out;
  }
  &.slide-exit-active {
    width:160px;
  }
`
export const Addition = styled.div `
  position:absolute;
  top:0;
  right:0;
  height:56px;
`
export const Button = styled.div `
  float:right;
  line-height:38px;
  height:38px;
  margin-top:9px;
  border-radius:19px;
  font-size:15px;
  cursor:pointer;
  text-align:center;
  &.register{
    width:80px;
    margin:9px 5px 0 15px;
    color:#ea6f5a;
    border: 1px solid rgba(236,97,73,.7);
    background-color: transparent;
  }
  &.write {
    width:100px;
    margin:8px 15px 0;
    color: #fff;
    background-color:#ea6f5a;
  }
`
export const SearchWrapper = styled.div `
  position:relative;
  float:left;
  .search {
    position:absolute;
    display:block;
    width:30px;
    height:30px;
    border-radius:15px;
    text-align:center;
    right:5px;
    bottom:5px;
    line-height:30px;
    &.focused {
      background:#777;
      color:#fff;
    }
  }
`
export const SearchInfo = styled.div `
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0, .2);
  background:#fff;
`

export const SearchInfoTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size:14px;
  color: #969696;
`
export const SearchSwitch = styled.span `
  float: right;
  font-size:13px;
  cursor:pointer;
  .iconfont {
    /* display:block; */
    float:left;
    margin-right:4px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`
export const SearchInfoItem = styled.a `
  float:left;
  font-size:12px;
  margin-right:10px;
  margin-bottom:15px;
  padding:5px 6px;
  color:#787878;
  border-radius:3px;
  border:1px solid #ddd;
`