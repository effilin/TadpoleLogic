import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "../reusable/Card/Card";
import "./carousel.css";

interface Art {
  title: string;
  Url: string;
  description: string;
}

export default function Carousel({ slideList }: { slideList: Art[] }) {
  const [slide, setSlide] = useState<number>(0);

  const prevSlide = () => {
    if (slide === 0) {
      setSlide(slideList.length - 1);
    } else {
      setSlide(slide - 1);
    }
    console.log(`prev slide: ${slide}`);
  };

  const nextSlide = () => {
    if (slide === slideList.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
    console.log(`next slide: ${slide}`);
  };

  return (
    <div id='carousel'>
      <ArrowLeftIcon className='arrow' onClick={prevSlide} />
      <div id='cardContainer'>
        {slideList.map((art, index) => {
          if (!!slideList) {
            let position;
            if (slide === index) {
              position = "active";
              console.log(`${slide} is active: index: ${index}`);
            } else if (slide === index - 1) {
              position = "left";
            } else if (slide === index + 1) {
              position = "right";
            } else {
              position = "hidden";
            }
            return (
              <div key={index} className={`slide-div ${position}`}>
                <Card
                  title={art.title}
                  artUrl={art.Url}
                  description={art.description}
                />
              </div>
            );
          } else {
            return <h2> Loading Art...</h2>;
          }
        })}
      </div>
      <ArrowRightIcon className='arrow' onClick={nextSlide} />
    </div>
  );
}
