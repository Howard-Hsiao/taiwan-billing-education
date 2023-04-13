import StackedBarChart from './StackBarChart';
import data from '../assets/data/stackBarChart.json';
import CheckPointTitle from './CheckPointTitle.js';
import { Space } from 'antd';

export default function CheckPoint2() {
  return (
    <div className='limitContent' id="CheckPoint2">
      <CheckPointTitle title="查核點 2" subtitle="16 點 10 分開票結果之合理性"></CheckPointTitle>
      <Space direction='vertical' size={40} wrap>  
        <StackedBarChart data={data} style={{"height": "50vh", "width": "100%"}}></StackedBarChart>
        <Space>
        <ul>
          <li>五家電視台的三黨總統候選人得票數加總，在4點10分的紀錄點，達到三到四萬之間，依序為TVBS 47,140 、三立44,332、中視41,700、年代31,821、壹電視31,789。</li>
          <li>TVBS、三立、中視的人力資源不同，卻都報出四萬票以上的數字。</li>
          <li>中視和中天的報票系統應是共用，報票數字差距較大；而年代與壹電視為同集團，報票數差距較小。</li>
          <li>報票人數近4,000人的民視新聞台，所報進來的總票數僅為865票。</li>
          <li>華視因國民黨傳入資料後，有些許的時間差，是16點11分才顯示國民黨報票系統的第1筆資料。公共電視依據中選會，也顯示為0票。</li>
        </ul>
        </Space>
      </Space>
    </div>
  );
}