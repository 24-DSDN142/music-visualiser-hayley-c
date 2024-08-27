let firstRun = true;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(172, 222, 242)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let grassFront_move = map(drum, 0, 100, 0, 50)
  let grassMiddle_move = map(drum, 0, 100, 0, 75)
  let grassBack_move = map(drum, 0, 100, 0, 25)
  if(firstRun){
    cloud1 = loadImage('images/clouds/cloud1.png'); //loads cloud1
    cloud2 = loadImage('images/clouds/cloud2.png'); //loads cloud2
    cloud3 = loadImage('images/clouds/cloud3.png'); //loads cloud3
    cloud4 = loadImage('images/clouds/cloud4.png'); //loads cloud4
    cloud5 = loadImage('images/clouds/cloud5.png'); //loads cloud5
    cloud6 = loadImage('images/clouds/cloud6.png'); //loads cloud6
    grassBack = loadImage('images/field/grassBack.png'); //loads back grass layer
    grassMiddle = loadImage('images/field/grassMiddle.png'); //loads middle grass layer
    grassFront = loadImage('images/field/grassFront.png'); //loads front grass layer
      firstRun = false;
  }

  image(grassBack, -200+grassBack_move, 0); //inserts back grass layer 
  image(grassMiddle, -200+grassMiddle_move, 15); //inserts middle grass layer
  image(grassFront, -200+grassFront_move, 0); //inserts front grass layer

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
