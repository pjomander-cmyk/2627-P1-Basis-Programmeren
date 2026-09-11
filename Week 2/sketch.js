
function setup( ) {
  createCanvas(800, 600);
}

function draw() {
  background(135,206,235 )
  stroke(220) 

    
  
; //dit zijn de statische elementen 
// de weg 
  fill('gray') 
  rect (1,425,800,500);  
  fill('white') 
  rect(35,500,90,20,20)
   rect(200,500,90,20,20)
   rect(370,500,90,20,20)
 rect(550,500,90,20,20)
 rect(700,500,90,20,20)



//het stuk groen tussen de weg en de bergen 
  fill('green')
  rect (1,410,800,15)


// de bergen
  fill(128,128,128)
  triangle(50,410,190,410,120,290)  
  triangle( 192,410,450,410,305,200)
  triangle (490,410,670,410,560,100)  


  // de semisatishe elementen de bomen 
  strokeWeight(0)
  fill('brown') 
  rect(160,520,20,400)
  rect(330,325,20,100 ) 
  rect(490,325,20,100)
  rect(90,325,20,100)
  rect(200,325,20,100)

}