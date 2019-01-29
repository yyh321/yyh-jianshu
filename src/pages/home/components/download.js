import React from 'react';

import {
  DownloadWrapper,
  QRCodeImg,
  DownloadTitle,
  DownloadContent,
  Info
} from './style'

export default () => {
  return (
    <DownloadWrapper>
      <QRCodeImg  src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
      {/* <Info>
      <DownloadTitle>下载简书手机App</DownloadTitle>
      <DownloadContent>随时随地发现和创作内容h</DownloadContent>
      </Info> */}
    </DownloadWrapper>
  )
}