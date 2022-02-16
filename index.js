
var randomNumber1=Math.floor(Math.random()*6)+1;

var arr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

document.querySelectorAll("img")[0].setAttribute("src",arr[randomNumber1-1]);

var randomNumber2=Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[1].setAttribute("src",arr[randomNumber2-1]);

if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 won!!!⚡";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="⚡Player 1 won!!!";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
