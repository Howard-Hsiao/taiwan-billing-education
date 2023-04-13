import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import voteData from '../assets/data/election_vote.json';
import TV from '../components/TV.js'
import TimeLine from '../components/TimeLine.js'
import RemoteControl from '../components/RemoteControl';
import {Head, SubHead} from '../style/general.js'
import styled from 'styled-components';

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  line-height: 48px;
  height: 100%;
`

const leftColProperty = {
  "display": "flex", 
  "flexDirection": "column", 
  "justifyContent": "center", 
  "alignItems": "flex-start", 
  "paddingLeft": "2%"
}

const ChannelTitle = styled.h1`
  font-size: 22px; 
`

export default function News() {
  const [channel, setChannel] = useState('公視')
  const [timeIdx, setTimeIdx] = useState(0);
  const [currTime, setCurrTime] = useState(voteData[channel][timeIdx][0]);
  const [vote, setVote] = useState(voteData[channel][timeIdx][1]);

  let timepoints = voteData[channel].map(n => n[0]);

  const dataLen = voteData[channel].length;
  useEffect(() => {
    const interval = setInterval(() => {
      if(timeIdx !== dataLen-1){
        setTimeIdx(timeIdx+1);
      }
      else{
        setTimeIdx(0);
      }
    }, 2000);

    setVote(voteData[channel][timeIdx][1]);
    setCurrTime(voteData[channel][timeIdx][0]);

    return () => clearInterval(interval);
  }, [timeIdx, channel, dataLen]);

  useEffect(() => {
  }, [timeIdx, channel, dataLen]);
  
  return (
    <div id='LivingRoom'>
      <Row className='full-screen-container'>
        <Col span={2} align="middle">
          <div style={{"height": "100%", "width": "25%"}}>
            <div style={{"height": "22%", "backgroundColor": "rgb(214, 210, 193)"}}></div>
            <div style={{"height": "4%"}}></div>
            <div style={{"height": "22%", "backgroundColor": "rgb(190, 142, 99)"}}></div>
            <div style={{"height": "4%"}}></div>
            <div style={{"height": "22%", "backgroundColor": "rgb(164, 104, 67)"}}></div>
            <div style={{"height": "4%"}}></div>
            <div style={{"height": "22%", "backgroundColor": "rgb(53, 20, 13)"}}></div>
            {/* <div id="555" style={{"height": "50%", "width": "25%", "backgroundColor": "black"}}></div> */}
          </div>
        </Col>

        {/* Head */}
        <Col span={10} align="middle" style={leftColProperty}>
          <div style={{"height": "15%"}}></div>
          <div style={{"height": "35%", "width": "100%"}}>
            <TitleDiv>
              <Head>看開票</Head>
              <Head>我們能有不同的選擇</Head>
              <SubHead style={{"color": "rgb(164, 104, 67)"}}>2020 總統大選 電視台報票觀察報告</SubHead>
             </TitleDiv>
          </div>
          
          <div style={{"height": "30%", "width": "70%"}}>
            <div style={{"height": "100%"}}>
              <p>選舉期間，從活動開跑，直至開票完成產生選舉結果為止的每一個環節，各方都必須小心應對、謹慎處理。在媒體部分，尤其應該避免有不實資訊誤導群眾，甚至引發動亂。</p>
            </div>
          </div>
          <div style={{"height": "10%", "width": "100%"}}></div>
        </Col>

        {/* Family watching the TV */}
        <Col span={9} align="middle" className='watchingTV'>
          <div className="clock">
            <div className="hanger"></div>
            <div className="timer">
              時間: {timepoints[timeIdx]}
            </div>
          </div>

          <div className='screen'>
            <div style={{"width": "100%", "height": "20%"}}>
              <ChannelTitle>{channel}</ChannelTitle>
            </div>
            <div className="TV_container" style={{"height": "80%"}}>
              <TV vote={vote}></TV>
            </div>
          </div>
          
          <div className="timeline">
              <TimeLine timepoints={timepoints} time={currTime} setTimeIdx={setTimeIdx}></TimeLine>
          </div>
          
          <div className='familySofa'></div>
        </Col>

        {/* Remote Control */}
        <Col span={3} style={{}}>
          <div style={{"width": "100%", "height": "20%"}}></div>
          <RemoteControl setTimeIdx={setTimeIdx} setChannel={setChannel}></RemoteControl>
          <div style={{"width": "100%", "height": "5%"}}></div>
        </Col>
      </Row>

      {/* <Row style={{"height": "100%", "width": "100%", "backgroundColor": "brown"}} ></Row> */}
      {/* <img src={familySofa} alt="this is car image" /> */}
    </div>
  )
}
