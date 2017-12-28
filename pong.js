function Pong(x,y,r) {

  this.x = x;
  this.y = y;
  this.r = r;
  this.angle = random(TWO_PI);
  this.xSpeed = 5 * cos(this.angle);
  this.ySpeed = 5 * sin(this.angle);
  ellipse(this.x, this.y, this.r);

  this.update  = function() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      ellipse(this.x, this.y, this.r);
    }

}
