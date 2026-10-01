// de arrays
let ArrayX = [];
let ArrayY = [];
let ArrayG = [];
let ArrayS = []; 
let kleurarray1 = ["red","blue","green","yellow","black","purple","orange", "0,255,255","O,128,128"] 


// variabelen 
let assignColor1 = ""; 



// de functies
function keyPressed(){
    if (keyCode === 8) {
  ArrayX = [];
  ArrayY = [];
  ArrayG = [];
  ArrayS= [];
  for (let i = 0; i < 100; i = i + 1) { 
     ArrayX.push(random(0,800));
    ArrayY.push(random(0,600));
    ArrayG.push(random(20,70));
    ArrayS.push(random(1,5)); 
   assignColor1 = kleurarray1[int((random(0,kleurarray1.length)))];
   console.log("backspace works")  
} 
    } 
  } 
  function setup() {
  createCanvas(800, 600);

  if (keyCode === 8) {
for (let i = 0; i < 100; i = i + 1) 
    ArrayX.push(random(0,500));
    ArrayY.push(random(0,500));
    ArrayG.push(random(20,70));
    ArrayS.push(random(1,5));
    {
    ArrayY[i]=ArrayY[i]-ArrayS[i]

    circle(ArrayX[i],ArrayY[i],ArrayG[i]);
    if (ArrayY[i]<0)
    {
      ArrayY[i] = 500;
    }
  } 
  }

}

  
function draw() {
  background(220);


  if(keyCode === 8){
  
  fill(assignColor1);
  for(i=0;i< ArrayX.length;i++) 
    {
    ArrayY[i]=ArrayY[i]-ArrayS[i]

    circle(ArrayX[i],ArrayY[i],ArrayG[i]);
    if (ArrayY[i]<0)
    {
      ArrayY[i] = 500;
    }
  } 
  }
} 
