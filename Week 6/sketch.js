let honger = 100
let geluk  = 100
let energie = 100
let  gezondheid = 0 
let  imggameoverscreen;



// console.log
console.log(honger)
console.log (geluk)
console.log (energie) 
console.log (gezondheid)
// functies 
function  savescore (){
storeItem(honger,100)
storeItem(geluk,100)
storeItem (energie,100) 
storeItem (gezondheid,100) 
} 


function preLoad (){
imggameoverscreen = Loadimage("./asset/OIP.webp") 
}
function gezondheideffecten (){ 
  if(gezondheid == 0 )  
    fill("black")
    text ("huisdier dood je hebt gefaalt ",500,100) 
    image(imggameoverscreen,50,50,50,50 )
  }
function spelen (){


}
function etengeven () {


}
function slapen () {

}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("green"); 
 

  // de balken die gezondheid etc tonen en de waarders ervoor bijhouden
  fill("gray")
  rect(1,1,100,100) 

// acties die gebeuren als de gezondheid 0 is 

  if(gezondheid == 0 ) {
    fill("black")
    text ("huisdierdood je hebt gefaalt",200,100) 
    image(imggameoverscreen,50,50,50,50) 
  } 
}
