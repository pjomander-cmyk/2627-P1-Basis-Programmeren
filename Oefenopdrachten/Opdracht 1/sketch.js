
let b1
let b2
let b3
let b4
let b5
let b6
let b7
let b8
let b9
let b10
let b11
let b12

let w1 = ""
let w2 = ""
let w3 = ""
let w4 = ""
let w5 = ""

let antwoord = ""

function setup() {
  createCanvas(800, 600);

  // Knoppen beroepsbeeld
  b1 = createButton("Top 3 hardskills");
  b1.position(30, 50);
  b1.mousePressed(vraag1);

  b2 = createButton("Andere technieken");
  b2.position(30, 90);
  b2.mousePressed(vraag2);

  b3 = createButton("Softskills");
  b3.position(30, 130);
  b3.mousePressed(vraag3);

  b4 = createButton("Werkprocessen");
  b4.position(30, 170);
  b4.mousePressed(vraag4);

  b5 = createButton("Wat leer ik nu?");
  b5.position(30, 210);
  b5.mousePressed(vraag5);

  b6 = createButton("Wat kan ik al goed?");
  b6.position(30, 250);
  b6.mousePressed(vraag6);

  b7 = createButton("Wat vind ik lastig?");
  b7.position(30, 290);
  b7.mousePressed(vraag7);

  // Knoppen werkveld
  b8 = createButton("Bedrijven");
  b8.position(30, 370);
  b8.mousePressed(vraag8);

  b9 = createButton("Functie");
  b9.position(30, 410);
  b9.mousePressed(vraag9);

  b10 = createButton("Ontwikkelingen");
  b10.position(30, 450);
  b10.mousePressed(vraag10);

  b11 = createButton("Belangrijke vaardigheden");
  b11.position(30, 490);
  b11.mousePressed(vraag11);

  b12 = createButton("Over vijf jaar");
  b12.position(30, 530);
  b12.mousePressed(vraag12);
}

function draw() {
  background("orange");

  fill("black");
  textSize(24);
  text("Mijn beroepsbeeld en werkveld", 300, 60);

  textSize(18);
  text(antwoord, 300, 120, 450, 400);
}

// Beroepsbeeld

function vraag1() {
  antwoord = "JavaScript om programma's interactief te maken.\n\nHTML en CSS om websites te maken.\n\nBlender voor het maken van objecten.";
}

function vraag2() {
  antwoord = "Python, databases en AI-tools zijn ook handig om te kennen.";
}

function vraag3() {
  antwoord = "Kunnen presenteren, overleggen, samenwerken en problemen oplossen.";
}

function vraag4() {
  antwoord = "Ik moet kunnen programmeren, software testen en fouten oplossen.";
}

function vraag5() {
  antwoord = "Ik leer programmeren met JavaScript en p5.js. Ook leer ik fouten in mijn code oplossen.";
}

function vraag6() {
  antwoord = "Ik kan werken met variabelen, functies en if-statements.";
}

function vraag7() {
  antwoord = "Ik vind het soms lastig om fouten in mijn code te vinden. Ik ga meer oefenen om hier beter in te worden.";
}

// Werkveld

function vraag8() {
  antwoord = "Ik zou graag bij Defensie willen werken. Ik hoor dat de overheid een goede werkgever is en dat het werk leuke uitdagingen biedt.";
}

function vraag9() {
  antwoord = "Ik zou graag softwareontwikkelaar bij Defensie willen worden (iets algemeens, misschien later wat gespecialiseerder).";
}

function vraag10() {
  antwoord = "Ik denk dat AI heel interessant is en steeds belangrijker wordt bij het programmeren.";
}

function vraag11() {
  antwoord = "Ik denk dat het gebruiken en trainen van AI-modellen steeds belangrijker wordt.";
}

function vraag12() {
  antwoord = "Ik denk dat AI veel gaat veranderen. Misschien is er vooral werk voor mensen die goed met AI kunnen werken, of worden sommige dingen juist weer handmatig gedaan. Net zoals toen rekenmachines rekenaars vervingen, maar wiskundigen bleven bestaan.";
}

