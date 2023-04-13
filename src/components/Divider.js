import styled from "styled-components";

function LineDivider() {
  return (
    <div className="lineDivider"> 
    </div>
  );
}

const BDdiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 80%;
`
function Ball({color}){
  const style = {
    "height": "30px", 
    "width": "30px", 
    "borderRadius": "50%", 
    "backgroundColor": color, 
    "color": "white"
  };

  return (
    <div style={style}></div>
  )
}

function BallDivider() {
  return (
    <BDdiv>
      <Ball color="rgb(214, 210, 193)"></Ball>
      <Ball color="rgb(190, 142, 99)"></Ball>
      <Ball color="rgb(164, 104, 67)"></Ball>
      <Ball color="rgb(53, 20, 13)"></Ball>
    </BDdiv>
  );
}

export {LineDivider, BallDivider};