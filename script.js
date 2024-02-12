"use strict";

const main = document.querySelector("main");
const li = document.querySelectorAll(".rating");
const button = document.querySelector("button");

const resultDiv = document.querySelector(".result-container");
const finalRating = document.querySelector(".final-rating");

let rating;

li.forEach((item) => {
   item.addEventListener("click", () => {
      rating = item.value;

      li.forEach((otherItem) => {
         otherItem.classList.remove("selected");
      });

      item.classList.add("selected");
   });
});

button.addEventListener("click", () => {
   if (rating) {
      main.classList.add("hidden");
      finalRating.textContent = rating;
      resultDiv.classList.remove("hidden");
   }
});
