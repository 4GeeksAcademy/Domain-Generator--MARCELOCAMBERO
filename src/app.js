/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let color = ["red", "blue"];

let container = document.getElementById("domain");
let domainList = "";

for (let p = 0; p < pronoun.length; p++) {
  for (let c = 0; c < color.length; c++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let domainName = pronoun[p] + color[c] + adj[a] + noun[n];

        domainList += domainName + ".com" + "<br>";
      }
    }
  }
}

container.innerHTML = domainList;
