import React from 'react';
import CheckPointTitle from './CheckPointTitle.js';
import { Space, Row, Col } from 'antd';
import SocialMediaGIF from '../assets/SocialMediaGIF.gif'
import MyColorPalettes from "../assets/color_palette.json";

export default function CheckPoint5() {
  return (
    <div className='limitContent' id="CheckPoint5">
      <CheckPointTitle title="查核點 5" subtitle="電視台報票誤植或數字暴衝，易讓選民質疑選務工作"></CheckPointTitle>
      <Row style={{"width": "100%", "alignItems": "center", "backgroundColor": MyColorPalettes["standard"][0]}} gutter={[48, 48]}>
        <Col span={15}><p>此次電視台報票過程中，有時會出現「數字暴衝」或「數字誤植」情況，部分觀眾能理解這是電視台的疏失，但監看小組也發現有部分觀眾因電視台的誤植數字或暴衝數字，而對選務工作產生疑惑。電視台的報票工作若不夠嚴謹，恐擾亂民心，各電視台應警惕並慎重以對。
建議電視台若有誤植，主播應立刻口頭說明與解釋，同時配上跑馬燈和明顯標示，告知觀眾。</p></Col>
        <Col span={9}>
          <Space direction="vertical" align="center" size={[0]} style={{"width": "100%", "padding": "20px"}}>
            <img src={SocialMediaGIF} alt="social media" style={{"width": "100%"}}/>
            <p>▲ 來自社群媒體的貼文</p>
          </Space>
        </Col>
      </Row>
    </div>
  );
}