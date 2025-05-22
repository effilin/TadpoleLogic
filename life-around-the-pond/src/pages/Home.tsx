import "../App.css";
import tadpole from "../assets/Images/tadpole.png";
import Pond from "../components/Pond/Pond";

import Welcome from "../components/welcome/Welcome";

export default function Home() {
  //
  //const [imageUrl, setImageUrl] = useState(
  //  "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  //);
  //
  /* useEffect(() => {
    console.log("fetching image");
    const fetchImage = async () => {
      const publicId = "woodworking_house1";
      try {
        const res = await fetch(
          `http://localhost:5000/api/images?publicId=${encodeURIComponent(
            publicId
          )}`
        );
        console.log(res);
        const data = await res.json();
        console.log(data);
        if (data.imageUrl) {
          setImageUrl(data.url);
        }
      } catch (error) {
        console.error("data not received from server");
      }
    };
    fetchImage();
  }, []);
*/
  return (
    <>
      <div className='container'>
        <Pond />
        <div className='containerLeft'>
          <div className='h1Container'>
            <h1 className='welcomeText'>Life Around the Pond</h1>
            <img className='frogImg' src={tadpole} alt='tadpole logic frog' />
          </div>
          <h4 className='header2'>By Tadpole Logic and Gadget Girl </h4>
          <Welcome />
        </div>
      </div>
    </>
  );
}
