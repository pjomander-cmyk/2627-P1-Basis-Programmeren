//  de variabelen en arrrays
let  kleurenarray = ["red","blue","green","yellow","black","purple ", "orange","0,255,255", "0,0,128"]
kleurenarray = random(8)
let positiearrayx = [50,100,150,200,250,300,350,400,450,500,550,600]
positiearrayx = random(600)  
let positiearrayy = [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800] 
positiearrayy = random(800) 



// de functies 
function keyPressed (){ 
  if(keyCode === 8 ){ 
    console.log("backspace works") 
  } 
  } 
function kleurselectie (){ 
} 

function setup() {
  createCanvas(800, 600); 

  
}

function draw() {
  background( 200 ) 

//logica van de elementen die bewegen nu nog statish later bewegend  

if(keyCode === 8){
fill(random(kleurenarray ) ) 
square (100,50,50)   
}  
 
 


}
