// de arrays de waardes van arrays worden ingevoerd bij de functie keypressed
let ArrayX1 = [];
let ArrayY1 = [];
let ArrayG1 = [];
let ArrayS1 = [];
let kleurarray1 = ["red", "blue", "green", "yellow", "black", "purple", "orange",]
let ArrayX2 = [];
let ArrayY2 = [];
let ArrayG2 = [];
let ArrayS2 = [];
let kleurarray2 = ["red", "blue", "green", "yellow", "black", "purple", "orange",]

// variabelen waarden is random 
let assignColor1 = "";
let assignColor2 = "";
let timer = 0;

let backSpacePressed = false;

// de functies  hier word doormidel van een ingedrukte toets de waardes voor de draw functie gekozen 
function keyPressed() {
  if (keyCode === 8) {
    backSpacePressed = true;
    ArrayX1 = [];
    ArrayY1 = [];
    ArrayG1 = [];
    ArrayS1 = [];
    for (let i = 0; i < 100; i = i + 1) {
      ArrayX1.push(random(0, 800));
      ArrayY1.push(random(0, 600));
      ArrayG1.push(random(20, 100));
      ArrayS1.push(random(1, 15));
      assignColor1 = kleurarray1[int((random(0, kleurarray1.length)))];
      console.log("backspace works1")
    }
    ArrayX2 = [];
    ArrayY2 = [];
    ArrayG2 = [];
    ArrayS2 = [];
    for (let i = 0; i < 100; i = i + 1) {
      ArrayX2.push(random(0, 800));
      ArrayY2.push(random(0, 600));
      ArrayG2.push(random(1, 100));
      ArrayS2.push(random(1, 10));
      assignColor2 = kleurarray2[int((random(0, kleurarray2.length)))];
      console.log("backspace works2")
    }
  }
}



function setup() {
  createCanvas(800, 600);

}


function draw() {
  background(220)



  // timer functie voor de kleur 
  timer = timer + 1
  console.log(timer)
  if (timer > 50) {
    assignColor1 = kleurarray1[int((random(0, kleurarray1.length)))];
    assignColor2 = kleurarray2[int((random(0, kleurarray2.length)))];
    if (timer > 50)
      timer = 0
  }

  // activeerd de onderstaande code door op backspace te drukken 
  if (backSpacePressed == true) {
    // loopt de onderstaande waarde 
    fill(assignColor1);
    for (i = 0; i < ArrayX1.length; i++) {
      ArrayY1[i] = ArrayY1[i] - ArrayS1[i]

      circle(ArrayX1[i], ArrayY1[i], ArrayG1[i]);
      if (ArrayY1[i] < 0) {
        ArrayY1[i] = 900;
      }
    }

    fill(assignColor2);
    for (i = 0; i < ArrayX2.length; i++) {
      ArrayX2[i] = ArrayX2[i] - ArrayS2[i]

      square(ArrayX2[i], ArrayY2[i], ArrayG2[i]);
      if (ArrayX2[i] < 0) {
        ArrayX2[i] = 900;
      }
    }
  }
} 
