import React, {Component} from 'react';
// import { connect } from 'react-redux';
import List from './components/list';
import Download from './components/download';

import {
  HomeWrapper, 
  HomeLeft,
  HomeRight,
  BananaImg,
  RightImgItem
} from './style'

class Home extends Component {
  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <BananaImg src="//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
          <List />
        
        </HomeLeft> 
        <HomeRight>
          <RightImgItem src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt="Banner s 3" />
          <RightImgItem src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt="Banner s 4" />
          <RightImgItem src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 5" />
          <RightImgItem src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 6" />
          <RightImgItem src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 7" />
          <Download />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;




