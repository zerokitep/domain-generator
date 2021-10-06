/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  function newdomain(website) {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    let pronounAndAdj = [];
    let word = "";
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          word = pronoun[i] + adj[j] + noun[k] + website;
          pronounAndAdj.push(word);
        }
      }
    }
    return pronounAndAdj;
  }

  function displayDomains() {
    let comSites = newdomain(".com");
    let netSites = newdomain(".net");
    let govSites = newdomain(".gov");
    let allSites = comSites.concat(netSites, govSites);

    for (let i = 0; i < allSites.length; i++) {
      document.querySelector("#domain").innerHTML +=
        "<p>" + allSites[i] + "</p>";
    }
  }

  displayDomains();
};
