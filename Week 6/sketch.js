let honger = 100
let geluk  = 100
let energie = 100
let  gezondheid = 0 




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

function gezondheideffecten (){ 
  if(gezondheid == 0 )  
    fill("black")
    text ("huisdierdood je hebt gefaalt ",100,30) 
  
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
  background(220); 
 

  // de balken die gezondheid etc tonen 
  fill("gray")
  rect(1,1,200,200) 


  if(gezondheid == 0 ) {
    fill("black")
    text ("huisdierdood je hebt gefaalt ",100,30) 
  } 
}
