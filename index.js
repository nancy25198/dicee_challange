/* var p1 = Math.round(Math.random() * 5) + 1;
var p2 = Math.round(Math.random() * 5) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + p1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + p2 + ".png");

if (p1 > p2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (p1 < p2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "It's a tie";
} */

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // change the attributes of element ("img" is tag) and to change img src
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Is's tie!!!";
}
