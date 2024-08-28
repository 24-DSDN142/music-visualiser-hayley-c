let firstRun = true;
let cloudArray = new Array(6); //cloud array
let randomCloud = 0; 
let cloudMove = 0; 
let x = 0;
let flowerBack = []; //back flower array
let flowerFront = []; //front flower array


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(172, 222, 242);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  

  if(firstRun){

    for (let i = 0; i < cloudArray.length; i++){
      cloudArray[i] = loadImage("images/clouds/cloud" + i + ".png");
    }

    randomCloud = Math.floor(Math.random() * 6);
   
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

  //field
  let grassBack_move = map(drum, 0, 100, 0, 25); //drum map for back grass 
  image(grassBack, -200+grassBack_move, -15); //inserts back grass 

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

  

  //clouds
  let cloudX = map(vocal, 0, 100, 0.25, 3); //vocal map for cloud's x position rate of change
  let cloudY = map(vocal, 0, 100, 0, 75); //vocal map for cloud's y position
  cloudMove +=cloudX; //moves the cloud horizontally
  image(cloudArray[randomCloud], -100+cloudMove, 100+cloudY); //inserts moving cloud

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
