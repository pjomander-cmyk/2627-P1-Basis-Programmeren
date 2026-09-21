let muisxvak1 = 0; 
let muisyvak1 = 0 ; 
let muisxvak2 
let muisyvak2 
let muisxvak3
let muisyvak3
let muisxvak4
let muisyvak4
let muisxvak5
let muisyvak5
let muisxvak6 
let muisyvak6
let muisxvak7
let muisyvak7
let muisxvak8
let muisyvak8 
let muisxvak9
let muisyvak9

function setup() { 
  createCanvas(600, 600);
}
function draw() {
  background(0,255,255);

//bordjes van het bord statiche elementen

fill("black") 
square (125,110,350)

fill("255,255,255")
strokeWeight(0)
square(140,130,100 ) 
square(140,235,100 ) 
square(140,340,100 ) 
//2de rij
square(250,130,100 )  
square(250,235,100 ) 
square(250,340,100 )
//3de rij 
square(360,130,100 ) 
square(360,235,100 ) 
square(360,340,100 ) 
// einde van de statishe elementen van het bord


//de meeting van de coordinaten 
fill("black") 
 text("mouseX;"+mouseX,50,50)
 text("mouseY;" + mouseY,50,60) 
 // einde van de meetingcode 
 
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
} 

//clickfuncties 
function mouseClicked() { 
  if(mouseX >140 && mouseX <240 && mouseY >130 && mouseY <230 ){ 
  } 

  } 
