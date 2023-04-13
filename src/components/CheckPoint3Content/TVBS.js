import Template from "./Template";

const data = [
  {
    name: 'TVBS',
    party: '民進黨',
    vote: 1081717,
  },
  {
    name: 'TVBS',
    party: '國民黨',
    vote: 749959,
  },
  {
    name: 'TVBS',
    party: '親民黨',
    vote: 94968,
  },
  {
    name: 'TVBS',
    party: '總有效得票數',
    vote: 1926644,
  },
  {
    name: "前 5000 大投票所",
    party: '民進黨',
    vote: 3324534,
  },
  {
    name: "前 5000 大投票所",
    party: '國民黨',
    vote: 2336754,
  },
  {
    name: "前 5000 大投票所",
    party: '親民黨',
    vote: 270996,
  },
  {
    name: "前 5000 大投票所",
    party: '總有效得票數',
    vote: 5572060,
  }
];

export default function TVBS() {
  const same_claim = `TVBS宣稱有2000名工讀生，負責5000多個投開票所。

我們同樣以總票數、蔡英文票數、韓國瑜票數和宋楚瑜票數的前5000大投開票所，來做比對，TVBS四種項目的報票數均少於前五千大，所佔比例也不高，尚在合理範圍。`;
  return (
    <Template
      channel="TVBS"
      data={data}
      peopleConfig={"2000 位工讀生，負責5000個投開票所"}
      rawDataContent={same_claim}
      KMTdecreDataContent={same_claim}
      summary={"監看小組認為，此數值落在合理範圍，是奠基於TVBS宣稱的佈局5000家投開票所基礎，建議TVBS對外說明，2000名工讀生如何負責5000個投開票所之操作方法。"}
    ></Template>
  )
}