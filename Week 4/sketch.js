//  de variabelen en arrrays
let kleurenarray = ["red", "blue", "green", "yellow", "purple ", "orange", "0,255,255", "0,0,128", "black"]
let positiearrayx = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,]
let positiearrayy = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550,] 
let grootearray  =  [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]

let assignColor = "";
let positieX = "";
let positieY = "" 


// de functies 
function keyPressed() {
  if (keyCode === 8) {
    assignColor = kleurenarray[int((random(0, kleurenarray.length)))];
    console.log("backspace works")
    console.log(int((random(0, kleurenarray.length))));

    positieX = positiearrayx[int((random(0, positiearrayx.length)))];
    console.log(int((random(0, positiearrayx.length))))
   
positieY = positiearrayy [int((random(0,positiearrayy.length)))];
console.log(int((random(0, positiearrayy.length))));
  }
}


function kleurselectie() {
}



function setup() {
  createCanvas(800, 600);
  
    assignColor = kleurenarray[int((random(0, kleurenarray.length)))];
    console.log(assignColor);
  
  
    positieX = positiearrayx[int((random(0, positiearrayx.length)))];
    console.log(positieX);

positieY = positiearrayy [int((random(0,positiearrayy.length)))]
console.log(positieY)
}


function draw() {
  background(0,128,128) 

  //logica van de elementen die bewegen nu nog statish later bewegend  
if(keyCode === 8 ) {
  fill(assignColor)
  square(positieX, positieY, 50)
} 
}

