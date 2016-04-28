var Fish = function(preventNewFishEffect) {
  this.$node = $('<div class="fish"></div>');
  this.width = 50;
  this.height = 37;

  this.x = ($aquarium.width() - this.width) * Math.random() + this.width / 2;
  this.y = ($aquarium.height() - this.height) * Math.random() + this.height / 2;

  this.speed = 50 + 4 * (1 - Math.random()*2); // pixels per second
  this.direction = Math.random() < 0.5 ? -1 : 1;

  // bobbing effect
  this.bobCycle = 0;  // radians
  this.bobSpeed = Math.random() * 3;
  this.bobHeight = Math.random() * 5 + 2;
  this.bobOffset= 0;

  this.$node.addClass('fish-bob' + Math.floor(Math.random() * 3 + 1));
  if(!preventNewFishEffect) this.$node.addClass('newfish');
  setTimeout(function(){
    this.$node.removeClass('newfish');
  }.bind(this), 500);
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

Fish.prototype.findNearestFish = function(fishType) {
  var nearestDistance = Number.POSITIVE_INFINITY;
  var nearestFish;

  for (var i = 0; i < window.fishes.length; i++) {
    var distance = this.distanceTo(fishes[i]);

    if (distance < nearestDistance && fishes[i] !== this && fishes[i].constructor === fishType) {
      nearestDistance = distance;
      nearestFish = fishes[i];
    }
  }

  return nearestFish;
};

Fish.prototype.tick = function(interval) {
  // change direction on edge collison
  var currentTransform = this.$node.css('transform');
  if(this.distanceFromBounds().left < 0) {
    this.direction = 1;
  } else if(this.distanceFromBounds().right < 0) {
    this.direction = -1;
  }

  // bob
  this.bobCycle += this.bobSpeed * interval;
  this.bobOffset = this.bobHeight * Math.sin(this.bobCycle);

  // update x and repaint
  this.moveXY(this.direction * this.speed * interval, 0);
  this.repaint();
};

Fish.prototype.moveXY = function(xIncr, yIncr) {

  this.x += xIncr;
  this.y += yIncr;

  var transform = '';

  // facing up/down
  var rotation = Math.atan(yIncr / xIncr) * 180 / Math.PI;
  transform += 'rotate(' + rotation + 'deg) ';

  // set fish facing direction
  if (xIncr < 0) {
    transform += 'scaleX(-1) ';
  }

  this.$node.css('transform', transform);
};
Fish.prototype.distanceFromBounds = function() {
  return {
    top: this.y - this.height / 2,
    bottom: $aquarium.height() - (this.y + this.height / 2),
    left: this.x - this.width / 2,
    right: $aquarium.width() - (this.x + this.width / 2),
  };
};
Fish.prototype.repaint = function() {
  this.$node.css('width', this.width);
  this.$node.css('height', this.height);
  this.$node.css('left', this.left());
  this.$node.css('top', this.top());
}
