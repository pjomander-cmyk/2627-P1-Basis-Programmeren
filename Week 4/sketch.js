let arrayX = []
let arrayY = []
let arrayG = []
let arraySnelheid = []







function keypressed() {


  if (keycode === 8){
    arrayX = [];
  arrayY = [];
  arrayG = [];
  arraySnelheid = [];
  for (let i = 0; i < 100; i = i + 1) {
    arrayX.push(random(0, 800));
    arrayY.push(random(0, 600));
    arrayG.push(random(20, 70));
    arraySnelheid.push(random(1, 5));
  }
}

function setup() {
  createCanvas(800, 600)





}
function draw() {
  background(0, 128, 128)
  arrayX.push(random(0, 800));
  arrayY.push(random(0, 600));
  arrayG.push(random(20, 70));
  arraySpeed.push(random(1, 5));



  fill(255, 255, 255, 100);
  for (i = 0; i < arrayX.length; i++) {
    arrayY[i] = arrayY[i] - arraySnelheid[i]

    circle(arrayX[i], arrayY[i], arrayG[i]);
    if (arrayY[i] < 0) {
      arrayY[i] = 500;
    }

  }
}

}
