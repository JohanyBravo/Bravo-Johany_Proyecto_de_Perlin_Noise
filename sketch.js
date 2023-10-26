let noiseTime = 0;
let noiseTam = 200;
let noiseTime2 = 0
let noiseTam2 = 200;
let noiseTime3 = 0
let noiseTam3 = 10;

function setup() {
  createCanvas(500, 500);
background(0);
}


function draw() {
background(0, 5);

  let posX = map(noise(noiseTime), 1, 0, 1, windowWidth);
  let posY = map(noise(noiseTime + 10), 0, 1, 0, windowHeight);
  let posX2 = map(noise(noiseTime2), 0, 1, 0, windowHeight);
  let posY2 = map(noise(noiseTime2 + 20), 0, 1, 1, windowWidth);
  let posX3 = map(noise(noiseTime3), 0, 1, 0, windowWidth);
  let posY3 = map(noise(noiseTime3 + 70), 0, 1, 0, windowHeight +10);
  // let posX4 = map(noise(noiseTime2), 0, 1, 0, windowHeight);
  // let posY4 = map(noise(noiseTime2 + 20), 0, 1, 1, windowWidth);
  // let posXRight = windowWidth - posX;
  noiseTime += 0.03;
  noiseTam += 0.01;
  noiseTime2 += 0.005;
  noiseTam2 += 0.05;
  noiseTime3 += 0.006;
  noiseTam3 += 0.05;

  let r = 200 * noiseTime;
  let g = 150 * noiseTime;
  let b = 0 * noiseTime;
  let r2 = 20 * noiseTime;
  let g2 = 100 * noiseTime;
  let b2 = 200 * noiseTam;
  let r3 = 10 * noiseTime;
  let g3 = 160 * noiseTime;
  let b3 = 0 * noiseTime;
  let tam = map(noise(noiseTam), 0, 1, 10, 5);
  let tam2 = map(noise(noiseTam2), 0, 1, 20, 80);
  let tam3 = map(noise(noiseTam3), 0, 1, 50, 80);

  
  ellipse(posX, posY, tam + 90);
  noStroke();
  fill(r, g, b);


 ellipse(posX2, posY2, tam2 + 70);
  // noStroke();
  // stroke(255);

  fill(r2,g2, b2);

 ellipse(posX3, posY3, tam3 +10,);
  fill(r3, g3, b3);

  // circle(posX, posY, tam);
  // noStroke();
  // strokeWeight(1);
  
  
  // circle(posXRight, posY, tam + 20);
  // fill(100,random(0,250, 200), 250);
}