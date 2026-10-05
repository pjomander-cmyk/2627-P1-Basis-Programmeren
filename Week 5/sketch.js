let vraagActief = 0;
let startSchermactief = 0
let  spelersScore = 0 
let eindSchermactief = 0; 
const  vragenArray = ["naam van deze tank","kaliber van het kanon","bij welke klassen hoort dit voertuig","uit welke periode komt deze tank","uit welk land komt deze tank","hoe snel kan deze ifv rijden","hoe heet dit geanuleerde voertuig", "waneer ging deze ifv voor het eerst in productie","wat is de naam voor de meestgebruikete antitank munitie van tanks","hoe heet de antiinfanterie munitie die meestal door tanks word gebruikt "] 
//                           1                       2                           3                                4                                      5                              6                              7                                        8                                                           9                                                                10 
let nubijvraaG = -1; 


let img;

function preload() {
  img = loadImage('assets/quize.png');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220); 

  
    image("img", 10, 10, 100, 100);
}
