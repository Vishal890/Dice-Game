

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceNumber1  = "dice" + randomNumber1 + ".png"
var randomPath1 = "images/"+ randomDiceNumber1

var img1 = document.querySelectorAll("img")[0]

img1.setAttribute("src",randomPath1);

var randomDiceNumber2 = "dice"+ randomNumber2 +".png";

var randomPath2 = "images/"+randomDiceNumber2;
 
var img2 = document.querySelectorAll("img")[1]

img2.setAttribute("src",randomPath2);


// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML = ("Player 1 wins");

// }else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerHTML = ("Player 2 wins");
// }else{
//     document.querySelector("h1").innerHTML = "Draw Again"
// }

if(randomNumber1>randomNumber2){
    document.getElementById("Heading").innerHTML = ("🚩Player 1 wins");

}else if(randomNumber2>randomNumber1){
    document.getElementById("Heading").innerHTML = "Player 2 wins🚩";
}else{
    document.getElementById("Heading").innerHTML = "🚩Draw🚩"
}