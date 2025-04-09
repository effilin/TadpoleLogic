import "../App.css";
import Header from "../components/Header/header";
import Pond from "../components/Pond/Pond";
import MyButton from "../components/reusable/Button/Button";
import Card from "../components/reusable/Card/Card";
import Sky from "../components/Sky";

const props = {
  title: " My Card",
  artUrl:
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
  description: "MonaLisa",
};

export default function Home() {
  return (
    <>
      <Sky>
        <div className='containerC'>
          <Header />
          <div className='container'>
            <Pond />
            <div className='container'>
              <Card {...props} />
              <MyButton title='menu' variant='danger' />
            </div>
          </div>
        </div>
      </Sky>
    </>
  );
}
