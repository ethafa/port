var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight*3, WEBGL);
  canvas.position(0,0);
}

function draw() {

  translate(-windowWidth/2,-(windowHeight*3)/2, 0);
  normalMaterial();
  background(255);
  push();
  translate(mouseX, mouseY, 0);
  rotateZ(mouseX * 0.01);
  rotateX(mouseY * 0.01);
  rotateY(frameCount * 0.01);
  sphere(170);
  pop();



}
