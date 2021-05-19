function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate(-90)
  hr=hour()
  min=minute()
  sec=second()
  hrAngle=map(hr%12,0,12,0,360)
  minAngle=map(min,0,60,0,360)
  secAngle=map(sec,0,60,0,360)
  push()
  rotate(secAngle)
  stroke(0,255,0)
  strokeWeight(6)
  line(0,0,100,0)
  pop()

  push()
  rotate(minAngle)
  stroke(255,0,0)
  strokeWeight(6)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(6)
  line(0,0,50,0)
  pop()
  strokeWeight(9)
  noFill()
  stroke(0,255,0)
  arc(0,0,300,300,0,secAngle)

  stroke(255,0,0)
  arc(0,0,280,280,0,minAngle)

  stroke(0,0,255)
  arc(0,0,260,260,0,hrAngle)
}