import Fish from "../../assets/Images/swiming-fish.gif";
import PondPic from "../../assets/Images/pond.png";
import "./pond.css";

export default function Pond() {
  return (
    <div id='pondBox'>
      <div id='background'>
        <div id='weather'></div>
        <img id='fish' src={Fish} alt='fish swimming'></img>
      </div>
      <img id='pond' src={PondPic} alt='black and white pond scene'></img>
    </div>
  );
}
