let truecounter = 0
let falsecounter = 0
let img; 
let startschermKnop;
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


function preload() {
  img = loadImage("./assets/quize.jpg");
}


function setup() {
  createCanvas(800, 600); 
startschermKnop = createButton('start met de vragen ') 
startschermKnop.positon(300,300) 
startschermKnop.style('font-size','16px') 

}

function draw() {

  background(220);
  
    if (startSchermactief == 1) {
      image(img,1, 1, 800, 600);
   startSchermactief = 0 
   if(startSchermactief == 0) 
     image(img.hide ) 
console.log(startSchermactief) 
    } 
  } 
