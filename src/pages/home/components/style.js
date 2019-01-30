import styled from 'styled-components';

// list
export const ListWrapper = styled.div`
  width:625px;
  margin-top:30px;
`;

export const ListItem = styled.div`
  width:625px;
  height:163px;
  padding:35px 0;
  border-top: 1px solid #f0f0f0;
  box-sizing: border-box;
`;

export const ListItemWithImg = styled.div`
  width:625px;
  height:162px;
  border-top: 1px solid #f0f0f0;
  overflow:hidden;
`
export const ItemContainer = styled.div`
  float:left;
  box-sizing:border-box;
  width:475px;
  height:100%;
  padding:35px 20px 35px 0;
  box-sizing: border-box;
`
export const ItemImg = styled.img`
  display:block;
  width:150px;
  height:100px;
  margin-top:35px;
  float:right;
`
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
  box-sizing:border-box;
  border:1px solid #f0f0f0;
  border-radius:6px;
  background-color: #fff;
  padding: 10px 22px;
  overflow:hidden;
  margin-top: 10px;
  .qrcode {
    width:60px;
    height:60px;
    float:left;
    display:block;
  }
`
export const Info = styled.div`
  width:160px;
  height:62px;
  float:right;
  padding:12px 0;
  .download-app {
    display:block;
    font-size:15px;
    color:#333;
    margin-bottom:8px;
  }
  .found-content {
    display:block;
    font-size:13px;
    color:#999;
  }
`