// de arrays
let ArrayX1 = [];
let ArrayY1 = [];
let ArrayG1 = [];
let ArrayS1 = []; 
let kleurarray1 = ["red","blue","green","yellow","black","purple","orange", "0,255,255","O,128,128"] 


// variabelen 
let assignColor1 = ""; 



// de functies
function keyPressed(){
    if (keyCode === 8) {
  ArrayX1 = [];
  ArrayY1= [];
  ArrayG1 = [];
  ArrayS1 = [];
  for (let i = 0; i < 100; i = i + 1) { 
     ArrayX1.push(random(0,800));
    ArrayY1.push(random(0,600));
    ArrayG1.push(random(20,70));
    ArrayS1.push(random(1,5)); 
   assignColor1 = kleurarray1[int((random(0,kleurarray1.length)))];
   console.log("backspace works")  
} 
    } 
  } 
  function setup() {
  createCanvas(800, 600);

  if (keyCode === 8) {
for (let i = 0; i < 100; i = i + 1) 
    ArrayX1.push(random(0,500));
    ArrayY1.push(random(0,500));
    ArrayG1.push(random(20,70));
    ArrayS1.push(random(1,5));
    {
    ArrayY1[i]=ArrayY1[i]-ArrayS1[i]

    circle(ArrayX1[i],ArrayY1[i],ArrayG1[i]);
    if (ArrayY1[i]<0)
    {
      ArrayY1[i] = 500;
    }
  } 
  }

}

  
function draw() {
  background(220);


  if(keyCode === 8){
  
  fill(assignColor1);
  for(i=0;i< ArrayX1.length;i++) 
    {
    ArrayY1[i]=ArrayY1[i]-ArrayS1[i]

    circle(ArrayX1[i],ArrayY1[i],ArrayG1[i]);
    if (ArrayY1[i]<0)
    {
      ArrayY1[i] = 500;
    }
  } 
  }
} 
