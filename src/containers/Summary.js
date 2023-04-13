import { Carousel, Space } from 'antd';
import MyColorPalettes from "../assets/color_palette.json";

const Section = ({number, context}) =>(
  <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "Start", "backgroundColor": MyColorPalettes["standard"][2], "border": "2px solid black;"}}>
    <div style={{"height": "60vh", "width": "100%", "display": "flex", "alignItems": "end"}}>
      <Space direction="horizontal" size={[50]} style={{"height": "80%", "width": "95%"}}>
        <div style={{"color": MyColorPalettes["standard"][0], "fontSize": "400px"}}>{number}</div>
        <div><p>{context}</p></div>
      </Space>
    </div>
  </div>
)

const App = () => (
  <div className='limitContent' style={{"marginBottom": "100px"}} id="Summary">
    <h1>總結</h1>
    <div style={{"width": "100%"}}>
      <Carousel autoplay dotPosition="top" style={{"width": "100%"}}>
        <div>
          <Section number={1} context="從監看小組所記錄下來的資料，並沒有確切的證據可以直接指證哪一個電視台進行灌票，但小組仍整理出若干時間點的報票疑點，有待個別電視台進一步釐清。"></Section>
        </div>
        <div>
          <Section number={2} context="監看紀錄可以證實，公廣集團的公視及華視仍是最可靠、而且最有所本的電視台。"></Section>
        </div>
        <div>
          <Section number={3} context="許多商業電視台宣稱他們招募了工讀生到投開票所進行現場報票工作，但是對確實招募多少工讀生，派到多少投開票所，實際作業方式為何，除民視及TVBS有單獨做新聞對觀眾說明外，大多未詳述。"></Section>
        </div>
        <div>
          <Section number={4} context="有9家電視台在16點05分（含）前就已經報出票數，而且總數從2票到643票不等，甚至有16點02分鏡面就已經出現票數。這個速度在各投開票所16點00分才結束投票，而且還必須清場、佈置開票作業場地、擺設桌椅、張貼計票紙，以及整理票匭的情況下實在「難以想像」。不過我們確實也見到有投開票所顯然提前作業，在16點01分就開票的畫面。但即使在極端效率的驅使下，讓電視台完成了「難以想像」的超快工作，這種一個票匭未開完，就先報導的票數，對觀眾、對社會、對台灣的民主政治，究竟有何意義，似乎也有疑問。"></Section>
        </div>
        <div>
          <Section number={5} context="我們發現電視台的數字誤植或數字暴衝，有些觀眾並不理解是電視台之疏失，反而是對選務工作產生質疑。建議電視台若有數字誤植，主播應口頭說明與解釋，同時配上跑馬燈和明顯標示，告知觀眾。"></Section>
        </div>
        <div>
          <Section number={6} context="四個媒體專業組織所進行的，畢竟只是對各電視台報票過程的觀察和紀錄，並且比對其他可供佐證的資料，而非進行調查採訪式的新聞工作，更不是如同具有公權力的主管機關所進行的行政調查，此報告並未接觸電視台內部的報票資料，也沒有對媒體主管、報票中心人員及報票工讀生進行採訪，對於多數電視台是否符合「真實、有所本」的自律要求，也就無法做出確切的結論。"></Section>
        </div>
      </Carousel>
    </div>
  </div>
);
export default App;