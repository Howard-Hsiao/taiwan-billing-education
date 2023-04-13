import Template from "./Template";

const data = [
  {
    name: '年代',
    party: '民進黨',
    vote: 915569,
  },
  {
    name: '年代',
    party: '國民黨',
    vote: 628933,
  },
  {
    name: '年代',
    party: '親民黨',
    vote: 81107,
  },
  {
    name: '年代',
    party: '總有效得票數',
    vote: 1625609,
  },
  {
    name: "國民黨",
    party: '民進黨',
    vote: 36264,
  },
  {
    name: "國民黨",
    party: '國民黨',
    vote: 30707,
  },
  {
    name: "國民黨",
    party: '親民黨',
    vote: 3590,
  },
  {
    name: "國民黨",
    party: '總有效得票數',
    vote: 70561,
  }
];

export default function Era() {
  return (
    <Template
      channel="年代"
      data={data}
      peopleConfig={"未交代報票人數"}
      rawDataContent={"我們並未看到年代電視台說明報票人數的資訊，年代有高於國民黨報票系統的票數，或許可推測年代有自己的報票員，但它同時高於台視、中視、中天等台，更高於報票員人數龐大的民視新聞，就有必要對外說明它的計票中心究竟是怎麼運作的。"}
      peopleIcon="question"
    ></Template>
  )
}