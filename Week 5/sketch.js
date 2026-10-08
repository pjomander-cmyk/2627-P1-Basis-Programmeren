
let truecounter = 0;
let falsecounter = 0;

let img;
let volgendevraag;
let vorigevraag;

let position = 0;
let vraagactief = 0;
let startSchermactief = 1;

let antwoord1;
let antwoord2;
let antwoord3;
let antwoord4;

let vragenArray = ["dit is het startscherm"];

vragenArray.push("naam van deze tank");
vragenArray.push("kaliber van dit kanon");
vragenArray.push("bij welke klassen hoort dit voertuig");
vragenArray.push("uit welk land komt deze tank");
vragenArray.push("hoe snel kan deze IFV rijden");
vragenArray.push("hoe heet dit geannuleerde voertuig");
vragenArray.push("wanneer ging deze IFV voor het eerst in productie");
vragenArray.push("wat is de naam voor de meestgebruikte antitank munitie van tanks");
vragenArray.push("uit welke periode komt deze tank");
vragenArray.push("hoe heet de anti-infanterie munitie die het meest door tanks wordt gebruikt");
vragenArray.push("dit is het eindscherm");


// De 4 antwoorden per vraag
let antwoorden = [

 
[]

  ["M1 Abrams", "Leopard 2", "T-72", "Challenger 2"],

  
  ["105 mm", "120 mm", "125 mm", "90 mm"],


  ["MBT", "IFV", "SPAA", "SPG"],

  
  ["Nederland", "Duitsland", "Verenigde Staten", "Frankrijk"],


  ["40 km/u", "50 km/u", "70 km/u", "90 km/u"],

 
  ["XM8", "M8", "M551", "M60"],


  ["1960", "1970", "1980", "1990"],

 
  ["APFSDS", "HE", "AP", "HEAT"],


  ["Eerste Wereldoorlog", "Tweede Wereldoorlog", "Koude Oorlog", "Moderne tijd"],

  ["HE", "APFSDS", "AP", "HEAT"],


  []
];



let juisteAntwoorden = [0,0,1,1,2,2,0,2,0,2,0,0 ]



function keyPressed() {

  if (keyCode === 8) {
    console.log("Backspace werkt");
  }

}



function functievolgendevraag() {

  if (vraagactief < vragenArray.length - 1) {
    vraagactief = vraagactief + 1;
  }

}



function functievorigevraag() {

  if (vraagactief > 0) {
    vraagactief = vraagactief - 1;
  }

}


function controleerAntwoord(gekozenAntwoord) {

  if (gekozenAntwoord == juisteAntwoorden[vraagactief]) {

    truecounter = truecounter + 1;

    console.log("Goed antwoord!");
    console.log("Juiste antwoorden: " + truecounter);

  } else {

    falsecounter = falsecounter + 1;

    console.log("Fout antwoord!");
    console.log("Onjuiste antwoorden: " + falsecounter);

  }



  if (vraagactief < vragenArray.length - 1) {
    vraagactief = vraagactief + 1;
  }

}


function preload() {

  img = loadImage("./assets/quize.jpg");

}


function setup() {

  createCanvas(800, 600);


  volgendevraag = createButton("volgende vraag");
  volgendevraag.position(5, 400);
  volgendevraag.style("font-size", "16px");
  volgendevraag.mousePressed(functievolgendevraag);




  vorigevraag = createButton("vorige vraag");
  vorigevraag.position(150, 400);
  vorigevraag.style("font-size", "16px");
  vorigevraag.mousePressed(functievorigevraag);



  antwoord1 = createButton("");
  antwoord1.position(100, 250);
  antwoord1.style("font-size", "16px");
  antwoord1.mousePressed(function() {
    controleerAntwoord(0);
  });




  antwoord2 = createButton("");
  antwoord2.position(350, 250);
  antwoord2.style("font-size", "16px");
  antwoord2.mousePressed(function() {
    controleerAntwoord(1);
  });


 

  antwoord3 = createButton("");
  antwoord3.position(100, 320);
  antwoord3.style("font-size", "16px");
  antwoord3.mousePressed(function() {
    controleerAntwoord(2);
  });




  antwoord4 = createButton("");
  antwoord4.position(350, 320);
  antwoord4.style("font-size", "16px");
  antwoord4.mousePressed(function() {
    controleerAntwoord(3);
  });


  

  antwoord1.hide();
  antwoord2.hide();
  antwoord3.hide();
  antwoord4.hide();

  vorigevraag.hide();

}


function draw() {

  background(220);



  textSize(20);
  text(vragenArray[vraagactief], 20, 40);



  if (vraagactief == 0) {

    image(img, 50, 50, 500, 300);

    antwoord1.hide();
    antwoord2.hide();
    antwoord3.hide();
    antwoord4.hide();

    volgendevraag.show();
    vorigevraag.hide();

  }


 

  if (vraagactief > 0 && vraagactief < vragenArray.length - 1) {

    volgendevraag.hide();
    vorigevraag.show();

    antwoord1.show();
    antwoord2.show();
    antwoord3.show();
    antwoord4.show();


   

    antwoord1.html(antwoorden[vraagactief][0]);
    antwoord2.html(antwoorden[vraagactief][1]);
    antwoord3.html(antwoorden[vraagactief][2]);
    antwoord4.html(antwoorden[vraagactief][3]);

  }




  if (vraagactief == vragenArray.length - 1) {

    antwoord1.hide();
    antwoord2.hide();
    antwoord3.hide();
    antwoord4.hide();

    volgendevraag.hide();
    vorigevraag.show();

    textSize(25);
    text("Quiz afgelopen!", 20, 100);

    textSize(20);
    text("Juiste antwoorden: " + truecounter, 20, 150);
    text("Onjuiste antwoorden: " + falsecounter, 20, 190);

  }

}
