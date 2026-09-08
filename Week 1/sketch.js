
function setup( ) {
  createCanvas(800, 800);
}

function draw() {
  background(0,0,0,0)
  stroke(220) 
  
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

  text('7 mario ' ,20,345)


 push() 
 translate(10,350)
 noStroke();

 let px_size = 10 ; 

 const mario = [
 [0,0,0,1,1,1,1,1,0,0,0,0 ], 
 [0,0,1,1,1,1,1,1,1,1,0,0 ],
 [0,0,2,2,2,2,3,2,3,0,0,0 ],
 [0,2,3,2,3,3,3,2,3,3,3,0 ],
 [0,2,3,2,2,3,3,3,2,3,3,3 ], 
 [0,2,2,3,3,3,3,2,2,2,0,0 ],
 [0,0,0,3,3,3,3,3,3,0,0,0 ],
 [0,0,2,2,1,2,2,2,0,0,0,0 ],
 [0,2,2,2,1,2,2,1,2,2,2,0 ],
 [2,2,2,2,1,1,1,1,2,2,2,2 ],
 [3,3,2,1,3,1,1,3,1,2,3,3 ],
 [3,3,3,1,1,1,1,1,1,3,3,3 ],
 [3,3,1,1,1,1,1,1,1,1,3,3 ],
 [0,0,1,1,1,0,0,1,1,1,0,0 ],
 [0,2,2,2,0,0,0,0,2,2,2,0 ],
 [2,2,2,2,0,0,0,0,2,2,2,2 ],

 
 ] 

 let mario_colours = [
  color(0,0,0,0 ),
  color(255,0,0),
  color(150,75,0),
  color(210,180,140), 
 ]
 for(let y = 0; y < mario.length; y++) {
  for(let x = 0; x < mario[y].length; x++)    {
    fill(mario_colours[mario[y][x]])
    square(x*px_size, y*px_size, px_size);

  }
 } 
 pop()
 
 // dit is belangerijk 

 text ("8",270,20) 
 
 push()
 translate(280,30)
 noStroke(); 

 let = px_size = 10 

 const creeper= [
  //0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 
  [ 0,1,2,3,4,5,6,7],

 ]

 // 0 =A 1=B 2=C 3=D 4=E 5=F 6=G 7=H 8=h 

 let creeper_colours = [ 
  color (154,205,50),
  color (107,142,35),
  color (0,128,0),
  color	(85,107,47) ,
  color  (152,251,152) ,
  color  (34,139,34) ,
  color   ( 0,0,0) ,
 ] 

 for(let y = 0; y < creeper.length; y++) {
  for(let x = 0; x < creeper[y].length; x++)    {
    fill(mario_colours[creeper[y][x]])
    square(x*px_size, y*px_size, px_size);

  }
 } 
 pop()
 
  

}