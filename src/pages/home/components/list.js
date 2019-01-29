import React, { Component } from 'react';
import {
  ListWrapper,
  ListItem,
  TopicTitle,
  Content
} from './style';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <ListWrapper>
        <ListItem>
          <TopicTitle>
          一场意外，她和他 |睡|了一夜，她如愿以偿的借了个zhong。 谁知道，第二天他竟然全城通缉她……
          </TopicTitle>
          <Content>
          第1章 老|处|女    “不是吧？你怎么知道叶楠还是老处女啊？”    “你刚到咱们公司，所以不知道，她是老处女这件事，已经不是什么秘密了！”    叶楠刚刚走进洗手间，就听到同事们在讨论自己。    “哎，你说啊，她这么大年纪了还不谈恋爱，不会是没人要吧？”    叶楠眉头一跳，她才二十四岁，很老吗？    “我听人家说她很小就没了父母，在孤儿院住了很长一段时间，最后被姨妈接回了家，你说像她那样经历复杂的女人，有几个是正常的？说不定她还心理变态，喜欢女人，不喜欢男人呢！对了，小西，我看她最近和你关系不错，你可要小心点儿，万一她对你有那方面的意思呢？”
          </Content>
        </ListItem>
        <ListItem>
          <TopicTitle>
          凤九东华剧版续——三生三世凤华笙（十五）
          </TopicTitle>
          <Content>
          因为受伤凤九便在太晨宫住了下来，期间白浅带着小团子来瞧过几回，司命与成玉倒是每日都来。所以凤九虽然被帝君勒令卧床，倒也不觉得无聊。司命就是九重天上行走的话本子，有他在什么八卦都不缺。听说天族某旁支的少主倾慕下界某个仙山的什么仙子……消息太多，基本记不住了，唯一记得的就是有个什么
          </Content>
        </ListItem>
        <ListItem>
          <TopicTitle>
          断舍离|2019年我要断舍离掉的十种物品
          </TopicTitle>
          <Content>
          1、过期的化妆品
            我好多化妆品都是16年毕业时买的，化妆品保质期一般都是三年，今年扔掉换新。喜不喜欢是一方面，万一烂脸了，没办法挽回。
            2、污损、不合身的衣服
            这类衣服我一般都不会再穿了，有洗不出来的、质地变化的、穿不上的衣服，都要扔掉，留下常穿的就好。
          </Content>
        </ListItem>
        <ListItem>
          <TopicTitle>
          你在床上刷抖音，殊不知抖音在给抖音主发工资，3万块一条短视频
          </TopicTitle>
          <Content>
          抖音火了之后，人人刷抖音，而且一刷就是几个小时，已经成为了了一种常态，看抖音上面的小哥哥小姐姐一个个的长得又好看
          </Content>
        </ListItem>
      </ListWrapper>
     );
  }
}
 
export default List;