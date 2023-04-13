import TTV from "./台視";
import CTI from "./中天";
import CTV from "./中視";
import NextTV from "./壹電視";
import Era from "./年代";
import EBC from "./東森";
import SETN from "./三立";
import FTV from "./民視";
import TVBS from "./TVBS";

export default function ContentManager({channel}){
  if(channel === "台視")
    return (<TTV></TTV>);
  else if(channel === "中天")
    return (<CTI></CTI>);
  else if(channel === "中視")
    return (<CTV></CTV>);
  else if(channel === "壹電視")
    return (<NextTV></NextTV>);
  else if(channel === "年代")
    return (<Era></Era>);
  else if(channel === "東森")
    return (<EBC></EBC>);
  else if(channel === "三立")
    return (<SETN></SETN>);
  else if(channel === "民視")
    return (<FTV></FTV>);
  else if(channel === "TVBS")
    return (<TVBS></TVBS>);
};