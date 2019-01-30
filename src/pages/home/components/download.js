import React from 'react';

import {
  DownloadWrapper,
  Info
} from './style'

export default () => {
  return (
    <DownloadWrapper>
      <img className="qrcode"  src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
      <Info>
        <span className="download-app" >下载简书手机App</span>
        <span className="found-content">随时随地发现和创作内容</span>
      </Info>
    </DownloadWrapper>
  )
}