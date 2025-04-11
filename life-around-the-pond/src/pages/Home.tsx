import "../App.css";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/header";
import Menu from "../components/Menu/menu";
import Pond from "../components/Pond/Pond";
import MyButton from "../components/reusable/Button/Button";
import Card from "../components/reusable/Card/Card";
import Sky from "../components/Sky";

const props = [
  {
    title: " My Card",
    Url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description: "MonaLisa",
  },
  {
    title: " 2 Card",
    Url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description: "MonaLisa",
  },
  {
    title: " 3 Card",
    Url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description: "MonaLisa",
  },
];

export default function Home() {
  return (
    <>
      <Sky>
        <div className='containerC'>
          <Header />
          <div className='container'>
            <Pond />
            <div className='container'>
              <Carousel slideList={props} />
            </div>
          </div>
        </div>
      </Sky>
    </>
  );
}
