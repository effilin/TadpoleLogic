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
        "rgb(157, 199, 175) ",
        "rgb(124, 149, 167)",
        "rgb(131, 165, 189)",
        "rgb(137, 170, 240) ",
        "rgb(72, 241, 247) ",
        " #5499c7",
        "rgb(41, 167, 167)",
        "rgb(16, 208, 241)",
        "rgb(140, 214, 173) ",
      ];

      while (numSpots <= 1000) {
        const locationX = Math.round(Math.random() * 100);
        const locationY = Math.round(Math.random() * 100);
        const color = Math.floor(Math.random() * 10);
        const spots = document.createElement("div");
        const glimmer = document.createElement("div");
        const canvas = document.querySelector("#colorPool");

        spots.classList.add("colors");
        spots.style.setProperty("--index", `${numSpots}`);
        spots.style.top = `${locationY}%`;
        spots.style.left = `${locationX}%`;
        glimmer.classList.add("glimmer");
        glimmer.style.setProperty("--index", `${numSpots}`);
        glimmer.style.top = `${locationY}%`;
        glimmer.style.left = `${locationX}%`;
        spots.style.setProperty("background-color", `${pondColors[color]}`);
        canvas?.appendChild(spots);
        canvas?.appendChild(glimmer);
        numSpots++;
      }
    };

    if (colorsPresent) {
      const children = document.querySelectorAll(".colors , .glimmer");
      children.forEach((child) => child.remove());
      setColors(false);
    } else {
      setColors(true);
      colorSpots();
    }
  }, []);

  return <div id='colorPool'></div>;
}
