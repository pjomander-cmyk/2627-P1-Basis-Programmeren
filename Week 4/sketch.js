//  de variabelen en arrrays
let kleurenarray = ["red", "blue", "green", "yellow", "purple ", "orange", "0,255,255", "0,0,128", "black"]
//kleurenarray = random(8)
let positiearrayx = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800]
//positiearrayx = random(600)
let positiearrayy = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600,]
//positiearrayy = random(800)
let assignColor = "";
let positieX = "";


// de functies 
function keyPressed() {
  if (keyCode === 8) {
    assignColor = kleurenarray[int((random(0, kleurenarray.length)))];
    console.log("backspace works")
    console.log(int((random(0, kleurenarray.length))));

    positieX = positiearrayx[int((random(0, positiearrayx.length)))];
    console.log(int((random(0, positiearrayx.length))))
    return;
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
  
}


function draw() {
  background(220)

  //logica van de elementen die bewegen nu nog statish later bewegend  

  fill(assignColor)
  square(positieX, 50, 50)

}

