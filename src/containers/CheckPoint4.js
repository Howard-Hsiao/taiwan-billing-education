import CheckPointTitle from './CheckPointTitle.js';
import LineChart from '../components/LineChart.js'
import { Space } from 'antd';

export default function FirstCheckPoint() {
  return (
    <div className='limitContent' id="CheckPoint4">
      <CheckPointTitle title="查核點 4" subtitle="16 點 50 分開票結果之合理性"></CheckPointTitle>
      <Space direction="vertical">
      <LineChart style={{"height": "50vh", "width": "100%"}}></LineChart>
      <p>{`監看小組觀察，有些電視台在17點30分之後，會改用國民黨計票中心（17點30分）及中選會（19點40）的資料，但在17點30分，有報票員的電視台應仍是運用自己的報票系統。比較個別電台所宣布的報票員人數（或報票所數），及報票總數，會發現以下現象： 

（一）按照各台自己的通報，民視新聞台是使用最多報票員的電視台（3,927人），甚至是其他台的好幾倍，然而依據我們的統計資料，一直到17點30分為止，在所有商業電視台當中，民視新聞的報票速度卻是最慢的，而且差距不小。民視新聞在後來自己的新聞中特別強調，他們堅持用真實的報票資料，不灌水，即使速度落後也沒改變作法。

（二）TVBS告訴觀眾，它有2000個報票員在5000多個投開票所報票，是11家電視台當中報票志工數最高的，布局在5000多家投開票所，佔全國17226個投開票所數大約29%。

根據監看小組所登錄17點30分的資料（這時間票應該沒開完），宣稱從5000家投票所報票的TVBS，這時間所開出來的票為3,946,965票，而編制更龐大的民視新聞，甚至僅有2,736,782票。然而，東森（只有450或千人回報）開出4,450,365票，中天（從930家投開票所回報）開出4,775,150票，而三立（上千人回報）更是開出5,128,848票。這些電視台自行報票人力相對而言少很多，卻開出超高票，有責任必須說明這些票是怎麼跑出來的。`}
      </p>
      </Space>
    </div>
  );
}