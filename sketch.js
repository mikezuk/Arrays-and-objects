let shapes = []
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(120,30,220);
  textSize (20)
  text ('Drag the mouse while pressing', 150, 50)
  text ('Press key to delete', 150, 100)
  for (let shape1 of shapes) {
    fill(shape1.color)
    // if (shape1.shapeType === 'rect') {
    //   rect(shape1.x , shape1.y, 100, 200,);
    // }
    if (shape1.shapeType == 'circle') {
      noStroke()
      circle(shape1.x, shape1.y, 100);
    }
    if (shape1.shapeType == 'ellipse') {
      noStroke()
      ellipse (shape1.x,shape1.y , 150,30 )
    }
  }
}
function mouseDragged() {
  addAShape ();
  
}

function keyPressed () { 
  shapes.splice (0,1)
}
// function mousePressed() (
//   deleteShape ();
// )
function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['pink', 'red', 'orange', 'yellow', 'purple',]),
    shapeType: random ( [ 'circle', 'ellipse'] )
  }
  // function deleteShape() {
    
  // }
  shapes.push(shape1);

  
}
