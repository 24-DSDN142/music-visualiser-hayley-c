let firstRun = true;
let doorArray = new Array (17); // door array
let cloudArray = new Array(6); //cloud array
let oneVinesArray = new Array(2); //oneVines array
let twoVinesArray = new Array(2); //twoVines array
let randomCloud = 0; 
let cloudMove = 0; 
let x = 0;
let flowerBack = []; //back flower array
let flowerFront = []; //front flower array
let cloud = null;
let cloud2 = null;
let rand2 =0;
let doorInterval = 75;
let doorOpening = 7900;

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

    randomCloud = Math.floor(Math.random() * 6);
    cloud = new Cloud();

    // rand2 = Math.floor(Math.random() * 6);
    // cloud2 = new Cloud();

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

  //landscape 2: field
  if(counter > 11045){
  push();
  background(62, 86, 163);
  pop();

  starry(drum);

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
//landscape 1: pond
  else {

    let rayLength = map(bass, 0, 100, 100, 300);
    let rotation = 12;
    push();
    translate (175,175);

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
    circle(175, 175, sunMap);
    

    fill(151, 207, 219);
    ellipse(360, 1125, 1750, 400);

    image(bricks, 0, 0); //inserts bricks in landscape 1
  
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
 
    let vinesMove = int(map(other, 0, 100, 0, 2)); //other map for oneVines 
    push();
    image(oneVinesArray[vinesMove], 0, 0); //inserts oneVines
    pop();

  
  console.log(counter)

    cloud.drawCloud(vocal, cloudArray[randomCloud]);
  // cloud2.drawCloud(vocal, cloudArray[rand2]);

  }
}

  //clouds
  // let cloudX = map(vocal, 0, 100, 0.25, 3); //vocal map for cloud's x position rate of change
  // let cloudY = map(vocal, 0, 100, 0, 75); //vocal map for cloud's y position
  // cloudMove +=cloudX; //moves the cloud horizontally
  // image(cloudArray[randomCloud], -100+cloudMove, 100+cloudY); //inserts moving cloud



  // Define the cloud class

class Cloud {
  #posX = 0;
  #posY = Math.floor(Math.random() * 500);

  constructor(){
        //this.vocal = vocal;
        //this.cloudType = cloudType
    
  }
  drawCloud(vocal, cloudType){
    let cloudX = map(vocal, 0, 100, 0.1, 1.5); //vocal map for cloud's speed
    let cloudY = map(vocal, 0, 100, 0, 75); //vocal map for cloud's y position
    cloudMove += cloudX; //moves the cloud horizontally
    
    image(cloudType, -100+cloudMove, this.#posY + cloudY); //inserts moving cloud
  }
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


  
//draw rays
//let rayLength = map(vocal, 0, 100, 100, 500)
//   push()
  
//   //draw 5 rays
//   translate (270,480)

//     for (let i = 0; i <= 5; i++) {
    
//       rotate(72) 
//       strokeWeight(5)
//       stroke(255, 224, 145)
//       line(0, 0, 0, rayLength)
//   }

//   pop()


//   //draw centre
//   let circleSize = map(drum, 0, 100, 75, 300)

// noStroke()
//   fill(255, 224, 145)
//   circle (270, 480, circleSize)

//   //draw cloud
//   let cloudSize = map(bass, 0, 100, 130, 300)

//   fill(255);
//   ellipse (220, 660, cloudSize, 50);
//   ellipse (170, 700, cloudSize, 80);
//   ellipse (280, 690, cloudSize, 40);
//   ellipse (240, 730, cloudSize, 90);

//   ellipse (320, 260, cloudSize, 50);
//   ellipse (270, 300, cloudSize, 80);
//   ellipse (380, 290, cloudSize, 40);
