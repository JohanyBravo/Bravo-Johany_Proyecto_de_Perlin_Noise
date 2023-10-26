let noiseTime = 0;
let noiseTam = 100;
let noiseTime2 = 0
let noiseTam2 = 200;

function setup() {
  createCanvas(500, 500);
background(0);
}


function draw() {
background(0, 5);
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 10), 0, 1, 0, windowHeight);
  let posX2 = map(noise(noiseTime2), 0, 1, 0, windowHeight);
  let posY2 = map(noise(noiseTime2 + 20), 0, 1, 1, windowWidth);
  // let posXRight = windowWidth - posX;
  noiseTime += 0.009;
  noiseTam += 0.01;
  noiseTime2 += 0.007;
  noiseTam2 += 0.03;
  let r = 200 * noiseTime;
  let g = 150 * noiseTime;
  let b = 0 * noiseTam;
  let r2 = 20 * noiseTime;
  let g2 = 100 * noiseTime;
  let b2 = 20 * noiseTam;
  let tam = map(noise(noiseTam), 0, 1, 50, 5);
  let tam2 = map(noise(noiseTam2), 0, 10, 20, 80);
  
  ellipse(posX, posY, tam + 3);
  noStroke();
  fill(r, g, b);


 ellipse(posX2, posY2, tam2 + 8);
  // noStroke();
  stroke(255);
  

  fill(r2,g2, b2);

  // circle(posX, posY, tam);
  // noStroke();
  // strokeWeight(1);
  
  
  // circle(posXRight, posY, tam + 20);
  // fill(100,random(0,250, 200), 250);
}