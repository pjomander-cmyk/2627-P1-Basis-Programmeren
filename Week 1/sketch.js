function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup( ) {
  createCanvas(400, 400);
}

function draw() {
  stroke(0)
  
  //maakt lijn dikker of dunner 
  strokeWeight(1) 
  // bepaalt kleur via naam of rgb code 
  fill('red') 
  //zet een tekst neer 
  text("niels renger",10,10,100)  
  // maakt een vierkant 

rect(10,70,100,20);
fill('white')
  rect (10,90,100, 20);
  fill('blue') 
  // maakt een rechthoek
  rect (10,110,100,20);
  fill ('black')
  text ("1" , 4 ,10,900)
  text ("2" , 4 ,70,900) 
  text ("3"  ,2,150,750 ) 

strokeWeight(3)
  fill ('black') 
  square (10,150, 20) 
  square  (50,150,20)
  fill ('white') 
  square ( 30,170,20) 
  square ( 30,150,20 )
  fill ('black') 
  square ( 50,170,20) 
  fill ('white') 
  square ( 10,170,20) 
  fill ('black') 
  square ( 30,170,20) 
  fill ('white')
  square (50,170,20) 
  square ( 30,190,20) 
  fill ('black') 
  square ( 10,190,20) 
  square (50,190,20 ) 
 fill ('black') 

 strokeWeight(1)
  text("4" ,3 ,220,175 ) 
  fill (0,0,0,0)  
  square (20,250,50) 
  //maakt een driehoek
  triangle (20,250,70,250,40,230)

 
  fill ('black')
  text ("5"  ,120  ,10  ,175) 
  fill ('gray') 
  noStroke()
  rect (130,20,50,150);
  fill ('green') 
  square (140,30,30,150) 
  fill ('yellow')
  square (140,70,30,150) 
  fill('red')
  square (140,110,30,150) 
  fill('gray')
  rect( 145,170,20,50) 

stroke(0)
  fill ( "black") 
  text ("6" ,120,220,175) 
  fill ('white ')
  strokeWeight(4)
  square (120,250,70, 10 )
  strokeWeight(1) 
  fill('black') 
  // met vier getalen maakt een circkle 
  square(135,260,10,10)
  square(150,280,10,10)
  square(165,300,10,10) 

  text('7' ,20,345)


 push() 
 translate(10,350)
 noStroke();

 let px_size = 10 ; 

 const mario = [
 [0,1,2,1,0] 
 ] 

 let mario_colours = [
  color(0,0,0,0 ),
  color(255,0,0),
  color(150,75,0),
  color(210,180,140) 
 ]
 for(let y = 0; y < mario.length; y++) {
  for(let x = 0; x < mario[y].length; x++)    {
    fill(mario_colours[mario[y][x]])
    square(x*px_size, y*px_size, px_size);

  }
 } 
 pop()
 
  

  


  

}