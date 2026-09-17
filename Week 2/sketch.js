let positiex = 175;
let boomachtergrondlinks = 120;
let richting = 4;
let boomachtergrondrechts = 580
let debladevoorsteboom = 175
let deblachboomlinksachter = 90;
let debladSboomrechtsachter = 600;
let richting2 = 1;
let timer = 0;
let statusstoplicht = "groen"
let auto1onderkant = 10;
let auto1bovenkant = 25;
let voorwielauto1 = 80;
let globaalesnelheid = 2;
let auto2bovenkant = 365;
let auto2onderkant = 350;
let voorwielauto2 = 360;
let achterwielauto2 = 430;
let richting3 = 2;
let richting4 = 4;
let richting5 = 5
let richting6 = 5
let richting7 = 5
let wolk1 = 30
let wolk2 = 50
let wolk3 = 60
//logica stoplicht en auto snelheid 
function keyPressed() {
  if (key === "Enter") {
    console.log("key is pressed");

    if (statusstoplicht == "groen") {
      statusstoplicht = "oranje";
      return;
    }
    else if (statusstoplicht == "oranje") {
      statusstoplicht = "rood"
      return;
    }
    else if (statusstoplicht == "rood") {
      statusstoplicht = "groen";
      return;
    }

  }
}








function setup() {
  fill("red")


  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235)
  stroke(220)




    // de basis van de bewegenede delen 


    ; //dit zijn de statische elementen 
  // de weg 
  fill('gray')
  rect(1, 425, 800, 500);
  fill('white')
  rect(35, 500, 90, 20, 20)
  rect(200, 500, 90, 20, 20)
  rect(370, 500, 90, 20, 20)
  rect(550, 500, 90, 20, 20)
  rect(700, 500, 90, 20, 20)










  //het stuk groen tussen de weg en de bergen 
  fill("green")
  rect(1, 410, 800, 20)


  // de bergen
  fill(128, 128, 128)
  triangle(50, 410, 190, 410, 120, 290)
  triangle(192, 410, 450, 410, 305, 200)
  triangle(490, 410, 670, 410, 560, 100)


  // de statishe elementen van de boom 
  strokeWeight(0)
  fill('brown')
  rect(178, 500, 20, 390)
  rect(80, 325, 20, 100)
  rect(600, 325, 20, 100)


  // de bewegende elementen van de bomen 
  // de bewegemde elementen van de boom voor de weg
  fill("green")
  circle(positiex, 470, 70, 90, 70)
  positiex = positiex + richting4
  if (positiex > 220) {
    richting4 = -1;
  }
  if (positiex < 170) {
    richting4 = + 1;
  }
  fill(0, 255, 0)
  circle(debladevoorsteboom, 470, 70, 90, 70)
  debladevoorsteboom = debladevoorsteboom + richting5;
  if (debladevoorsteboom > 225) {
    richting5 = -1
  }
  if (debladevoorsteboom < 170) {
    richting5 = + 1;
  }

  // bewegende elementen van de boom links 
  fill("green")
  circle(boomachtergrondlinks, 300, 70, 90, 70)
  boomachtergrondlinks = boomachtergrondlinks + richting3;
  if (boomachtergrondlinks > 130) {
    richting3 = - 1
  }
  if (boomachtergrondlinks < 80) {
    richting3 = + 1
  }

  fill(143, 188, 143)
  circle(deblachboomlinksachter, 300, 70, 90, 70)
  deblachboomlinksachter = deblachboomlinksachter + richting2
  if (deblachboomlinksachter > 120) {
    richting2 = -1;
  }
  if (deblachboomlinksachter < 80) {
    richting2 = +1;
  }





  //bewegende elementen van de rechter boom 
  fill("green")
  circle(boomachtergrondrechts, 320, 70, 90, 70)
  boomachtergrondrechts = boomachtergrondrechts + richting6;
  if (boomachtergrondrechts > 620) {
    richting6 = - 1
  }
  if (boomachtergrondrechts < 605) {
    richting6 = + 1
  }
  fill(152, 251, 152)
  circle(debladSboomrechtsachter, 320, 70, 90, 70)
  debladSboomrechtsachter = debladSboomrechtsachter + richting7;
  if (debladSboomrechtsachter > 620) {
    richting7 = -1
  }
  if (debladSboomrechtsachter < 605) {
    richting7 = + 1
  }

  // einde van bomen bewegende functie 





  // stoplicht statish
  fill('gray')
  rect(690, 325, 20, 140)
  rect(675, 225, 50, 100)
  fill("192,192,192")



  if (statusstoplicht == "groen") {
    fill("green")
    square(685, 293, 30, 30)
    if (statusstoplicht == "groen") globaalesnelheid = 4;
  }
  if (statusstoplicht == "oranje") {
    fill("orange")
    square(685, 262, 30, 30)
    if (statusstoplicht == "oranje") globaalesnelheid = 2;
  }
  if (statusstoplicht == "rood") {
    fill("red")
    square(685, 230, 30, 30)
    if (statusstoplicht == "rood") globaalesnelheid = 0;

  }


  //de auto's  

  //auto 1
  fill("orange")
  rect(auto1bovenkant, 430, 50, 30)
  rect(auto1onderkant, 450, 90, 30)
  fill("black")
  circle(voorwielauto1, 490, 20, 20, 30)
  circle(auto1bovenkant, 490, 20, 20, 30)
  auto1onderkant = auto1onderkant + globaalesnelheid
  auto1bovenkant = auto1bovenkant + globaalesnelheid
  voorwielauto1 = voorwielauto1 + globaalesnelheid
  if (auto1onderkant > 1200) auto1onderkant = -40;
  if (auto1bovenkant > 1200) auto1bovenkant = -40;
  if (voorwielauto1 > 1200) voorwielauto1 = -40;
  // auto 2 
  fill("red")
  rect(auto2bovenkant, 430, 50, 30)
  rect(auto2onderkant, 450, 90, 30)
  fill("black")
  circle(achterwielauto2, 490, 20, 20, 20)
  circle(voorwielauto2, 490, 20, 20, 20)
  auto2bovenkant = auto2bovenkant + globaalesnelheid
  auto2onderkant = auto2onderkant + globaalesnelheid
  achterwielauto2 = achterwielauto2 + globaalesnelheid;
  voorwielauto2 = voorwielauto2 + globaalesnelheid;
  if (auto2bovenkant > 1900) auto2bovenkant = -50;
  if (auto2onderkant > 1900) auto2onderkant = -50;
  if (achterwielauto2 > 1900) achterwielauto2 = -50;
  if (voorwielauto2 > 1900) voorwielauto2 = -50;



  //wolken 
  fill("gray")
  circle(wolk1, 80, 40, 40)
  circle(wolk2, 75, 40, 40)
  circle(wolk3, 80, 40, 40)
  fill("white")
  circle(wolk1, 82, 40, 40)
  circle(wolk2, 77, 40, 40)
  circle(wolk3, 82, 40, 40)
  wolk1 = wolk1 + 1
  wolk2 = wolk2 + 1
  wolk3 = wolk3 + 1
  if (wolk1 > 1000) wolk1 = -100
  if (wolk2 > 1000) wolk2 = -100
  if (wolk3 > 1000) wolk3 = -100

















}