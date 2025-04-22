"use client";
import "./lowerPool.css";
import { useEffect, useState } from "react";

export default function LowerPool() {
  const [dropsPresent, setDrops] = useState<boolean>(false);
  useEffect(() => {
    function fallEffect() {
      let droplets: number = 0;
      while (droplets < 500) {
        let drops = document.createElement("div");
        let spray = document.createElement("div");
        let drops2 = document.createElement("div");
        let spray2 = document.createElement("div");
        drops.style.setProperty("--index", `${droplets * 0.2}`);
        spray.style.setProperty("--index", `${droplets * 0.2}`);
        drops2.style.setProperty("--index", `${droplets * 0.2}`);
        spray2.style.setProperty("--index", `${droplets * 0.2}`);
        const canvas = document.querySelector("#lower1");
        const locationY1 = Math.floor(Math.random() * (61 - 51 + 1));
        const locationY2 = Math.floor(Math.random() * (90 - 83 + 1));
        drops.classList.add("drops");
        drops2.classList.add("drops2");
        spray.classList.add("spray");
        spray2.classList.add("spray2");
        drops.style.left = `${locationY1 + 51}%`;
        drops2.style.left = `${locationY2 + 85}%`;
        spray.style.left = `${locationY1 + 51}%`;
        spray2.style.left = `${locationY2 + 83}%`;
        canvas?.appendChild(drops);
        canvas?.appendChild(drops2);
        canvas?.appendChild(spray);
        canvas?.appendChild(spray2);
        droplets++;
      }
    }
    if (dropsPresent) {
      const children = document.querySelectorAll(
        ".drops .spray .drops2 .spray2"
      );
      children.forEach((child) => child.remove());
      setDrops(false);
    } else {
      setDrops(true);
      fallEffect();
    }
  }, []);

  return (
    <div id='lowerContainer'>
      <div id='lower1'></div>
    </div>
  );
}
