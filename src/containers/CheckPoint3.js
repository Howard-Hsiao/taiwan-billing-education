import styled from 'styled-components';
import React, { useState } from 'react';
import { CheckCircleFilled, QuestionCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import StackedBarChart from '../containers/StackBarChart';
import data from '../assets/data/stackBarChart.json';
import CheckPointTitle from './CheckPointTitle.js';
import channelList from '../assets/data/channelList.json';
import data1640 from '../assets/data/data1640.json';
import { Space, Tag, Collapse } from 'antd';
import MyColorPalettes from "../assets/color_palette.json";
import ContentManager from '../components/CheckPoint3Content';
const { Panel } = Collapse;

const GoalDiv = styled.div`
  display: flex;
  background-color: brown;
  justify-content: center;
  height: 20%;
  width: 80%;
  background-color: rgb(53, 20, 13);
  color: white;
`

const BillingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Report = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 25px 0 25px 0;
`

const SeparatorWithText = ({ text }) => {
  const separatorStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const lineStyle = {
    height: '1px',
    flex: 1,
    backgroundColor: '#ccc',
  };

  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  return (
    <div style={separatorStyle}>
      <div style={lineStyle}></div>
      <div style={textStyle}>{text}</div>
      <div style={lineStyle}></div>
    </div>
  );
};


export default function CheckPoint3() {
  const [channel, setChannel] = useState(channelList[0]);
  const [reasonableType, setReasonableType] = useState("尚在合理範圍");

  const buttonDict = {
    "尚在合理範圍": (channel, reasonableType) => (
      <Button type="primary" shape="round" icon={<CheckCircleFilled />} 
      style={{"backgroundColor": "rgb(190, 142, 99)", "fontSize": "14px"}} onClick={()=> {
        setChannel(channel);
        setReasonableType(reasonableType);
      }}>{channel}</Button>
    ), 
    "建議要解釋": (channel, reasonableType) => (
      <Button type="primary" shape="round" icon={<QuestionCircleFilled />}
      style={{"backgroundColor": "rgb(164, 104, 67)", "fontSize": "14px"}} onClick={()=> {
        setChannel(channel);
        setReasonableType(reasonableType);
      }}>{channel}</Button>
    ), 
    "有必要解釋": (channel, reasonableType) => (
      <Button type="primary" shape="round" icon={<ExclamationCircleFilled />}
      style={{"backgroundColor": "rgb(53, 20, 13)", "fontSize": "14px"}} onClick={()=> {
        setChannel(channel);
        setReasonableType(reasonableType);
      }}>{channel}</Button>
    )
  }

  function getTag(reasonableType, type){
    const style_dict = {"fontSize": "16px"};
    if(type === "bar"){
      style_dict["width"] = "100%";
    }
    
    if(reasonableType === "尚在合理範圍")
      return <Tag icon={<CheckCircleFilled />} color="rgb(190, 142, 99)" style={style_dict}>尚在合理範圍</Tag>;
    if(reasonableType === "建議要解釋")
      return <Tag icon={<QuestionCircleFilled />} color="rgb(164, 104, 67)" style={style_dict}>建議要解釋</Tag>; 
    if(reasonableType === "有必要解釋")
      return <Tag icon={<ExclamationCircleFilled />} color="rgb(53, 20, 13)" style={style_dict}>有必要解釋</Tag>;
  }

  return (
    <div className='limitContent' id="CheckPoint3">
      <CheckPointTitle title="查核點 3" subtitle="16 點 40 分開票結果之合理性"></CheckPointTitle>
      <Space direction='vertical' size={40} style={{"width": "100%"}}>
        <StackedBarChart data={data} style={{"height": "50vh", "width": "100%"}}></StackedBarChart>

        <div style={{"width": "100%", "display": "flex", "justifyContent": "center"}}>
          <GoalDiv>
              <Space align='center'>
              <p style={{"fontSize": "18px", "textAlign": "center"}}>{"我們想用對電視台而言最有利的開票情況評估電視台目前的宣稱是否合理」"}</p>
              </Space>
          </GoalDiv>
        </div>

        <div>
          <p>{`舉例來說，某電視台宣稱有1000名報票工讀生，假設電視台規劃完善，把這1000位志工分配到投票數最高的投開票所，我們就分別取全國
    「總開票數最高」的前1000大投票所
    「蔡英文得票數最多」的前1000大投票所
    「韓國瑜得票數最多」的前1000大投票所
    「宋楚瑜得票數最多」的前1000大投票數
與這個電視台所發佈的總統票總得票數以及個別候選人的得票數，來做比較。

我們比對電視台的報票數， 舉出 3 種情況。`}
          </p>
          <ul>
            <li>{getTag("尚在合理範圍")} 完全落在推出最理想狀況的數值之內</li>
            <li>{getTag("建議要解釋")} 部分電視台對人力和佈局投開票所得宣稱不明確。因此，儘管我們做了不同推估，在電視台最理想化的推估數值下，雖然其報票數仍落在合理範圍，我們仍建議要解釋</li>
            <li>{getTag("有必要解釋")}  若電視台報票數超出最理想情況數值，難稱合理</li>
          </ul>
        </div>

        <Collapse defaultActiveKey={['0']} ghost>
          <Panel key="1" header={
            <SeparatorWithText text="舉例說明"></SeparatorWithText>
          }>
            <p>假設報票員只負責一個投開票所，電視台的四種報票數都應該少於這四種前1000大的開票統計才對；即使在最理想的狀況下（電視台報票人員從四類票數最高的前1000大票所報票，而且所有這些投票所，都已在16點40分完成開票），電視台的報票數最多也只能等於這四種前1000大的數值。若電視台開出的票數超過前1000大，就不合理。由於不能排除可能性，我們也計算了一個報票工讀生負責兩個票所的情況。</p>
          </Panel>
        </Collapse>


        <BillingDiv>  
        <div style={{"width": "100%", "alignItems": "center"}}>
          <Space align="center" size={[30, "small"]} wrap style={{
            "backgroundColor": MyColorPalettes["standard"][0], 
            "justifyContent": 'center', 
            "padding": "20px"
          }}>
            {
              data1640.map(k => k["data"].map(info => {
                return(
                  buttonDict[k["type"]](info[0], k["type"])
                );
              }))
            }
          </Space>

          <Report>
            <div style={{"display": "flex", "flexDirection": "column", "width": "85%"}}>
              {/* <h1>{channel}</h1> */}
              <div style={{"paddingBottom": "20px"}}>{getTag(reasonableType, "bar")}</div>         
              <ContentManager channel={channel}></ContentManager>
            </div>
          </Report>
        </div>
        </BillingDiv>
      </Space>
    </div>
  );
}