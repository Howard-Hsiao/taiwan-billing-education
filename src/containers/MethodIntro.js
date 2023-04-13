import styled from "styled-components";
import methodInfoData from '../assets/data/methodInfo.json'
import { Col, Row, Space } from 'antd';
import MyColorPalettes from "../assets/color_palette.json";

const RoundCornerDiv = styled.div`
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;    
  align-items: center;
  padding: 0px 10px;
  background-color: ${MyColorPalettes["standard"][0]};
`
export default function MethodIntro() {
  return (
    <div className='limitContent' id="MethodIntro">
    <Space direction="vertical" size={24}>
      {
        Object.keys(methodInfoData).map( k => (
          <Row key={k} gutter={[24]}>
            <Col span={4}><RoundCornerDiv><p>{k}</p></RoundCornerDiv></Col>
            <Col span={20}><RoundCornerDiv><p>{methodInfoData[k]}</p></RoundCornerDiv></Col>
          </Row>
        ))
      }
    </Space>
    </div>
  );
}