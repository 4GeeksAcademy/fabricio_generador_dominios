/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronouns = ["the", "our", "your", "my", "his", "her", "their"];
  let adjs = [
    "great",
    "big",
    "small",
    "colorful",
    "brilliant",
    "vibrant",
    "majestic"
  ];
  let nouns = [
    "jogger",
    "racoon",
    "mountain",
    "river",
    "ocean",
    "forest",
    "valley"
  ];
  let domains = [".com", ".net", ".org", ".io", ".tech", ".co", ".edu"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          console.log(`${pronoun}${adj}${noun}${domain}`);
        }
      }
    }
  }
};
