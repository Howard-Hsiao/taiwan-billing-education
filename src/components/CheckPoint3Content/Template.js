import AnalysisBarChart from "../AnalysisBarChart";
import styled from "styled-components";
import { Button, Space, Popover } from "antd";
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MyColorPalettes from "../../assets/color_palette.json";
import KMT1640 from "../../assets/data/KMT1640.json";
import { useState } from "react";

const RoundDiv = styled.div`
  height: 120px;
  width: 120px;
  background-color: ${MyColorPalettes["standard"][0]};
  border-radius: 50%;
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Comment = styled.p`
  color: ${MyColorPalettes["standard"][1]};
  font-size: 14px;
  line-height: 0;
  text-align: center;
`

function SummaryDiv({summary}){
  if(!summary)
    return null;
  
  return (
    <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center"}}>
      <div style={{
        "width": "80%", 
        "display": "flex", 
        "flexDirection": "column", 
        "alignItems": "center", 
        "backgroundColor": MyColorPalettes["standard"][0]
      }}>
        <p style={{"padding": "0 30px"}}>{summary}</p>
      </div>
    </div>
  )
}

function decreaseKMT(data){
  const newData = data.map((subData)=>{
    if(subData["name"] !== "前 500 大投票所" && 
       subData["name"] !== "前 1000 大投票所" && 
       subData["name"] !== "前 2000 大投票所" && 
       subData["name"] !== "前 4000 大投票所" && 
       subData["name"] !== "前 5000 大投票所"){
      return {...subData};
    }

    const  newSubData = {
      name: subData["name"],
      party: subData["party"],
      vote: subData["vote"] - KMT1640[subData["party"]]
    }
    return newSubData;
  });

  return newData;
}

export default function Template({channel, data, peopleConfig, rawDataContent, KMTdecreDataContent, summary, peopleIcon="group"}) {
  const [decreKMT, setDecreKMT] = useState(false);
  var hasMostVitalVotingHouse = false;
  for(let i = 0; i < data.length; i++){
    if(data[i]["name"] === "前 500 大投票所" || 
      data[i]["name"] === "前 1000 大投票所" || 
      data[i]["name"] === "前 2000 大投票所" || 
      data[i]["name"] === "前 4000 大投票所" || 
      data[i]["name"] === "前 5000 大投票所"){
        hasMostVitalVotingHouse = true;
        break;
    }
  }

  const iconStyle = {"color": MyColorPalettes["standard"][3], "fontSize": "70px"};
  var _peopleIcon = null;
  if(peopleIcon === "group")
    _peopleIcon = (<GroupsIcon style={iconStyle}/>)
  else if(peopleIcon === "question")
    _peopleIcon = (<QuestionMarkIcon style={iconStyle}/>)

  return (
    <>
      {hasMostVitalVotingHouse? (<Space direction="horizontal">
        <Button type="primary"
          style={{
            "backgroundColor": MyColorPalettes["standard"][3], 
            "fontSize": "14px", "width": "8em"}} onClick={()=> {
            setDecreKMT(false);
        }}>原始票數</Button>

        <Button type="primary"
          style={{
            "backgroundColor": MyColorPalettes["standard"][1], 
            "fontSize": "14px", "width": "8em"}} onClick={()=> {
            setDecreKMT(true);
        }}>扣除國民黨票數</Button>
      </Space>): false}
      
      <h2 style={{"color": MyColorPalettes["standard"][3]}}>{channel + "報票資料" + (decreKMT? " (扣除國民黨票數)": "")}</h2>
      <div style={{"height": "30vh", "width": "100%", "display": "flex", "justifyContent": "space-around", "alignItems": "center"}}>
        <AnalysisBarChart data={decreKMT? decreaseKMT(data): data} style={{"height": "30vh", "width": "70%", "padding": "20px"}}></AnalysisBarChart>
        <Popover content={<p>{peopleConfig}</p>} title="人力配置" trigger="hover">
          <RoundDiv>
            {_peopleIcon}
            <p style={{"lineHeight": 0, "fontSize": "14px", "color": MyColorPalettes["standard"][3]}}>人力配置</p>
          </RoundDiv>
        </Popover>
      </div>
      <Comment>2020 總統大選全台投開票所總數為 17226</Comment>
      <p>{
        (!decreKMT? rawDataContent: KMTdecreDataContent)
      }
      </p>
      <SummaryDiv summary={summary}></SummaryDiv>
    </>
  );
}