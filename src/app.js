/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { doc } from "prettier";

window.onload = function() {
  //write your code here

  // Lista de arrays de los cuales se van a crear los dominions
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let topLevelDomain = [".net", ".com", ".cr", ".tv", ".io"];

  //variable que recibira los valores de los arrays de opciones
  let domainListNames = [];

  //Ciclo de for loops para cada una de las opciones de nuestros array opciones
  for (let arrayPronoun = 0; arrayPronoun < pronoun.length; arrayPronoun++) {
    for (let arrayAdj = 0; arrayAdj < adj.length; arrayAdj++) {
      for (let arrayNoun = 0; arrayNoun < noun.length; arrayNoun++) {
        for (
          let arrayTopLevelDomain = 0;
          arrayTopLevelDomain < topLevelDomain.length;
          arrayTopLevelDomain++
        ) {
          let domainName =
            pronoun[arrayPronoun] +
            adj[arrayAdj] +
            noun[arrayNoun] +
            topLevelDomain[arrayTopLevelDomain];

          domainListNames.push(domainName);
          console.log(domainListNames);
        }
      }
    }
  }

  let chilNode = document.createElement("li");

  chilNode.innerHTML = domainListNames[domainName];

  document.getElementById("domainList").appendChild(chilNode);
};
