import React, { useState } from 'react';
import {Head, SubHead} from '../style/general.js'
import { Col, Row, Space } from 'antd';
import claimData from '../assets/data/channelClaim.json';
import channelTypeData from '../assets/data/channelType.json';
import Button from '@mui/material/Button';
import channelList from '../assets/data/channelList.json';

const buttonStyle = {
  "backgroundColor": "rgb(226, 206, 188)", 
  "width": "50%", 
  "borderRadius": "50px", 
  "color": "rgb(53, 20, 13)"
}

export default function ChannelIntro() {
  const [channel, setChannel] = useState(channelList[0]);

  function ButtonGroup() {
    const numbers = Array.from(Array(6).keys());
    const buttons = numbers.map((i) => (
      <Row key={i} style={{"height": "15%"}}>
        {
          Array.from(Array(2).keys()).map( j => {
            let index = 2 * i + j;
            if(index < channelList.length){
              return(
                <Col span={12} justify='center' align='center' style={{"height": "100%"}}>
                  <Button type="primary" style={buttonStyle}
                  onClick={event => {
                    setChannel(channelList[index]);
                  }}
                  key={channelList[index]}>{channelList[index]}</Button>
                </Col>
              );    
            }
            else{
              return <></>;
            }
          })
        }
      </Row>
    ));

    return <>{buttons}</>;
  }

  return (
    <div className="limitContent" id="ChannelIntro">
      <Head className="middleArea" style={{"paddingBottom": "5%"}}>各電視台報票依據之宣稱</Head>
      <Row style={{"width": "100%"}}>
        <Col span= {1}></Col>
        
        <Col span= {6} justify='start' align='top'>
          <ButtonGroup></ButtonGroup>
        </Col>

        <Col span= {1}></Col>
        <Col span= {16}>
          <div style={{"backgroundColor": "rgb(190, 142, 99)", "padding": "25px 25px 0 25px"}}>
            <Space direction='vertical'>
              <SubHead>{channel}（{channelTypeData[channel]}）</SubHead>
              <div style={{"height": "30vh", "width": "100%"}}><div dangerouslySetInnerHTML={{__html: claimData[channel]}}></div></div>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
}