let truecounter = 0
let falsecounter = 0
let img;
let volgendevraag;
let position = 0;
let vorigevraag;
let vraagactief = 0;
let startSchermactief = 1
let vragenArray = ["dit is het startscherm"]
vragenArray.push["naam van deze tank"]
vragenArray.push["kaliber van dit kanon "]
vragenArray.push["bij welke klassen hoort dit voertuig "]
vragenArray.push["uit welk land komt deze tank"]
vragenArray.push["hoe snel kan deze ifv rijden"]
vragenArray.push["hoe heet dit geanuleerde voertuig"]
vragenArray.push["waneer ging deze ifv voor het eerst in productie"]
vragenArray.push["wat is de naam voor de meestgebruikete antitank munitie van tanks"]
vragenArray.push["uit welke periode komt deze tank"]
vragenArray.push["hoe heet de antiinfanterie munitie diehet meest door tanks word gebruikt"]
vragenArray.push["dit is het eindscherm"]

console.log(vragenArray)




function functievolgendevraag() {
  vraagactief = vraagactief + 1;

  vorigevraag.show(); 
  
  if (vraagactief < vragenArray.length - 1) {
  vraagactief = vraagactief + 1;
}

}
function functievorigevraag() {
  vraagactief = vraagactief - 1;

  volgendevraag.show();
}

function preload() {
  img = loadImage("./assets/quize.jpg");
}



function setup() {
  createCanvas(800, 600);

  volgendevraag = createButton('start met de vragen');
  volgendevraag.position(5, 400);
  volgendevraag.style('font-size', '16px');
  volgendevraag.mousePressed(functievolgendevraag);

  vorigevraag = createButton('toon de vorige vraag');
  vorigevraag.position(5, 450);
  vorigevraag.style('font-size', '16px');
  vorigevraag.mousePressed(functievorigevraag);

  

}

function draw() {
  background(220);
  //controleerd welke knoppen actief zijn
  if (vraagactief == 0) {
    vorigevraag.hide();
  }
  if (vraagactief == vragenArray.length - 1) {
    volgendevraag.hide();
  }
  text(vragenArray[vraagactief], 20, 20);


  if (vraagactief == 0) {
    image(img, 50, 50, 500, 300);
  }
  if (vraagactief > 0)
    img.hide()


} 
