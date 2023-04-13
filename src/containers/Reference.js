import {Space, Descriptions} from 'antd';
import MyColorPalettes from "../assets/color_palette.json";

const App = () => {
  return (
    <div style={{
      "width": "100%", 
      "display": "flex", 
      "flexDirection": "column", 
      "alignItems": "center", 
      "justifyContent": "center",
      "backgroundColor": MyColorPalettes["standard"][3], 
      "color": "white", 
    }} id="Reference">
      <Space direction='vertical' align="center" style={{"height": "70%", "justifyContent": "space-around"}}>
        <div className='infoDiv'>
          <h2>網頁作者</h2>
          <p style={{"lineHeight": 0}}>蕭昀豪</p>
        </div>
        <div className='infoDiv'>
          <h2>報票監看工作小組成員</h2>
          <Descriptions 
            bordered={true}
            size="middle" 
            column={1}
            className="custom-descriptions"
            title=<div style={{"backgroundColor": MyColorPalettes["standard"][1]}}><h3 style={{"margin": 0, "padding": "10px"}}>"2020 年總統大選電視台報票監看工作小組成員"</h3></div>
            style={{ "backgroundColor": 'rgb(244, 244, 244)', "textAlign": "center"}}>
            <Descriptions.Item label="召集人">{"賴鼎銘、蘇正平"}</Descriptions.Item>
            <Descriptions.Item label="總編審">{"陳慧敏"}</Descriptions.Item>
            <Descriptions.Item label="總校對">{"邱家宜"}</Descriptions.Item>
            <Descriptions.Item label="監看小組">{"吳孟璇、劉千瑀、張奕萱、張紘齊、莊貿捷、黃化均、莊承憲、鄭人豪、陳珮云、吳禹萱、陳靜雲"}</Descriptions.Item>
            <Descriptions.Item label="表單程式">{"孫璇"}</Descriptions.Item>
            <Descriptions.Item label="投開票所、資料統計">{"卞中佩"}</Descriptions.Item>
            <Descriptions.Item label="排版編輯">{"鄭凱榕"}</Descriptions.Item>
          </Descriptions>
        </div>
        <div className='infoDiv'>
          <h2>Reference</h2>
          <ul style={{"marginTop": 0}}>
            <li>【family and sofa Image】: <a href="https://www.freepik.com/free-vector/breaking-news-concept_9649086.htm#query=watch%20TV&position=17&from_view=search&track=ais">Image by pch.vector</a> on Freepik</li>
            <li><div> 【Favicon】: Image by <a href="https://www.flaticon.com/authors/creative-stall-premium" title="Creative Stall Premium"> Creative Stall Premium </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
          </ul>
        </div>
      </Space>
    </div>
)};
export default App;