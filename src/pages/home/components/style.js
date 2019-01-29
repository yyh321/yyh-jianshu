import styled from 'styled-components';

// list
export const ListWrapper = styled.div`
  width:625px;
  /* height:1000px; */
  margin-top:30px;
`;

export const ListItem = styled.div`
  width:625px;
  height:163px;
  padding:35px 0;
  border-top: 1px solid #f0f0f0;
  box-sizing: border-box;
`;
export const TopicTitle = styled.div`
  margin:-7px 0 4px;
  width:100%;
  font-size:18px;
  line-height:1.5;
  font-weight: 700;
  color:#333;
`;
export const Content = styled.p`
  width:100%;
  height:48px;
  overflow:hidden;
  margin:0 0 8px;
  font-size:13px;
  line-height:24px;
  color:#999;
`;


// download

export const DownloadWrapper = styled.div`
  box-sizing:border-box;
  width:280px;
  height: 82px;
  border:1px solid #f0f0f0;
  border-radius:6px;
  background-color: #fff;
  margin-bottom: 30px;
  padding: 10px 22px;
`

export const QRCodeImg = styled.img`
  width:60px;
  height:60px;
`
export const DownloadTitle = styled.span`
  float:right;
  font-size:15px;
  color:#333;
`
export const DownloadContent = styled.span`
  float:right;
  margin-top: 4px;
  font-size: 13px;
  color: #999;
`
export const Info = styled.div`
  overflow:hidden;
  vertical-align: middle;
  margin-left: 7px;
  width:180px;
  background:red;
  float:right;
`