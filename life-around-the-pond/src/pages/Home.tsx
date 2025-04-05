import "../App.css";
import Header from "../components/Header/header";
import Pond from "../components/Pond/Pond";
import Sky from "../components/Sky";

export default function Home() {
  return (
    <>
      <Sky>
        <div className='container'>
          <Header />
          <Pond />
        </div>
      </Sky>
    </>
  );
}
