let positiex = 175;
let boomachtergrondlinks = 90
let richting = 2
let boomachtergrondrechts = 580
let debladevoorsteboom = 175
let deblachboomlinksachter = 90;
let debladSboomrechtsachter = 600;
let richting2 = 2;
let timer = 0;
let statusstoplicht = "groen"


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
  positiex = positiex + richting;
  if (positiex > 220) {
    richting = -1;
  }
  if (positiex < 174) {
    richting = 1;
  }
  // bewegende elementen van de boom links 
  fill("green")
  circle(boomachtergrondlinks, 300, 70, 90, 70)
  boomachtergrondlinks = boomachtergrondlinks + richting;
  fill(143, 188, 143)
  circle(deblachboomlinksachter, 300, 70, 90, 70)
  deblachboomlinksachter = deblachboomlinksachter + richting2
  if (deblachboomlinksachter > 120) {
    richting2 = -1;
  }
  if (deblachboomlinksachter < 80) {
    richting2 = +1;
  }

  text(deblachboomlinksachter, 50, 50)




  //bewegende elementen van de rechter boom 
  fill("green")
  circle(boomachtergrondrechts, 300, 70, 90, 70)
  boomachtergrondrechts = boomachtergrondrechts + richting;
  if (boomachtergrondrechts > 320)
    fill(152, 251, 152)
  circle(debladSboomrechtsachter, 300, 70, 90, 70)
  debladSboomrechtsachter = debladSboomrechtsachter + richting;
  if (debladSboomrechtsachter > 540) richting2 - 1;
  //de bewegende elementen van de boom op de voorgrond 
  fill("green")
  circle(positiex, 470, 70, 90, 70)
  positiex = positiex + richting;
  if (positiex > 220) {
    richting = -1;
  }
  if (positiex < 174) {
    richting = 1;
  }
  fill(0, 255, 0)
  circle(debladevoorsteboom, 470, 70, 90, 70)
  debladevoorsteboom = debladevoorsteboom + richting;
  if (debladevoorsteboom > 230) {
    richting - 1;
  }
  if (debladevoorsteboom < 172) {
    richting = 1;
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
  }
  if (statusstoplicht == "oranje") {
    fill("orange")
    square(685, 262, 30, 30)
  }
  if (statusstoplicht == "rood") {
    fill("red")
    square(685, 230, 30, 30)
  }


//de auto's 
fill("orange") 
rect(20, 440,50,50)
rect (10,460,70,30)
fill("black") 
circle(20,490,20,20)
circle (65,490,20,20)


}