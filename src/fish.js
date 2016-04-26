var Fish = function() {
  this.$node = $('<div class="fish"></div>');
  this.width = 50;
  this.height = 37;

  this.x = this.widthAvailable() * Math.random() + this.width / 2;
  this.y = this.heightAvailable() * Math.random() + this.height / 2;

  this.speed = 50 + 4 * (1 - Math.random()*2); // pixels per second
  this.direction = Math.random() < 0.5 ? -1 : 1;

  // bobbing effect
  this.bobCycle = 0;  // radians
  this.bobSpeed = Math.random() * 3;
  this.bobHeight = Math.random() * 5 + 2;
  this.bobOffset= 0;

  this.$node.addClass('fish-bob' + Math.floor(Math.random() * 3 + 1));
  if(this.direction < 0) {
    this.$node.css('transform', 'scaleX(-1)');
  }

  this.repaint();
};

Fish.prototype.distanceTo = function(fish) {
  return Math.sqrt( Math.pow((this.x - fish.x), 2) + Math.pow((this.y - fish.y), 2) );
}

Fish.prototype.left = function() {
  return this.x - (this.width / 2);
};

Fish.prototype.top = function() {
  return this.y - (this.width / 2) + this.bobOffset;
};

Fish.prototype.widthAvailable = function() {
  return ($aquarium.width() - this.width);
}
Fish.prototype.heightAvailable = function() {
  return ($aquarium.height() - this.height);
}

Fish.prototype.move = function(interval) {
  // change direction on edge collison
  var currentTransform = this.$node.css('transform');
  if(this.left() < 0) {
    this.direction = 1;
    this.$node.css('transform', 'scaleX(1)');
  } else if(this.left() > this.widthAvailable()) {
    this.direction = -1;
    this.$node.css('transform', 'scaleX(-1)');
  }

  // bob
  this.bobCycle += this.bobSpeed * interval;
  this.bobOffset = this.bobHeight * Math.sin(this.bobCycle);

  // update x and repaint
  this.x += this.direction * this.speed * interval;
  this.repaint();
};

Fish.prototype.repaint = function() {
  this.$node.css('width', this.width);
  this.$node.css('height', this.height);
  this.$node.css('left', this.left());
  this.$node.css('top', this.top());
}
