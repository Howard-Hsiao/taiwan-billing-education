import Template from "./Template";

const data = [
  {
    name: '壹電視',
    party: '民進黨',
    vote: 1070639,
  },
  {
    name: '壹電視',
    party: '國民黨',
    vote: 857208,
  },
  {
    name: '壹電視',
    party: '親民黨',
    vote: 96259,
  },
  {
    name: '壹電視',
    party: '總有效得票數',
    vote: 2024106,
  },
  {
    name: "TVBS",
    party: '民進黨',
    vote: 1081717,
  },
  {
    name: "TVBS",
    party: '國民黨',
    vote: 749959,
  },
  {
    name: "TVBS",
    party: '親民黨',
    vote: 94968,
  },
  {
    name: "TVBS",
    party: '總有效得票數',
    vote: 1926644,
  }
];

export default function NextTV() {
  return (
    <Template
      channel="壹電視"
      data={data}
      peopleConfig={"各投開票所自行計票"}
      rawDataContent={"壹電視在16點40分，報票總數為各電視台之冠，但說明報票依據，僅提到「各投開票所自行計票」，與宣稱監控5000個投票站的TVBS相比較，票數還更高。壹電視應說明計票中心的報票編制與運作，以解釋其票數依據為何。"}
      peopleIcon="question"
    ></Template>
  )
}