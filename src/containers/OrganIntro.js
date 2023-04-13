import { Tabs } from 'antd';
import tfcLogo from "../assets/newsLogo/事實查核教育基金會.png";
import fejaLogo from "../assets/newsLogo/卓越新聞獎基金會.webp";
import mwLogo from "../assets/newsLogo/媒體觀察教育基金會.png";
import aqjLogo from "../assets/newsLogo/優質新聞發展協會.png";
import {Head} from '../style/general.js'
import styled from 'styled-components';
import organInfoData from '../assets/data/organInfo.json';

const DecLine = styled.span`
  border-left: 3.5px solid rgb(53, 20, 13);
  display: block;
  height: 80%;
`

const CustomedTab = styled.div`
  .ant-tabs-tab {
    background-color: rgb(53, 20, 13);
  }

  .ant-tabs-tab-btn {
    color: #111111 !important; 
    border-color: rgb(53, 20, 13);
    font-weight: 500;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    pointer-events: none;
    background-color: rgb(53, 20, 13);
  }
 
  .ant-tabs-ink-bar {
    border-bottom: 50px solid #FF5230;
  }
`

const TabImg = styled.div`
  height: 50%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TabLabel = styled.div`
`

function organTab(organName){
  return (
    <TabLabel>
      <div className="aaa" style={{"fontSize": "16px", "padding": "0 5px 0 5px"}}>{organName}</div>
    </TabLabel>
  )
}

function organTabContent(organName, organIntro){
  const logo_dict = {
    "事實查核教育基金會": tfcLogo, 
    "卓越新聞獎基金會": fejaLogo, 
    "媒體觀察教育基金會": mwLogo, 
    "優質新聞發展協會": aqjLogo
  }

  return (
    <div className="organTabContent">
      <TabImg>
        <img src={logo_dict[organName]} alt={organName + "_logo"} style={{"width": "80%"}}/>
      </TabImg>
      <DecLine></DecLine>
      <div className='tabText'>
        <p>{organIntro}</p>
      </div>
    </div>
  )
}

export default function OrganIntro() {
  return (
    <CustomedTab className='limitContent' id="OrganIntro">
      <Head className='middleArea'>查核行動夥伴</Head>
      <Tabs style={{"marginTop": "50px", "width": "100%"}}
        type="card"
        // tabBarStyle={{"backgroundColor": "brown"}}
        items={new Array(4).fill(null).map((_, i) => {
          return {
            label: organTab(organInfoData[i]["name"]),
            key: i,
            children: organTabContent(organInfoData[i]["name"], organInfoData[i]["intro"]),
          };
        })}
      />
      
      <div>
        <p>四個媒體專業組織在選前發表共同聲明，希望各家電視台尊重新聞專業，在投開票日播出開票情況時，應本真實原則，不要為了搶收視率而灌票。同時，四個組織也聯合成立一個17人「2020總統大選電視台報票監看工作小組」（以下簡稱「監看小組」），在當天實際監看各家電視台整個報票過程。</p>
      </div>
    </CustomedTab>
  );
}