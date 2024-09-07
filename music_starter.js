let firstRun = true;
let doorArray = new Array (17); // door array
let cloudArray = new Array(6); //cloud array
let oneVinesArray = new Array(2); //oneVines array
let twoVinesArray = new Array(2); //twoVines array
//let randomCloud = 0; 
//let cloudMove = 0; 
let rippleX = 250;
let rippleY = 0;
let gradientMove = 0;
let x = 0;
let flowerBack = []; //back flower array
let flowerFront = []; //front flower array
let doorInterval = 150;
let doorOpening = 7900;
let sunSet = 0;

//cloud classes
let cloud0;
let cloud1;
let cloud2;
let cloud3;
let cloud4;
let cloud5;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(189, 227, 242);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  

  if(firstRun){

    for (let i = 0; i < cloudArray.length; i++){
      cloudArray[i] = loadImage("images/clouds/cloud" + i + ".png");
    }

    for (let i = 0; i < doorArray.length; i++){
      doorArray[i] = loadImage("images/door/door" + i + ".png");
    }

    for (let i = 0; i < oneVinesArray.length; i++){
      oneVinesArray[i] = loadImage("images/door/oneVines" + i + ".png");
    }

    for (let i = 0; i < twoVinesArray.length; i++){
      twoVinesArray[i] = loadImage("images/door/twoVines" + i + ".png");
    }

    //randomCloud = Math.floor(Math.random() * 6);
    cloud0 = new Cloud(-390, 10, cloudArray[0], 1100);
    cloud1 = new Cloud(-270, 125, cloudArray[1], 970);
    cloud2 = new Cloud(-600, 140, cloudArray[2], 1450);
    cloud3 = new Cloud(-400, 290, cloudArray[3], 1700);
    cloud4 = new Cloud(-280, 400, cloudArray[4], 1200);
    cloud5 = new Cloud(-1000, 160, cloudArray[5], 2500);
 
    

    skyGradient = loadImage('images/skyGradient.png'); //loads gradient sky

    bricks = loadImage('images/door/bricks.png'); //loads landscape 1's bricks
    doorScene2 = loadImage('images/door/doorScene2.png'); //loads door for scene 2

    grassBack = loadImage('images/field/grass/grassBack.png'); //loads back grass 
    grassMiddle = loadImage('images/field/grass/grassMiddle.png'); //loads middle grass 
    grassFront = loadImage('images/field/grass/grassFront.png'); //loads front grass 

    flowerBack.push(loadImage('images/field/flowers/flowerBack0.png')); //loads back right flowers
    flowerBack.push(loadImage('images/field/flowers/flowerBack1.png')); //loads back centre flowers 
    flowerBack.push(loadImage('images/field/flowers/flowerBack2.png')); //loads back left flowers
    flowerFront.push(loadImage('images/field/flowers/flowerFront0.png')); //loads front right flowers 
    flowerFront.push(loadImage('images/field/flowers/flowerFront1.png')); //loads front centre flowers
    flowerFront.push(loadImage('images/field/flowers/flowerFront2.png')); //loads front left flowers
    flowerPink = loadImage('images/field/flowers/flowerPink.png'); //loads pink flowers

    firstRun = false;

  }

  cloud0.drawCloud(vocal);
  cloud1.drawCloud(vocal);
  cloud2.drawCloud(vocal);
  cloud3.drawCloud(vocal);
  cloud4.drawCloud(vocal);
  cloud5.drawCloud(vocal);
  
  //landscape 1: pond
  if(counter < 11045){

    if(counter < doorOpening){
      sun(bass, counter, 175, 175);
    }
    else{
      sunSet += 0.1;
      sun(bass, counter, 175, 175 + sunSet);
      push();
      scale(0.5);
      bigStar(other, 720, 1300)
      pop();
    }

    let grassBack_move = map(drum, 0, 100, 0, 18); //drum map for back grass 
    image(grassBack, -200+grassBack_move, -100); //inserts back grass 

    colorMode (RGB, 255, 255, 255);
    let waterChange = map(other, 0, 100, 0, 1);
    let waterLight = color(151, 207, 219);
    let waterDark = color(91, 180, 199);
    let waterBlend = lerpColor(waterLight, waterDark, waterChange)
    fill(waterBlend);
    ellipse(360, 1125, 1750, 400);

    // draws one ripple
        let rippleStroke = map(other, 0, 100, 0, 15); //other map for 
        let rippleWater = map(bass, 0, 100, 0, 0.75) ;
        push();
        ellipseMode(CENTER);
        rippleX = rippleX + 1;
        rippleY = rippleY + 0.3;
        noFill(); //ripple edge
        stroke(255, 255, 255, rippleWater);
        strokeWeight(rippleStroke); //
        ellipse(360, 1005+ rippleY * 0.4, rippleX, 40 + rippleY)

        rippleX = rippleX+1;
        if(rippleX > 1500){ //maximum width of a ripple
          rippleX = 250; //resets x coordinate for new ripple
          rippleY = 0; //resets y coordinate for new ripple
        }

    image(bricks, 0, 0); //inserts bricks in landscape 1

    openDoor(counter); //opens the door

    let vinesMove = int(map(other, 0, 100, 0, 2)); //other map for oneVines 
    push();
    image(oneVinesArray[vinesMove], 0, 0); //inserts vines for landscape 1 (oneVines)
    pop();

  }

//landscape 2: flower field
  else {     
    let gradientY = map(vocal, 0, 100, 0, -320);
    push();
    image(skyGradient, 0, gradientY);
    pop();

    push();
    colorMode (RGB, 255, 255, 255, 1000);
    let auroraBright = map(drum, 0, 100, 10, 600);
    let auroraChange = map(drum, 0, 100, 0, 1);
    let auroraPink = color(214, 112, 230, auroraBright);
    let auroraPurple = color(142, 112, 230, auroraBright);
    let auroraBlend = lerpColor(auroraPink, auroraPurple, auroraChange)
    
    let auroraWidth = map(drum, 0, 100, 0, 30)
    fill(auroraBlend);
    noStroke();

    beginShape();
    vertex(350 - auroraWidth, 0);
    bezierVertex(500 - auroraWidth, 280, 220 - auroraWidth, 320, 310 + auroraWidth, 500);
    vertex(390 - auroraWidth, 500);
    bezierVertex(410  + auroraWidth, 330, 650  + auroraWidth, 350, 690 + auroraWidth, 0);
    endShape();

    beginShape(); //middle aurora
    vertex(375 - auroraWidth, 0);
    bezierVertex(500 - auroraWidth, 280, 210 - auroraWidth, 320, 310 + auroraWidth, 500);
    vertex(390  - auroraWidth, 500);
    bezierVertex(420  + auroraWidth, 330, 650  + auroraWidth, 350, 665 + auroraWidth, 0);
    endShape();

    beginShape();
    vertex(400 - auroraWidth, 0);
    bezierVertex(500 - auroraWidth, 280, 240 - auroraWidth, 320, 310 + auroraWidth, 500);
    vertex(390 - auroraWidth, 500);
    bezierVertex(390  + auroraWidth, 330, 650  + auroraWidth, 350, 640 + auroraWidth, 0);
    endShape();
    pop();
    
    starry(drum); //
    sparkle(drum); //

    push();
    translate(415, 580);
    scale(0.25);
    sun(bass, counter, 0, 0);
    pop();
    
    push();
    scale(1.5);
    bigStar(other, 180, 240);
    pop();
    
    let grassBack_move = map(drum, 0, 100, 0, 25); //drum map for back grass 
    image(grassBack, -200+grassBack_move, -15); //inserts back grass 

    image(doorScene2, 0, 0); //inserts door for scene 2
    let vinesMove = int(map(drum, 0, 100, 0, 2)); //other map for twoVines 
    push();
    image(twoVinesArray[vinesMove], 0, 0); //inserts oneVines
    pop();

    let grassMiddle_move = map(drum, 0, 100, 0, 75); //drum map for middle grass 
    image(grassMiddle, -200+grassMiddle_move, 15); //inserts middle grass 

    let flowerMove = int(map(drum, 0, 100, 0, 3)); //drum map for flowers 
    push();
    image(flowerBack[flowerMove], 0, 0); //inserts back flowers 
    pop();

    let grassFront_move = map(drum, 0, 100, 0, 50); //drum map for front grass 
    image(grassFront, -200+grassFront_move, 0); //inserts front grass 

    let flowerPink_move = map(drum, 0, 100, 0, 15); //drum map for pink flowers 
    image(flowerPink, 0+flowerPink_move, 0+flowerPink_move);
    push();
    image(flowerFront[flowerMove], 0, 0); //inserts pink flowers
    pop();
  }

  }

function openDoor(counter){
  if(counter > doorOpening && counter <= doorOpening + doorInterval){
    image(doorArray[1], 0, 0); 
  }
  else if(counter > doorOpening + doorInterval && counter <= doorOpening + (doorInterval*2)) {
    image(doorArray[2], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*2) && counter <= doorOpening + (doorInterval*3)) {
    image(doorArray[3], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*3) && counter <= doorOpening + (doorInterval*4)) {
    image(doorArray[4], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*4) && counter <= doorOpening + (doorInterval*5)) {
    image(doorArray[5], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*5) && counter <= doorOpening + (doorInterval*6)) {
    image(doorArray[6], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*6) && counter <= doorOpening + (doorInterval*7)) {
    image(doorArray[7], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*7) && counter <= doorOpening + (doorInterval*8)) {
    image(doorArray[8], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*8) && counter <= doorOpening + (doorInterval*9)) {
    image(doorArray[9], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*9) && counter <= doorOpening + (doorInterval*10)) {
    image(doorArray[10], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*10) && counter <= doorOpening + (doorInterval*11)) {
    image(doorArray[11], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*11) && counter <= doorOpening + (doorInterval*12)) {
    image(doorArray[12], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*12) && counter <= doorOpening + (doorInterval*13)) {
    image(doorArray[13], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*13) && counter <= doorOpening + (doorInterval*14)) {
    image(doorArray[14], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*14) && counter <= doorOpening + (doorInterval*15)) {
    image(doorArray[15], 0, 0); 
  }
  else if(counter > doorOpening + (doorInterval*15) && counter <= 11045) {
    image(doorArray[16], 0, 0); 
  }
  else{
    image(doorArray[0], 0, 0);
  }
}

  // Define the cloud class

class Cloud {
  #cloudMove = 0;
  constructor(x, y, cloudType, cloudRestart){
        this.x = x;
        this.y = y;
        this.cloudType = cloudType;
        this.cloudRestart = cloudRestart;
    
  }
  drawCloud(vocal){
    let cloudX = map(vocal, 0, 100, 0.1, 1.5); //vocal map for cloud's speed
    let cloudY = map(vocal, 0, 100, 0, 75); //vocal map for cloud's y position
    this.#cloudMove += cloudX; //moves the cloud horizontally
    
    image(this.cloudType, this.x + this.#cloudMove, this.y + cloudY); //inserts moving cloud

    if(this.#cloudMove > this.cloudRestart) {
      this.#cloudMove = this.x;
    }
} 
}

function bigStar(other, x, y){
    let starSize = map(other, 0, 100, 0, 200)
    push();
    translate(x, y);
    noStroke();
    fill(246, 216, 146);
    beginShape();
    vertex(0, -75 - starSize);
    vertex(10, -5);
    vertex(75 + starSize, 0);
    vertex(10, 10);
    vertex(0, 75 + starSize);
    vertex(-6, 10);
    vertex(-75 - starSize, 0);
    vertex(-5, -5);
    endShape(CLOSE);
    pop();
  }

function sun(bass, counter, x, y){
let rayLength = map(bass, 0, 100, 100, 300);
    let rotation = 12;
    push();
    translate (x, y);

    rotate(counter*0.15);
    for (let i = 0; i <= 30; i++) {
      rotate(rotation);
      colorMode (RGB, 255, 255, 255, 1);
      strokeWeight(10);
      stroke(247, 237, 171, 0.6);
      line(0, 100, 0, rayLength, -10);
    }
    
    pop();

    noStroke();
    let sunMap = map(bass, 0, 100, 125, 250);
    fill(247, 237, 171, 1);
    circle(x, y, sunMap);
  }

function starry(drum){

  let starryBright = map(drum, 0, 100, 0, 10000);

  let starryArray = [
  [640, 80],
  [579, 124],
  [623, 219],
  [124, 149],
  [489, 238],
  [347, 345],
  [504, 373],
  [381, 436],
  [242, 50],
  [64, 380],
  [90, 190],
  [111, 437],
  [50, 112],
  [649, 410],
  [200, 297],
  [456, 93]
  
  ];

  for (let i = 0; i < starryArray.length; i++) {
    
   let x = starryArray[i][0];
    let y = starryArray[i][1];

  push();
  colorMode (RGB, 255, 255, 255, 10000);
  translate(x, y);
  scale(0.15);
  noStroke();
  fill(255, 255, 255, starryBright);
  beginShape();
  vertex(0, -100);
  bezierVertex(0, -50, 50, 0, 50, 0);
  bezierVertex(50, 0, 0, 50, 0, 100);
  bezierVertex(  0, 50, -50, 0, -50, 0);
  bezierVertex(-50, 0, 0,-50, 0,-100);
  endShape();
  pop();
  
 }
}

function sparkle(drum){

    let sparkleBright = map(drum, 0, 100, 0.5, 1);
    let sparkleSize = map(drum, 0, 100, 5, 10);
  
    let sparkleArray = [
    [500, 100],
    [640, 180],
    [590, 240],
    [610, 400],
    [410, 415],
    [685, 50],
    [50, 70],
    [90, 230],
    [130, 350],
    [70, 330],
    [260, 90],
    [175, 280],
    [85, 455],
    [620, 450],
    [570, 30],
    [450, 200],
    [320, 370],
    [460, 270],
    [475, 350],
    [515, 220],
    [100, 130],
    [210, 30],
    [586, 320],
    [610, 300],

    ];
  
    for (let i = 0; i < sparkleArray.length; i++) {
      
      let x = sparkleArray[i][0];
       let y = sparkleArray[i][1];
       
      push();
      colorMode (RGB, 255, 255, 255, 1);
      stroke(255, 255, 255, sparkleBright);
      strokeWeight(sparkleSize)
      point(x, y)
      pop();

    }
  }

  // function gradientSky() {
//   colorMode(HSB, 360, 100, 100);
//   let height = 1280
//   let startColor = color(221, 83, 61);
//   let endColor = color(209, 41, 92);
//   for (let y = 0; y < height ; y += 1) {
//     let amt = map(y, 0, height, 0, 1);
//     let gradColor = lerpColor(startColor, endColor, amt);
//     stroke(gradColor);
//     line(0, y, width, y);
//   }
//   return colorsys.rgb_to_hsv({ r: 255, g: 255, b: 255 })
// }

  //let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);