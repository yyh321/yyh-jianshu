import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createActions } from '../store';
import {
  ListWrapper,
  ListItem,
  TopicTitle,
  Content,
  ItemContainer,
  ListItemWithImg,
  ItemImg
} from './style';

class List extends Component {
  componentDidMount() {
    // 异步获取list数据
    this.props.getInitList();
  }
  render() {
    const { list} = this.props; 
    return ( 
      <ListWrapper>
        {
          list.map((item) => {
            const img = item.get('img');
            if(img) {
              return  <ListItemWithImg key={item.get('id')}>
                      <ItemContainer>
                        <TopicTitle>
                          {item.get('title')}
                        </TopicTitle>
                        <Content>
                          {item.get('content')}
                        </Content>
                      </ItemContainer>
                      <ItemImg src={item.get('img')} />
                    </ListItemWithImg>
            } else {
              return <ListItem key={item.get('id')}>
                      <TopicTitle>
                        {item.get('title')}
                      </TopicTitle>
                      <Content>
                        {item.get('content')}
                      </Content>
                    </ListItem>
            }
          })
        }
      </ListWrapper>
     );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','list'])
})

const mapDispatchToProps = (dispatch) => ({
  getInitList(){
    // 异步获取list数据
    dispatch(createActions.getListAction());
  }
})
 
export default connect(mapStateToProps,mapDispatchToProps)(List);