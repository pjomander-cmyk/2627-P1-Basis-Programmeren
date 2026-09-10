
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



//het stuk groen tussen de weg en de bergen 
  fill('green')
  rect (1,410,800,15)  


// de bergen
  fill(128,128,128)
  triangle(50,410,190,410,120,290)  
  triangle( 192,410,450,410,305,200)
  triangle (490,410,670,410,560,100)


}