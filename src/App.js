import './App.css'
import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import LivingRoom from './containers/LivingRoom.js'
import {LineDivider, BallDivider} from './components/Divider.js'
import Intro from './containers/Intro.js'
import OrganIntro from './containers/OrganIntro';
import ChannelIntro from './containers/ChannelIntro';
import CheckPoint1 from './containers/CheckPoint1.js'
import CheckPoint2 from './containers/CheckPoint2.js'
import CheckPoint3 from './containers/CheckPoint3.js';
import CheckPoint4 from './containers/CheckPoint4.js';
import CheckPoint5 from './containers/CheckPoint5.js';
import MethodIntro from './containers/MethodIntro';
import Summary from './containers/Summary'
import Recommendation from './containers/Recommendation'
import Reference from './containers/Reference';
import { MenuOutlined } from '@ant-design/icons';
import { FloatButton, Drawer } from 'antd';
import MyColorPalettes from "./assets/color_palette.json";

function App() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const Link = ({sectionID})=>(
    <a onClick={() => window.location.replace("/#" + sectionID)}><li>{sectionID}</li></a>
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'GenSenMaruGothicTW-Regular',
          fontSize: '20px', 
        },
      }}
    >
      <div className="App">
        <LivingRoom></LivingRoom>
        <LineDivider></LineDivider>
        <Intro></Intro>
        <OrganIntro></OrganIntro>
        <ChannelIntro></ChannelIntro>
        <BallDivider></BallDivider>
        <MethodIntro></MethodIntro>
        <BallDivider></BallDivider>
        <CheckPoint1></CheckPoint1>
        <CheckPoint2></CheckPoint2>
        <CheckPoint3></CheckPoint3>
        <CheckPoint4></CheckPoint4>
        <CheckPoint5></CheckPoint5>
        <Summary></Summary>
        <Recommendation></Recommendation>
        <Reference></Reference>
      </div>

      <FloatButton icon=<MenuOutlined /> onClick={showDrawer}/>
      <Drawer title="目錄" placement="right" onClose={onClose} open={open} style={{"backgroundColor": MyColorPalettes["standard"][0]}}>
        <ol className='menu'>
          <Link sectionID="LivingRoom"></Link>
          <Link sectionID="LineDivider"></Link>
          <Link sectionID="Intro"></Link>
          <Link sectionID="OrganIntro"></Link>
          <Link sectionID="ChannelIntro"></Link>
          <Link sectionID="MethodIntro"></Link>
          <Link sectionID="CheckPoint1"></Link>
          <Link sectionID="CheckPoint2"></Link>
          <Link sectionID="CheckPoint3"></Link>
          <Link sectionID="CheckPoint4"></Link>
          <Link sectionID="CheckPoint5"></Link>
          <Link sectionID="Summary"></Link>
          <Link sectionID="Recommendation"></Link>
          <Link sectionID="Reference"></Link>
        </ol>
      </Drawer>
    </ConfigProvider>
  );
}

export default App;
