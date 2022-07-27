var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "img " + randomNumber1 + ".png";
var diceImageFolder1 = "imgbase/" + diceImage1;

var image1 = document.querySelector(".player1");

image1.setAttribute("src", diceImageFolder1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "img " + randomNumber2 + ".png";
var diceImageFolder2 = "imgbase/" + diceImage2;

var image2 = document.querySelector(".player2");

image2.setAttribute("src", diceImageFolder2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🔥 Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🔥"
} else {
    document.querySelector("h1").innerHTML = "⭐ Draw! ⭐"
};

const refreshButton = document.querySelector(".btn1");

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener("click", refreshPage);