import React, { useState } from 'react';
import {SubHead} from '../style/general.js'
import {Col, Row, Space, Descriptions} from 'antd';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import clockImage from '../assets/clock1605.svg';
import CheckPointTitle from './CheckPointTitle.js';
import check1Data from "../assets/data/checkpoint1.json"
import channelList from '../assets/data/channelList.json';

const buttonStyle = {
  "backgroundColor": "rgb(226, 206, 188)", 
  "width": "50%", 
  "borderRadius": "50px", 
  "color": "rgb(53, 20, 13)"
}

const infoDivStyle = {
  "backgroundColor": "rgb(240, 235, 230)", 
  "height": "80%", 
  "borderRadius": "30px", 
  "border": "3px solid rgb(53, 20, 13)"
};

const Clock = styled.div`
  height: 100%;
  width: 80%;
  background-image: url(${clockImage}); 
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
`

export default function FirstCheckPoint() {
  const [channel, setChannel] = useState(channelList[0]);

  function ButtonGroup() {
    const numbers = Array.from(Array(6).keys());
    const buttons = numbers.map((i) => (
      <Row style={{"height": "15%"}}>
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
    <div className="limitContent" id="CheckPoint1">
      <CheckPointTitle title="查核點 1" subtitle="第一次報票時間之合理性"></CheckPointTitle>
      <div style={{"height": "65vh"}}>
        <div style={{"height": "40%"}}>
          <Row justify="space-around" align="middle" style={infoDivStyle}>
            <Col span= {7} style={{"height": "100%"}}><Clock></Clock></Col>
            <Col span= {14}>依據紀錄，各投開票所依規定16點投票結束，開始進行開票程序的五分鐘之內，已有九家電視台宣布第一個開票數。
            </Col>
          </Row>
        </div>
        
        <Row style={{"height": "60%"}}>
          <Col span= {1}></Col>
          
          <Col span= {6} justify='start' align='top'>
            <ButtonGroup></ButtonGroup>
          </Col>

          <Col span= {1}></Col>
          <Col span= {16}>
            <div style={{"height": "100%", "backgroundColor": "rgb(190, 142, 99)", "padding": "0% 5% 0 5%"}}>
              <Space direction="vertical">
                <SubHead style={{"margin": "25px 0 25px 0"}}>{channel}</SubHead>
                <Descriptions 
                  layout="vertical" 
                  bordered={true}
                  size="middle" 
                  column={5}
                  className="custom-descriptions" 
                  labelStyle={{"fontSize": "20px"}}
                  contentStyle={{"fontSize": "16px"}}
                  style={{ "backgroundColor": 'rgb(244, 244, 244)', "textAlign": "center"}}>
                  <Descriptions.Item label="時間">{check1Data[channel]["time"]}</Descriptions.Item>
                  <Descriptions.Item label="蔡英文">{check1Data[channel]["蔡"]}</Descriptions.Item>
                  <Descriptions.Item label="韓國瑜">{check1Data[channel]["韓"]}</Descriptions.Item>
                  <Descriptions.Item label="宋楚瑜">{check1Data[channel]["宋"]}</Descriptions.Item>
                  <Descriptions.Item label="總和">{check1Data[channel]["總"]}</Descriptions.Item>
                </Descriptions>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}


