var bubbles = [];
var sequence = [];
var begin = false;
var once = false;
var displayed = false;
var checked = false;
var result;
var n = 10;

function setup() {
  createCanvas(800, 500);
  for (var y = 60; y < height - 60; y += 75) {
    for (var x = 60; x < width - 60; x += 75) {
      bubbles.push(new Bubble(x,y));
    }
  }
  bubOrder = new Queue();
  userOrder = new Queue();
}

function clearSetup() {
  for (var y = 60; y < height - 60; y += 75) {
    for (var x = 60; x < width - 60; x += 75) {
      bubbles.push(new Bubble(x,y));
    }
  }
}

function orderSetup() {
  for (var i = 0; i < n; i++) {
    let bubble = random(bubbles);
    if (!bubOrder.allElements().includes(bubble)) {
      bubOrder.enqueue(bubble);
    }
    else {
      i--;
    }
  }
  once = true;
}

function draw() {
  background(0);
  
  for (var a = 0; a < bubbles.length; a++) {
    bubbles[a].display();
  } 

  while (once == false && begin == false ) {
    orderSetup();
    sequence = bubOrder.allElements();
    for (var b = 0; b < sequence.length; b++) {
      sequence[b].orderCol();
      sequence[b].display();
    }

    begin = true;
  }

  if (mouseIsPressed && displayed == false) {
    for (var c = 0; c < sequence.length; c++) {
      sequence[c].hideCol();
      sequence[c].display();
    }
    displayed = true;
  }
  
  if (userOrder.qSize() == n && checked == false) {
    result = userCheck();
    checked = true;
  }
  
  if (checked == true && result == false) {
    clear();
    text("GAME OVER", width / 2, height / 2);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(100);
    textFont('Georgia');
  }
  if (checked == true && result == true) {
    clear();
    text("YOU WIN", width / 2, height / 2);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(100);
    textFont('Georgia');
  }
}

function userCheck() {
  var comCoor = [];
  var userCoor = [];
  
  userSeq = userOrder.allElements();
  for (var z = 0; z < userSeq.length; z++) {
    append(userCoor, userSeq[z].getCoor());
    append(comCoor, sequence[z].getCoor());
  }
  
  userCoor.sort();
  comCoor.sort();
  
  for (var w = 0; w < userCoor.length; w++) {
    if (userCoor[w][0] != comCoor[w][0]) {
      return false;
    }
    if (userCoor[w][1] != comCoor[w][1]) {
      return false;
    }
  }
  return true;
}

function mouseClicked() {
  for (var i = 0; i < bubbles.length; i++) {
    var click = bubbles[i].clicked();
    if (click == true) {
      userOrder.enqueue(bubbles[i]);
    }
  }
}


