import Fish from "../../assets/Images/swiming-fish.gif";
import PondPic from "../../assets/Images/pond.png";
import Fern1 from "../../assets/Images/fern1.png";
import Frog1 from "../../assets/Images/frog1.gif";
import "./pond.css";
import UpperPool from "./UpperPool";

export default function Pond() {
  return (
    <div id='pondBox'>
      <div id='background'>
        <div id='weather'></div>
        <img id='fish' src={Fish} alt='fish swimming'></img>
      </div>
      <img id='pond' src={PondPic} alt='black and white pond scene' />
      <div id='foreground'>
        <div id='topfore'></div>
        <div id='bottomfore'>
          <img id='fern1' src={Fern1} alt='green fern' />
          <div id='waterfall'>
            <UpperPool />
            <div></div>
          </div>
          <div id='bottom-R-F'>
            <div id='shrub1'></div>
            <div></div>
            <img id='frog1' src={Frog1} alt='green frog breathing' />
          </div>
        </div>
      </div>
    </div>
  );
}
