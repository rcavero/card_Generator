/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const cardNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const cardFigures = ["♦", "♥", "♠", "♣"];
  const randFig = () => {
    return cardFigures[Math.floor(Math.random() * 4)];
  };
  const randNum = () => {
    return cardNumbers[Math.floor(Math.random() * 13)];
  };
  //Seleccionamos el elemento central y le damos un número aleatorio
  let figure = document.querySelector(".figure");
  figure.textContent = randNum();
  //Seleccionamos todos los iconos y les damos un valor aleatorio
  let icon = document.querySelectorAll(".icon");
  let a = randFig();
  icon[0].textContent = a;
  icon[1].textContent = a;
  //Cambiamos el color si son corazones o rombos
  if (a === "♦" || a === "♥") {
    let changeColor = document.querySelectorAll(".icon");
    changeColor[0].style.color = "red";
    changeColor[1].style.color = "red";
  }
};
