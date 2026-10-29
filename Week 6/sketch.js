let honger = 0
let geluk = 100
let energie = 100
let gezondheid = 100
let cleanlines = 100
let imggameoverscreen;
let counterh = 0
let counterE = 0;
let counterG = 0;
let counterGE = 0;
let spelen
let slapen
let schoonmaken
let counterS = 0
let voeden
let schoonmakenfunctie
let imageachtergrond
let imgcaracterhappy
let imgcaractersick
let imgcaracterdirty
let imgcaractertired
let imgcaractersad

// functies 
function savescore() {
  storeItem("honger", honger)
  storeItem("geluk", geluk)
  storeItem("energie", energie)
  storeItem("gezondheid", gezondheid)
}

function preLoad() {
  imggameoverscreen = Loadimage("./asset/OIP.webp")
  imageachtergrond = Loadimage("./asset/achtergrond kopie.png")
  imgcaracterdirty = Loadimage(",/asset/")
  imgcaracterhappy = Loadimage(",/asset/panda happy 800 x 800.png")
  imgcaractersick = Loadimage(",/asset/rode panda ziek 800 x 800.png")
  imgcaractertired = Loadimage(",/asset/")
  imgcaractersad = Loadimage(",/asset/")

}
function gezondheideffecten() {
  if (gezondheid == 0)
    fill("black")
  text("huisdier dood je hebt gefaalt ", 500, 100)
  image(imggameoverscreen, 50, 50, 50, 50)
}

function functievoeden() {
  honger = honger - 10
  energie = energie + 5

}

function functieSpelen() {
  geluk = geluk + 10;
  energie = energie - 10;


  if (geluk > 100) {
    geluk = 100;
  }


  if (energie < 0) {
    energie = 0;
  }
}
function functieslapen() {
  energie = energie + 100
  honger = hongert + 20
  if (energie > 100) {
    energie = 100;
  }
  if (energie < 0) {
    energie = 0;
  }
  gezondheid = gezondheid + 100
  if (gezondheid > 100) {
    gezondheid = 100
  }

}
function functieschoonmaken() {
  gezondheid = gezondheid + 20
  geluk = geluk - 10
}



function keyPressedreset() {
  if (keyCode == 8) {
    energie = 100
    geluk = 100
    honger = 100
    console.log("resetworks")
  }
}




function setup() {
  createCanvas(800, 800);

  // spelen verhoogt geluk maar verlaagt energie
  spelen = createButton("spelen");
  spelen.position(5, 400);
  spelen.style("font-size", "16px");
  spelen.mousePressed(functieSpelen);


  // slapen verhoogt energie 
  slapen = createButton("slapen")
  slapen.position(5, 500);
  slapen.style("font-size", "16px");
  slapen.mousePressed(functieslapen)

  // voeden verlaagt honger als je te veel geeft krijgt je tamigoshy damage
  voeden = createButton("voeden")
  voeden.position(80, 400)
  voeden.style("font-size", "16px");
  voeden.mousePressed(functievoeden)

  // schoonmaken verhoogt gezondheid maar verlaagt gezonheid 
  schoonmakenfunctie = createButton("schoonmaken")
  schoonmakenfunctie.position(80, 500)
  schoonmakenfunctie.style("font-size", "16px");
  schoonmakenfunctie.mousePressed(functieschoonmaken)


  // de opgeslagen data ophalen
  if (getItem("honger") == null) {
    honger = 0;
  }
  else {
    honger = getItem("honger");
  }

  if (getItem("energie") == null) {
    energie = 100;
  }
  else {
    energie = getItem("energie")
  }

  if (getItem("geluk") == null) {
    geluk = 100;
  }
  else {
    geluk = getItem("geluk")
  }


  if (getItem("gezondheid") == null) {
    gezondheid = 100;
  }
  else {
    geluk = getItem("gezondheid")
  }







}

function draw() {
  background("green");
  savescore();
  fill("gray")
  rect(1, 1, 100, 100)
  fill("red")
  text(gezondheid, 70, 60)
  fill("orange")
  text("honger", 25, 30)
  fill("green")
  text("energie", 25, 40)
  fill("blue")
  text("geluk", 25, 50)
  fill("red")
  text("gezondheid", 9, 60)

  // acties die gebeuren als de gezondheid 0 is 

  if (gezondheid == 0) {
    fill("black")
    text("huisdierdood je hebt gefaalt", 200, 100)
    text("druk op backspace om te reseten", 300, 200)
    //image(imggameoverscreen,50,50,50,50) 
  }
  // hier word het honger nivea bijgehouden  doormiddel van een counter  
  counterh = counterh + 1;
  if (counterh >= 200) {
    counterh = 0;
    honger = honger + 1;
  }

  fill("orange")
  text(honger, 70, 30)


  // hier wordt de gezondheid bijgehouden
  if (honger <= -10) {
    gezondheid = 95
  }
  if (honger > 100) {
    gezondheid = gezondheid - 1
  }
  if (gezondheid < 0) {
    gezondheid = 0
    if (geluk < 50 && energie < 50)
      gezondheid = 60
  }
  if (geluk < 10 && energie < 10) {
    gezondheid = 0
  }
  if (geluk < 50) {
    gezondheid = 75
  }
  if (energie < 20) {
    gezondheid = gezondheid - 1;
  }

  if (gezondheid < 0) {
    gezondheid = 0
  }


  // hier word het energienivea bijgehouden door middel van een counter
  counterE = counterE + 1
  if (counterE === 300) {
    energie = energie - 1;
  }

  if (counterE > 300) {
    counterE = 0
  }
  if (energie < 0) {
    energie = 0
  }
  fill("green")
  text(energie, 70, 40)

  // hier word het geluksnivea bijgehouden door middel van een counter 
  counterG = counterG + 1
  if (counterG === 600) {
    geluk = geluk - 1
  }
  if (geluk < 0) {
    geluk = 0
  }
  if (counterG > 600) {
    counterG = 0
  }
  fill("blue")
  text(geluk, 70, 50)

  // hier word het schoonheidsniveu bijgehouden 
  counterS = counterS + 1
  if (counterS === 400) {
    cleanlines = cleanlines - 1
  }
  if (cleanlines < 0) {
    cleanlines = 0
  }
  if (counterS === 0) {
    counterS = 0
  }
  if (cleanlines === 0) {
    gezondheid = gezondheid - 1
  }
} 