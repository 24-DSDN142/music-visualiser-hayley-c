let firstRun = true; //loading items
let doorArray = new Array (17); //door array
let cloudArray = new Array(6); //cloud array
let oneVinesArray = new Array(2); //oneVines array
let twoVinesArray = new Array(2); //twoVines array
let flowerBackArray = new Array(2); //back flower array
let flowerFrontArray = new Array(2); //front flower array
let rippleX = 250; //ripple's starting width
let rippleY = 0; //offset ripple's y coordinate & height
let gradientMove = 0; //declaring gradient's move
let flowerBack = []; //back flower array
let flowerFront = []; //front flower array
let doorInterval = 75; //interval (counter) between door changes
let doorOpening = 7900; //door's start opening time (counter)
let sunSet = 0; //declaring sun's setting 
let darkenSky = 0; //declaring sky's darkening

//declaring clouds
let cloud0; //declaring cloud0
let cloud1; //declaring cloud1
let cloud2; //declaring cloud2
let cloud3; //declaring cloud3
let cloud4; //declaring cloud4
let cloud5; //declaring cloud5

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(189, 227, 242); //light blue sky
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  if(firstRun){

    for (let i = 0; i < cloudArray.length; i++){
      cloudArray[i] = loadImage("images/clouds/cloud" + i + ".png"); //loads clouds into an array
    }

    for (let i = 0; i < doorArray.length; i++){
      doorArray[i] = loadImage("images/door/door" + i + ".png"); //loads doors into an array
    }

    for (let i = 0; i < oneVinesArray.length; i++){
      oneVinesArray[i] = loadImage("images/door/oneVines" + i + ".png"); //loads landscape 1's vines (oneVines) into an array 
    }

    for (let i = 0; i < twoVinesArray.length; i++){
      twoVinesArray[i] = loadImage("images/door/twoVines" + i + ".png"); //loads landscape 2's vines (twoVines) into an array
    }

    for (let i = 0; i < flowerBackArray.length; i++){
      flowerBackArray[i] = loadImage("images/field/flowers/flowerBack" + i + ".png"); //loads back flowers into an array
    }

    for (let i = 0; i < flowerFrontArray.length; i++){
      flowerFrontArray[i] = loadImage("images/field/flowers/flowerFront" + i + ".png"); //loads front flowers into an array
    }

    cloud0 = new Cloud(-450, 10, cloudArray[0], 1.25, 100, 1170); //assigning cloud variables to cloud0
    cloud1 = new Cloud(-270, 125, cloudArray[1], 1.75, 130, 970); //assigning cloud variables to cloud1
    cloud2 = new Cloud(-600, 140, cloudArray[2], 2, 175, 1450); //assigning cloud variables to cloud2
    cloud3 = new Cloud(-400, 290, cloudArray[3], 2.5, 225, 1700); //assigning cloud variables to cloud3
    cloud4 = new Cloud(-280, 400, cloudArray[4], 1.50, 150, 1200); //assigning cloud variables to cloud4
    cloud5 = new Cloud(-1000, 160, cloudArray[5], 1.1, 75, 2500); //assigning cloud variables to cloud5
 
    darkenGradient = loadImage('images/darkenGradient.png'); //loads darken gradient
    skyGradient = loadImage('images/skyGradient.png'); //loads sky gradient

    portal1 = loadImage('images/portal1.png'); //loads portal of landscape 1
    portal2 = loadImage('images/portal2.png'); //loads portal of landscape 2

    bricks = loadImage('images/door/bricks.png'); //loads landscape 1's bricks
    doorScene2 = loadImage('images/door/doorScene2.png'); //loads door for scene 2

    grassBack = loadImage('images/field/grass/grassBack.png'); //loads back grass 
    grassMiddle = loadImage('images/field/grass/grassMiddle.png'); //loads middle grass 
    grassFront = loadImage('images/field/grass/grassFront.png'); //loads front grass 

    // flowerBack.push(loadImage('images/field/flowers/flowerBack0.png')); //loads back right flowers
    // flowerBack.push(loadImage('images/field/flowers/flowerBack1.png')); //loads back centre flowers 
    // flowerBack.push(loadImage('images/field/flowers/flowerBack2.png')); //loads back left flowers
    // flowerFront.push(loadImage('images/field/flowers/flowerFront0.png')); //loads front right flowers 
    // flowerFront.push(loadImage('images/field/flowers/flowerFront1.png')); //loads front centre flowers
    // flowerFront.push(loadImage('images/field/flowers/flowerFront2.png')); //loads front left flowers
    flowerPink = loadImage('images/field/flowers/flowerPink.png'); //loads pink flowers

    firstRun = false;
  }

  //reinitializing variables
  if(firstRun == false && counter == 0){
     rippleX = 250; //reinitializing rippleX
     rippleY = 0; //reinitializing ripple
     gradientMove = 0; //reinitializing gradientMove
     doorInterval = 75; //reinitializing doorInterval
     doorOpening = 7900; //reinitializing doorOpening
     sunSet = 0; //reinitializing sunSet
     darkenSky = 0; //reinitializing darkenSky
  }
  
  //landscape 1: pond
  if(counter < 11045){ //timing for landscape 1: pond

    if(counter < doorOpening){ //only before door starts opening
      let gradientY = map(other, 0, 100, 0, -300); //other map for gradient's y coordinate
      push();
      image(darkenGradient, 0, -550 + gradientY); //draws sky gradient
      pop();
      sun(bass, counter, 175, 175); //draws stationary sun
      console.log(other)
    }
    else{ //only after door starts opening
      darkenSky += 0.1; //sun's setting speed
      image(darkenGradient, 0, -733 + darkenSky); //draws darken gradient

      sunSet += 0.25; //sun's setting speed
      sun(bass, counter, 175, 175 + sunSet); //draws setting sun
    }

    let grassBack_move = map(other, 0, 100, 0, 18); //drum map for back grass 
    image(grassBack, -200+grassBack_move, -100); //inserts back grass 

    pondRipple(vocal, other);

    if(counter > doorOpening){//open portal to landscape 2
      push();
      imageMode(CENTER); //x, y for door's centre
      translate(360, 755); //translates to door's centre
      scale(0.4, 0.46); //scales portal to door's size
      image(portal2, 0, 0); //draws portal to landscape 2
      pop();

      push();
      translate(345, 615); //star's centre at (330, 600)
      scale(0.3); //scales down star to 0.35
      star(drum, other); //draws star
      pop();
    }

    image(bricks, 0, 0); //draws bricks

    openDoor(counter); //opens the door

    let vinesMove = int(map(drum, 0, 100, 0, 2)); //other map for oneVines 
    push();
    image(oneVinesArray[vinesMove], 0, 0); //draws vines for landscape 1 (oneVines)
    pop();

    cloud0.drawCloud(vocal); //draws cloud 0
    cloud1.drawCloud(vocal); //draws cloud 1
    cloud2.drawCloud(vocal); //draws cloud 2
    cloud3.drawCloud(vocal); //draws cloud 3
    cloud4.drawCloud(vocal); //draws cloud 4
    cloud5.drawCloud(vocal); //draws cloud 5
  }

//landscape 2: flower field
  else { //changes to landscape 2: flower field
    let gradientY = map(other, 0, 100, 0, -320); //vocal map for gradient's y coordinate
    image(skyGradient, 0, gradientY); //draws sky gradient

    push();
    imageMode(CENTER); //x, y for door's centre
    translate(360, 755); //translates to door's centre
    scale(0.4, 0.46); //scales portal to door's size
    image(portal1, 0, 0); //draws portal to landscape 1
    pop();

    aurora(vocal); //draws aurora
    
    starry(drum); //draws starry sky
    sparkle(drum); //draws sparkling sky

    push();
    translate(415, 580); //
    scale(0.25); //scales down sun to 0.25
    sun(bass, counter, 0, 0);// draws sun
    pop();

    push();
    translate(170, 425); //star's centre at (160, 350)
    star(drum, other); //draws star
    pop();
  
    flowerField(bass, drum, other); //draws flower field & door 
  }

  }
//opening door function
function openDoor(counter){ //opens the door
  if(counter > doorOpening && counter <= doorOpening + doorInterval){ //door opens when conuter is 7900 and closes when 11045
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

//define the cloud class
class Cloud {
  #cloudMove = 0;
  constructor(x, y, cloudType, cloudMapX, cloudMapY, cloudRestart){
        this.x = x; //cloud's starting x coordinate
        this.y = y; //cloud's starting y coordinate
        this.cloudType = cloudType; //cloud's shape
        this.cloudMapX = cloudMapX; //cloud's speed map
        this.cloudMapY = cloudMapY; //cloud's y position map
        this.cloudRestart = cloudRestart; //cloud's maximum x coordinate
    
  }
  drawCloud(vocal){
    
    let cloudX = map(vocal, 0, 100, 0.1, this.cloudMapX); //vocal map for cloud's speed
    let cloudY = map(vocal, 0, 100, 0, this.cloudMapY); //vocal map for cloud's y position
    this.#cloudMove += cloudX; //moves the cloud horizontally
    
    image(this.cloudType, this.x + this.#cloudMove, this.y + cloudY); //draws moving cloud

    if(this.#cloudMove > this.cloudRestart) {
      this.#cloudMove = this.x; //cloud restarts to it's starting x coordinate
    }
} 
}

//sun function
function sun(bass, counter, x, y){
  let rayLength = map(bass, 0, 100, 100, 300); //bass map for sun's ray length
  let rotation = 12; //number of rays
  push();
  translate (x, y); //sun ray's centre
  rotate(counter*0.15); //spinning sun ray's speed
  for (let i = 0; i <= 30; i++) {
    rotate(rotation); //evenly space 12 sun rays
    colorMode (RGB, 255, 255, 255, 1); //RGB colour mode & transpaency
    strokeWeight(10); //sun ray's line weight
    stroke(247, 237, 171, 0.6); //yellow sun rays & transparency
    line(0, 100, 0, rayLength, -10); //draws sun ray
  }
  pop();

  noStroke(); //no outline
  let sunMap = map(bass, 0, 100, 125, 250); //bass map for sun's centre size
  fill(247, 237, 171, 1); //yellow sun
  circle(x, y, sunMap); //draws sun's centre
  }

function pondRipple(vocal, other){
  colorMode (RGB, 255, 255, 255); //RBG colour mode
  let waterChange = map(other, 0, 100, 0, 1); //other map for water's colour change
  let waterLight = color(151, 207, 219); //light turquiose water
  let waterDark = color(91, 180, 199); //dark turquiose water
  let waterBlend = lerpColor(waterLight, waterDark, waterChange) //blending light & dark turquiose water
  fill(waterBlend); //blended light & dark turquiose water
  ellipse(360, 1125, 1750, 400); //draws pond
  
  let rippleStroke = map(vocal, 0, 100, 0, 20); //vocal map for ripples's line weight
  let rippleWater = map(vocal, 0, 100, 0, 0.75) ; //vocal map for ripple's transparency
  push();
  ellipseMode(CENTER); //centre of the ripple
  rippleX = rippleX + 1.25; //ripple's width growth speed
  rippleY = rippleY + 0.47; //ripple's height growth speed
  noFill(); //ripple line
  stroke(255, 255, 255, rippleWater); //white ripple & transparency
  strokeWeight(rippleStroke); //ripple's line weight
  ellipse(360, 1005 + (rippleY * 0.35), rippleX, 40 + rippleY); //draws ripple

  rippleX = rippleX+1;
  if(rippleX > 1812){ //maximum width of a ripple
    rippleX = 250; //resets x coordinate for new ripple
    rippleY = 0; //resets y coordinate for new ripple
  }
}

  //flower field & door function
  function flowerField(bass, drum, other){

    let grassBack_move = map(bass, 0, 100, 0, 25); //drum map for back grass swaying
    image(grassBack, -200 + grassBack_move, -15); //draws back grass 

    image(doorScene2, 0, 0); //draws door
    let vinesMove = int(map(other, 0, 100, 0, 2)); //draws map for scene 2 vines 
    push();
    image(twoVinesArray[vinesMove], 0, 0); //draws vines for scene 2
    pop();

    let grassMiddle_move = map(bass, 0, 100, 0, 75); //drum map for middle grass swaying
    image(grassMiddle, -200 + grassMiddle_move, 15); //draws middle grass 

    let flowerMove = int(map(drum, 0, 100, 0, 2)); //drum map for flowers swaying
    let flowerSlide = map(drum, 0, 100, 0, 15); //drum map for flowers sliding
    push();
    image(flowerBackArray[flowerMove], 0  + flowerSlide, 0); //draws back flowers 
    pop();

    let grassFront_move = map(bass, 0, 100, 0, 50); //drum map for front grass swaying
    image(grassFront, -200 + grassFront_move, 0); //draws front grass 

    image(flowerPink, 0 + flowerSlide, 0 + flowerSlide);

    push();
    image(flowerFrontArray[flowerMove], 0 + flowerSlide, 0); //draws pink flowers
    pop();
  }

  //aurora function
function aurora(vocal){
    colorMode (RGB, 255, 255, 255, 1000);
    let auroraBright = map(vocal, 0, 100, 10, 600); //drum map for aurora's transparency(brightness)
    let auroraChange = map(vocal, 0, 100, 0, 1); //drum map for for aurora's colour change
    let auroraPink = color(214, 112, 230, auroraBright); //pink aurora colour
    let auroraPurple = color(142, 112, 230, auroraBright); //purple aurora colour
    let auroraBlend = lerpColor(auroraPink, auroraPurple, auroraChange) //blending pink & purple auroras
    
    let auroraWidth = map(vocal, 0, 100, 0, 30); //drum map for aurora's width
    fill(auroraBlend); //blended pink & purple aurora
    noStroke(); //no outline

    beginShape(); //outermost aurora
    vertex(350 - auroraWidth, 0); //top left vertex
    bezierVertex(500 - auroraWidth, 280, 220 - auroraWidth, 320, 310 + auroraWidth, 500); //bezier curve & bottom left vertex
    vertex(390 - auroraWidth, 500); //bottom right vertex
    bezierVertex(410  + auroraWidth, 330, 650  + auroraWidth, 350, 690 + auroraWidth, 0); //bezzier curve & top right vertex
    endShape();

    beginShape(); //middle aurora
    vertex(375 - auroraWidth, 0);//top left vertex
    bezierVertex(500 - auroraWidth, 280, 210 - auroraWidth, 320, 310 + auroraWidth, 500); //bezier curve & bottom left vertex
    vertex(390  - auroraWidth, 500); //bottom right vertex
    bezierVertex(420  + auroraWidth, 330, 650  + auroraWidth, 350, 665 + auroraWidth, 0); //bezzier curve & top right vertex
    endShape();

    beginShape(); //innermost aurora
    vertex(400 - auroraWidth, 0);//top left vertex
    bezierVertex(500 - auroraWidth, 280, 240 - auroraWidth, 320, 310 + auroraWidth, 500); //bezier curve & bottom left vertex
    vertex(390 - auroraWidth, 500); //bottom right vertex
    bezierVertex(390  + auroraWidth, 330, 650  + auroraWidth, 350, 640 + auroraWidth, 0);//bezzier curve & top right vertex
    endShape();
}

//starry sky function
function starry(drum){

  let starryBright = map(drum, 0, 100, 0.5, 1); //drum map for starry's transparency(brightness)
  let starrySize = map(drum, 0, 100, 1, 1.5); //drum map for starry's size

  //draws stars at [x, y]
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
  colorMode (RGB, 255, 255, 255, 1); //RBG colour mode & alpha value
  translate(x, y); //starry's centre coordinates from starryArray
  scale(starrySize); //size of the starry shape
  noStroke(); //no outline
  fill(255, 255, 255, starryBright); //white starry & transparency
  beginShape(); //starry shape
  vertex(0, -15); //top vertex
  bezierVertex(0, -7.5, 7.5, 0, 7.5, 0); //bezier curve & right vertex
  bezierVertex(7.5, 0, 0, 7.5, 0, 15); //bezier curve & bottom vertex
  bezierVertex(  0, 7.5, -7.5, 0, -7.5, 0); //bezier curve & left vertex
  bezierVertex(-7.5, 0, 0, -7.5, 0, -15); //bezier curve & top vertex
  endShape();
  pop();
 }
}

//sparkling sky function
function sparkle(drum){

    let sparkleBright = map(drum, 0, 100, 0.5, 1); //drum map for sparkle's transparency(brightness)
    let sparkleSize = map(drum, 0, 100, 5, 10); //drum map for sparkle's size
  
      //draws sparkles at [x, y]
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
      colorMode (RGB, 255, 255, 255, 1); //RBG colour mode & alpha value
      stroke(255, 255, 255, sparkleBright); //white sparkle & transparency(brightness)
      strokeWeight(sparkleSize) //sparkle's size
      point(x, y) //sparkle's position
      pop();
    }
  }

  //star function
function star(drum, other){

  //fills star with RGB values
   let = starColourArray = [
    [252, 238, 167],
    [255, 214, 181],
    [254, 222, 255]
   ]

    let starColour = int(map(drum, 0, 100, 0, 2)); //drum map for star's colour
    let starLength = map(other, 0, 100, 0, 250); //other map for  star's arm length
    let starSize = map(other, 0, 100, 1, 1.25); //other map for  star's arm length
    
    push();
    scale(starSize); //scales star's size
    noStroke(); //no outline
    fill(starColourArray[starColour]); //star's colour from starColourArray
    beginShape(); //star's shape
    vertex(0, -75 - starLength); //top vertex
    vertex(25, -25); //inner top right vertex
    vertex(50 + starLength, 0); //right vertex
    vertex(25, 25); //inner bottom right vertex
    vertex(0, 75 + starLength); //bottom vertex
    vertex(-25, 25); //inner bottom left vertex
    vertex(-50 - starLength, 0); //left vertex
    vertex(-25, -25);//inner top left vertex
    endShape(CLOSE);
    pop();
  }
