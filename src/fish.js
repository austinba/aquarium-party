var Fish = function() {
  this.$node = $('<div class="fish"></div>');
  this.width = 50;
  this.height = 37;
  this.speed = 50 + 4 * (1 - Math.random()*2); // pixels per second
  this.direction = Math.random() < 0.5 ? -1 : 1;
  this.$node.addClass('fish-bob' + Math.floor(Math.random() * 3 + 1));
  if(this.direction < 0) {
    this.$node.css('transform', 'scaleX(-1)');
  }
  this.left = this.widthAvailable() * Math.random();
  this.top = this.heightAvailable() * Math.random();
  this.repaint();
};

Fish.prototype.widthAvailable = function() {
  return ($aquarium.width() - this.width);
}
Fish.prototype.heightAvailable = function() {
  return ($aquarium.height() - this.height);
}

Fish.prototype.move = function(interval) {
  // change direction on edge collison
  if(this.left < 0) {
    this.direction = 1;
    this.$node.css('transform', 'scaleX(1)');
  } else if(this.left > this.widthAvailable()) {
    this.direction = -1;
    this.$node.css('transform', 'scaleX(-1)');
  }
  this.left += this.direction * this.speed * interval;

  this.repaint();
};
Fish.prototype.repaint = function() {
  this.$node.css('width', this.width);
  this.$node.css('height', this.height);
  this.$node.css('left', this.left);
  this.$node.css('top', this.top);
}
