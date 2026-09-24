let vak1 = 0;
let vak2 = 0;
let vak3 = 0;
let vak4 = 0;
let vak5 = 0;
let vak6 = 0;
let vak7 = 0;
let vak8 = 0;
let vak9 = 0;
let counter = 0
let speler = "speler1"
let winconditie = 0 
let vak1X = 140;
let vak1Y = 130;

let vakSize = 100;


function changePlayer() {
  if (speler == "speler1") {
    speler = "speler2";
    return;
  }
  else if (speler == "speler2") {
    speler = "speler1";
    return;
  }
}

// logica van het inkleuren 
function mouseClicked() {
  if (mouseX > vak1X && mouseX < vak1X + vakSize && mouseY > 130 && mouseY < 230) {
    vak1 = speler;
    changePlayer();
   }

  if (mouseX > 140 && mouseX < 240 && mouseY > 235 && mouseY < 335) {
    vak2 = speler;
    changePlayer();
  }
  if (mouseX > 140 && mouseX < 240 && mouseY > 330 && mouseY < 440) {

    vak3 = speler;
    changePlayer();
  }
  if (mouseX > 250 && mouseX < 350 && mouseY > 130 && mouseY < 230) {
    vak4 = speler;
    changePlayer();
  } 


  if(mouseX > 250 && mouseX < 350 && mouseY > 235 && mouseY < 330) {
    vak5 = speler;
    changePlayer();
  } 

    if(mouseX > 250 && mouseX < 350 && mouseY >340 && mouseY < 435) {
      vak6 = speler;
      changePlayer();
    } 
    if(mouseX > 360 && mouseX < 460 && mouseY >130 && mouseY < 230) {
      vak7 = speler;
      changePlayer();
    } 
    if(mouseX > 360 && mouseX < 460 && mouseY >235 && mouseY < 330) {
      vak8 = speler;
      changePlayer();
    } 
    if(mouseX > 360 && mouseX < 460 && mouseY >340 && mouseY < 435) {
      vak9 = speler;
      changePlayer();
    }  


    if ( vak1 && vak2 && vak3 == player1 ) { 
      winconditie = 1  
    } 
     if ( vak4 && vak5 && vak6 == player1 ) { 
      winconditie = 1  
    } 
      if ( vak7 && vak8 && vak9 == player1 ) { 
      winconditie = 1  
    } 
      if ( vak1 && vak4 && vak7 == player1 ) {  
      winconditie = 1  
    } 
      if ( vak2 && vak5 && vak8 == player1 ) {  
      winconditie = 1  
    } 
 if ( vak3 && vak6 && vak9 == player1 ) {  
      winconditie = 1  
    } 
    if ( vak3 && vak5 && vak7 == player1 ) {  
      winconditie = 1  
    } 
     if ( vak1 && vak5 && vak9 == player1 ) {  
      winconditie = 1  
    } 
  } 

    function setup() {
      createCanvas(600, 600);
    }
    function draw() {
      background(0, 255, 255);

      //bordjes van het bord statiche elementen

      fill("black")
      square(125, 110, 350)

      fill("255,255,255")
      strokeWeight(0)
      square(140, 130, 100)
      square(140, 235, 100)
      square(140, 340, 100)
      //2de rij
      square(250, 130, 100)
      square(250, 235, 100)
      square(250, 340, 100)
      //3de rij 
      square(360, 130, 100)
      square(360, 235, 100)
      square(360, 340, 100)
      // einde van de statishe elementen van het bord








      //cordinaten van de vakjes 
      //vak1 X 140 tot239 y van 130 tot 230
      //vak2 x 140 tot 239 y van 235tot 330
      //vak3 x 140 tot 239 y van 340 tot 440
      //vak4 x 250 tot 350 y van 130 tot 230
      //vak5 x 250 tot 350 y van 235tot 330
      //vak6 x 250 tot 350 y van 340 tot 435
      //vak7 x 360 tot 460 y van 130 tot 230
      //vak8 x 360 tot 460  y van 235 tot 330
      //vaK9x 360 tot 460   y van 340 tot 435  


      // inkleuren 
      if (vak1 == "speler1") { //speler === "speler1" && 
        fill("blue")
        rect(140, 130, 100)
      }
      if (vak1 == "speler2") { //speler === "speler2" && 
        fill("red")
        rect(140, 130, 100)
      }

      if (vak2 == "speler1") {
        fill("blue")
        rect(140, 235, 100)
      }
      if (vak2 == "speler2") {
        fill("red")
        rect(140, 235, 100)
      }
      if (vak3 == "speler1") {
        fill("blue")
        rect(140, 340, 100)
      }
      if (vak3 == "speler2") {
        fill("red")
        rect(140, 440, 100)
      }
      if (vak4 == "speler1") {
        fill("blue")
        rect(250, 130, 100)
      }
      if (vak4 == "speler2") {
        fill("red")
        rect(250, 130, 100)
      }

      if (vak5 == "speler1") {
        fill("blue")
        rect(250, 235, 100)
      }
      if (vak5 == "speler2") {
        fill("red")
        rect(250, 235, 100)
      }
      if (vak6 == "speler1") {
        fill("blue")
        rect(250, 340, 100)
      }
      if (vak6 == "speler2") {
        fill("red")
        rect(250, 340, 100)
      }   
       if (vak7 == "speler1") {
        fill("blue")
        rect(360, 130, 100)
      }
      if (vak7 == "speler2") {
        fill("red")
        rect(360, 130, 100)
      }   
      if (vak8 == "speler1") {
        fill("blue")
        rect(360, 235, 100)
      }
      if (vak8 == "speler2") {
        fill("red")
        rect(360, 235, 100)
      }   
      if (vak9 == "speler1") {
        fill("blue")
        rect(360, 340, 100)
      }
      if (vak9 == "speler2") {
        fill("red")
        rect(360, 340, 100)
      }   
    } 

    