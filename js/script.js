let n = 10;
let candy = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < n; i++) {
    candy[i] = new Candy(random(200),random(200));
      
}
}
function draw() {
  background(30, 10, 100);

  for (let i = 0; i < n; i++) {
    candy[i].show();
    candy[i].move3();
    candy[i].checkOutOfCanvas();
   
  }
  for (let i = candy.length - 1; i >= 0; i--) {
    if (candy[i].isGone == true) {
      mycloud.splice(i, 1); // (index, quantity)
      console.log(candy.length);
    }
  }



}

class Candy {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.c = color(random(200,255),random(200,255),random(200,255));
    this.s = random(50, 100);
    this.speedX = random(1, 3);
    this.speedY = random(1, 3);
  }

  show() {
    noStroke();
    fill(this.c);
    rectMode(CENTER);
    circle(this.x, this.y, this.s);
    noStroke();
    rect(this.x, this.y + this.s / 2, this.s, this.s);
    fill(0);
    circle(this.x - this.s / 4.5, this.y, this.s / 6);
    circle(this.x + this.s / 4.5, this.y, this.s / 6);
    fill(0);
    ellipse(this.x, this.y + this.s/5, this.s / 9, this.s / 7.2);
    fill(250, 110, 110);
    ellipse(
      this.x - this.s / 2.25,
      this.y + this.s*0.4,
      this.s / 6,
      this.s / 7.2
    );
    ellipse(
      this.x + this.s / 2.25,
      this.y + this.s*0.4,
      this.s / 6,
      this.s / 7.2
    );
    fill(this.c)
    circle(
         this.x-this.s/2+this.s/10,
         this.y+this.s,
         this.s/5);
    circle(
          this.x-this.s/2+this.s/10+this.s/5,
          this.y+this.s,
          this.s/5);
    circle(
        this.x-this.s/2+this.s/10+this.s/5+this.s/5,
        this.y+this.s,
        this.s/5);
    circle(
        this.x-this.s/2+this.s/10+this.s/5+this.s/5+this.s/5,
        this.y+this.s,
        this.s/5);
    circle(
        this.x-this.s/2+this.s/10+this.s/5+this.s/5+this.s/5+this.s/5,
        this.y+this.s,
        this.s/5);
  }

  move3() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    if (this.x > width + this.s / 2) {
      this.x = -this.s / 2;
    }
    if (this.y > height + this.s / 2) {
      this.y = -this.s / 2;
    }

  }
  checkOutOfCanvas() {
    if (this.x > width + this.s) {
      // this.x = 0-this.s;
      this.isGone = true;
    }
  }
}
function mousePressed() {
  let i = floor(random(candy.length));
  candy[i].x = mouseX;
  candy[i].y = mouseY;
}