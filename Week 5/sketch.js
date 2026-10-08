let truecounter = 0
let falsecounter = 0
let img;
let volgendevraag;
let position = 0;
let vorigevraag;
let vraagactief = 0;
let startSchermactief = 1
let vragenArray = ["dit is het startscherm"]
vragenArray.push("naam van deze tank")
vragenArray.push("kaliber van dit kanon ")
vragenArray.push("bij welke klassen hoort dit voertuig ")
vragenArray.push("uit welk land komt deze tank")
vragenArray.push("hoe snel kan deze ifv rijden")
vragenArray.push("hoe heet dit geanuleerde voertuig")
vragenArray.push("waneer ging deze ifv voor het eerst in productie")
vragenArray.push("wat is de naam voor de meestgebruikete antitank munitie van tanks")
vragenArray.push("uit welke periode komt deze tank")
vragenArray.push("hoe heet de antiinfanterie munitie diehet meest door tanks word gebruikt")
vragenArray.push("dit is het eindscherm") 

// De 4 antwoorden per vraag
let antwoorden = [

  // startscherm
  [],

  // vraag 1
  ["M1 Abrams", "Leopard 2", "T-72", "Challenger 2"],

  // vraag 2
  ["105 mm", "120 mm", "125 mm", "90 mm"],

  // vraag 3
  ["MBT", "IFV", "SPAA", "SPG"],

  // vraag 4
  ["Nederland", "Duitsland", "Verenigde Staten", "Frankrijk"],

  // vraag 5
  ["40 km/u", "50 km/u", "70 km/u", "90 km/u"],

  // vraag 6
  ["XM8", "M8", "M551", "M60"],

  // vraag 7
  ["1960", "1970", "1980", "1990"],

  // vraag 8
  ["APFSDS", "HE", "AP", "HEAT"],

  // vraag 9
  ["Eerste Wereldoorlog", "Tweede Wereldoorlog", "Koude Oorlog", "Moderne tijd"],

  // vraag 10
  ["HE", "APFSDS", "AP", "HEAT"],

  // eindscherm
] 




console.log(vragenArray) 


function keyPressed() {
  if (keyCode === 8) {
    backSpacePressed = true; 
    console.log(backSpacePressed)
  }
} 



function functievolgendevraag() {
  vraagactief = + 1;


  
  if (vraagactief < vragenArray.length - 1) {
  vraagactief  + 1;
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

  volgendevraag = createButton('volgende vraag');
  volgendevraag.position(5, 400);
  volgendevraag.style('font-size', '16px');
  volgendevraag.mousePressed(functievolgendevraag);
 

  

}

function draw() {
  background(220);
  //controleerd welke knoppen actief zijn
  if (vraagactief == 0) {
    
  }
  if (vraagactief == vragenArray.length - 1) {
   
  }
  text(vragenArray[vraagactief], 20, 20);


  if (vraagactief == 0) {
    image(img, 50, 50, 500, 300);
  }
  



} 
