function Pad (x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  rect(this.x, this.y, this.width, this.height);

  this.update  = function() {
    rect(this.x, this.y, this.width, this.height);
  };

}
