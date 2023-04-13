import Template from "./Template";

const data = [
  {
    name: '民視',
    party: '民進黨',
    vote: 675857,
  },
  {
    name: '民視',
    party: '國民黨',
    vote: 507325,
  },
  {
    name: '民視',
    party: '親民黨',
    vote: 49594,
  },
  {
    name: '民視',
    party: '總有效得票數',
    vote: 1232776,
  },
  {
    name: "前 4000 大投票所",
    party: '民進黨',
    vote: 2739824,
  },
  {
    name: "前 4000 大投票所",
    party: '國民黨',
    vote: 1942820,
  },
  {
    name: "前 4000 大投票所",
    party: '親民黨',
    vote: 225844,
  },
  {
    name: "前 4000 大投票所",
    party: '總有效得票數',
    vote: 4576254,
  }
];

export default function FTV() {
  const same_claim = "民視新聞台宣稱有近4000名報票志工，以總票數、蔡英文票數、韓國瑜票數和宋楚瑜票數的前4000大投開票所來相比，民視新聞台報票的數值均少於前4000大，尚在合理範圍。";
  return (
    <Template
      channel="民視"
      data={data}
      peopleConfig={"第一階段3,927名志工，電話回報給計票中心"}
      summary={same_claim}
    ></Template>
  )
}