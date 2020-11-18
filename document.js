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
  
  }
