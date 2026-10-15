let honger = 100
let geluk = 100
let energie = 100
let gezondheid = 100
let imggameoverscreen;
let counterh = 0
let counterE 

// console.log
console.log(honger)
console.log(geluk)
console.log(energie)
console.log(gezondheid)
// functies 
function savescore() {
  storeItem(honger, honger)
  storeItem(geluk, geluk) 
  storeItem(energie, energie)
  storeItem(gezondheid, gezondheid) 
}


function preLoad() {
  imggameoverscreen = Loadimage("./asset/OIP.webp")
}
function gezondheideffecten() {
  if (gezondheid == 0)
    fill("black")
  text("huisdier dood je hebt gefaalt ", 500, 100)
  image(imggameoverscreen, 50, 50, 50, 50)
}
function spelen() {


}

function keyPressedreset() {
  if (keyCode === 8 && gezondheid == 0) 
    backSpacePressed = true;
    gezondheid = 100
    energie = 100
    geluk = 100
    honger = 100
    console.log(backSpacePressed)
  }


function etengeven() {


}
function slapen() {

}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("green");


  // de balken die gezondheid etc tonen en de waarders ervoor bijhouden
  fill("gray")
  rect(1, 1, 100, 100)

  // acties die gebeuren als de gezondheid 0 is 

  if (gezondheid == 0) {
    fill("black")
    text("huisdierdood je hebt gefaalt", 200, 100)
    text("druk op backspace om te reseten", 300, 200)
    //image(imggameoverscreen,50,50,50,50) 
  }
  // hier word het honger nivea bijgehouden  doormiddel van een counter 
   counterh = counterh + 1
  if (counterh === 200) {
     honger = honger  - 1;  
  } 
    if(counterh === 200){ 
      counterh = 0 
    } 
    {if(honger< 0) 
      honger = 0 
    }  
    
      console.log(counterh)
    console.log("honger" + honger)
  
} 
  


