import "../App.css";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/header";
import Pond from "../components/Pond/Pond";
import Sky from "../components/Sky";
import { useEffect, useState } from "react";

export default function Blog() {
  //
  const [imageUrl, setImageUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  );
  //
  useEffect(() => {
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
  const props = [
    {
      title: " My Card",
      Url: imageUrl,
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

  return (
    <>
      <div className='container'>
        <Carousel slideList={props} />
      </div>
    </>
  );
}
