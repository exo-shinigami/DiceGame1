var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceimage = "dice" + randomNumber1 + ".png";
var randomImagesource = "images/" + randomDiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceimage = "dice" + randomNumber2 + ".png";
var randomImagesource = "images/" + randomDiceimage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImagesource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else  {
    document.querySelector("h1").innerHTML = "Draw!!";
}