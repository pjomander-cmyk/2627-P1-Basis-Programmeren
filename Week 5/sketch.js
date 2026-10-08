let truecounter = 0
let falsecounter = 0
let img; 
let volgendevraag ;
let vorigevraag ; 
let vraagactief = 0; 
let startSchermactief = 1
let vragenArray = ["dit is vraag 0"] 
vragenArray.push["naam van deze tank"]
vragenArray.push["kaliber van dit kanon "] 
vragenArray.push ["bij welke klassen hoort dit voertuig "]
vragenArray.push["uit welk land komt deze tank"]
vragenArray.push["hoe snel kan deze ifv rijden"] 
vragenArray.push ["hoe heet dit geanuleerde voertuig"]
vragenArray.push["waneer ging deze ifv voor het eerst in productie"]
vragenArray.push["wat is de naam voor de meestgebruikete antitank munitie van tanks"] 
vragenArray.push ["uit welke periode komt deze tank"]
vragenArray.push ["hoe heet de antiinfanterie munitie diehet meest door tanks word gebruikt"]

console.log(vragenArray)


 function  functievolgendevraag(){
vraagactief = vraagactief = 1;

vorigevraag.show();

 }

function preload() {
  img = loadImage("./assets/quize.jpg");
}


function setup() {
  createCanvas(800, 600); 
volgendevraag = createButton('start met de vragen ') 
volgendevraag.positon(200,300) 
volgendevraag.style('font-size','16px')  
// 
  vorigevraag = createButton('toon de vorige vraag');
  vorigevraag.position(10, 300);
  vorigevraag.mousePressed(functie_vorige_vraag);

}

function draw() {
  background(220);
  //controleerd welke knoppen actief zijn
    if (vraagactief == 0 )
  {
    vorigevraag.hide();
  }
    if (vraagactief==vragenArray.length-1)
  {
    volgende_vraag.hide();
  }
  text(vragenArray[vraagactief],20,20);
  } 
