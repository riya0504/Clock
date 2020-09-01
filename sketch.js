var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup() {
  createCanvas(800,400);
 
  angleMode(DEGREES);
}

function draw() {
   hr = hour();
   mn = minute();
   sc = second();
  background(0,0,0);  
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  translate(200,200);
  rotate(-90);
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(10);
  line(0,0,75,0);
  stroke(255,0,0);
  noFill();
  arc(0,0,280,280,0,mnAngle);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,150,250);
  strokeWeight(10);
  line(0,0,50,0);
  stroke(255,150,250);
  noFill();
  arc(0,0,240,240,0,hrAngle);
  pop();

  push();
  rotate(scAngle);
  stroke(255,255,0);
  strokeWeight(10);
  line(0,0,90,0);
  stroke(255,255,0);
  noFill();
  arc(0,0,260,260,0,scAngle);
  pop();

  drawSprites();
}