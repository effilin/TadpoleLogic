"use client";
import "./upperPool.css";
import { useEffect, useState } from "react";

export default function UpperPool() {
  const [colorsPresent, setColors] = useState<boolean>(false);

  useEffect(() => {
    const colorSpots = () => {
      let numSpots = 0;
      const pondColors = [
        "rgb(147, 197, 187) ",
        "rgb(180, 228, 201) ",
        "rgb(124, 149, 167)",
        "rgb(85, 117, 139)",
        "rgb(75, 155, 109) ",
        "rgb(72, 241, 247) ",
        " #5499c7",
        "rgb(41, 167, 167)",
        "rgb(149, 250, 158)",
        "rgb(140, 203, 214) ",
      ];

      while (numSpots <= 1000) {
        const locationX = Math.round(Math.random() * 100);
        const locationY = Math.round(Math.random() * 100);
        const color = Math.floor(Math.random() * 10);
        const spots = document.createElement("div");
        const canvas = document.querySelector("#colorPool");

        spots.classList.add("colors");
        spots.style.setProperty("--index", numSpots);
        spots.style.setProperty("top", `${locationY}%`);
        spots.style.setProperty("left", `${locationX}%`);
        spots.style.setProperty("background-color", `${pondColors[color]}`);
        console.log(`${pondColors[color]}`);
        canvas?.appendChild(spots);
        numSpots++;
      }
    };

    if (colorsPresent) {
      console.log("stars out");
      const parent = document.querySelector("#colorPool");
      const children = document.querySelectorAll(".spots");
      children.forEach((child) => parent.removeChild(child));
      setColors(false);
    } else {
      setColors(true);
      colorSpots();
    }
  }, []);

  return <div id='colorPool'></div>;
}
