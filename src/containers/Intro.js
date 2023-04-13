import {Head} from '../style/general.js'

export default function Intro() {
  return (
    <div className="limitContent" id='Intro'>
      <div className="middleArea" style={{"height": "40vh", "paddingTop": "15%"}}>
        <Head>電視台報票觀察行動</Head>
        <div className="leftTextArea" style={{"height": "100%"}}>
          <p>2020年台灣總統大選期間，四個媒體專業組織：台灣事實查核中心、卓越新聞獎基金會、媒體觀察教育基金會及優質新聞發展協會，聯合成立一個17人「2020總統大選電視台報票監看工作小組」，在當天實際監看各家電視台整個報票過程，並作成監看報告。</p>
        </div>
      </div>
    </div>
  );
}