import MyColorPalettes from "../assets/color_palette.json";
import SettingsRemoteOutlinedIcon from '@mui/icons-material/SettingsRemoteOutlined';
import SearchIcon from '@mui/icons-material/Search';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import MicIcon from '@mui/icons-material/Mic';

const ClaimCard = ({title, backgroundColor, content}) => {
  const IconManager = ({title}) => {
    if(title === "電視台")
      return <SettingsRemoteOutlinedIcon style={{"fontSize": "85px", "rotate": "40deg", "color": "white"}}/>
    else if(title === "NCC")
      return <SearchIcon style={{"fontSize": "85px", "rotate": "85deg", "color": "white"}}/>
    else if(title === "民眾")
      return <WavingHandIcon style={{"fontSize": "85px", "rotate": "-5deg", "color": "white"}}/>
    else if(title === "記者")
      return <MicIcon style={{"fontSize": "85px", "rotate": "40deg", "color": "white"}}/>
  } 

  return (
    <div style={{
      "height": "100%", 
      "width": "100%", 
      "display": "flex", 
      "flexDirection": "column", 
      "alignItems": "center", 
      "justifyContent": "center", 
      "backgroundColor": backgroundColor
    }}>
      <div style={{
          "height": "90%", 
          "width": "100%", 
          "display": "flex", 
          "flexDirection": "column", 
          "alignItems": "center",
          "justifyContent": "space-around", 
        }}>
          <h2 style={{"color": "white"}}>{title}</h2>
          <div style={{
            "height": "70%", 
            "width": "80%", 
            "backgroundColor": "white", 
            "borderRadius": "30px", 
            "display": "flex" , 
            "flexDirection": "column", 
            "alignItems": "center", 
            "justifyContent": "start", 
            "whiteSpace": "pre-wrap"
          }}>
            <div style={{"width": "90%", "padding": "20px 0 20px 10px"}}>
            <p>{content}</p></div>

            </div>
          <div style={{"paddingTop": "25px"}}>
            <IconManager title={title}></IconManager>
          </div>
      </div>
    </div>
  )
}

const App = () => (
  <div style={{"height": "100vh", "width": "100%"}} id="Recommendation">
    <div style={{"height": "15%", "width": "100%", "display": "flex" , "alignItems": "center", "justifyContent": "center", "backgroundColor": MyColorPalettes["standard"][0]}}>
      <h1 style={{"margin": 0}}>我們建議</h1>
    </div>
    <div style={{"height": "85%", "width": "100%"}}>
      <div style={{"height": "100%", "width": "100%", "display": "flex", "flexDirection": "row", "justifyContent": "space-between"}}>
          <ClaimCard title="電視台" backgroundColor={"rgba(164, 104, 67, 0.7)"} content="所有聲稱有從投開票所直接報票的電視台，都能夠具體公佈他們一共聘請多少位工讀生或志工，在多少個投開票所（具體數字），以何種方式（每個工讀生負責多少投開票所），留下何種紀錄，來進行他們的報票工作。同時也必須說明，是否有針對報票的原始資料進行「加工」。"></ClaimCard>
          <ClaimCard title="NCC" backgroundColor={"rgba(164, 104, 67, 0.8)"} content={`以可昭社會公信的方式，針對本觀察報告所提出的疑點進行查核。在下一次選舉之前，能事先協商好各台應公布的報票依據事項，避免含混模糊的說法啟人疑竇。

NCC可先尊重電視台的自律機制，在確定自律機制不起作用時，再行介入。`}></ClaimCard>
          <ClaimCard title="記者" backgroundColor={"rgba(164, 104, 67, 0.9)"} content="有心改善台灣新聞環境的媒體及新聞記者，持續關心電視台在選舉報票時的作為，於可疑處進行深入的採訪及報導。"></ClaimCard>
          <ClaimCard title="民眾" backgroundColor={"rgba(164, 104, 67, 1)"} content="有心改善台灣新聞環境的媒體及新聞記者，持續關心電視台在選舉報票時的作為，於可疑處進行深入的採訪及報導。"></ClaimCard>
      </div>
    </div>
  </div>
);
export default App;