function Pong(x,y,r) {

  this.x = x;
  this.y = y;
  this.r = r;
  this.xSpeed = random(-1,1) * 3;
  this.ySpeed = random(5);
  ellipse(this.x, this.y, this.r);

  this.update  = function() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      ellipse(this.x, this.y, this.r);
    }

}
