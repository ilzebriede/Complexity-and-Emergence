function setup() {
  pixelDensity(2.0);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(2);

}

function draw() {

  textSize(100);
  fill(150);
  text('start 8PM', windowWidth/2, windowHeight/2.5);

  textSize(130);
  fill(255);
  text('14 JULY', windowWidth/2.5, windowHeight/2);

  
  let s = 'online audiovisual live performance';
  textSize(15);
  smooth();
  text(s, 150, 120, 200, 500);
  
  textSize(20);
  fill(150);
  text('SOUND', 150, 200);
  
  textSize(20);
  fill(255);
  text('EMORY', 150, 230);
  
  textSize(20);
  text('JAMIE THOMPSON', 150, 250);
  
  textSize(20);
  text('MICHAEL PALUMBO', 150, 270);
  
  textSize(20);
  fill(150);
  text('CARTOMANCY', 150, 320);
  
  textSize(20);
  fill(255);
  text('NEON DREAMER', 150, 350);
  
  textSize(20);
  fill(150);
  text('IMAGE', 150, 400);
  
  textSize(20);
  fill(255);
  text('KAVI', 150, 430);
  
  textSize(30);
  fill(0, 20);
  text('NO EXIT', 23,windowHeight/2);
  
  strokeWeight(0.9);
  fill(255, 10);
  shearY(random(PI) / 0.9);
  circle(0, height / 2, random(300));

  /*
  textSize(30);
  fill(250, 20);
  text('NO EXIT', 23,300);
  */

}
