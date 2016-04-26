var Predator = function() {
  Fish.call(this);
  this.$node.addClass('predator');

  this.height *= 2;
  this.width *= 2;

  this.stomach = 0;
  this.hungry = true;
  this.chasing;

  this.repaint();
}

Predator.prototype = Object.create(Fish.prototype);

Predator.prototype.constructor = Predator;

Predator.prototype.move = function(interval) {
  if (this.hungry) {
    // determine next fish to chase
    if (!this.chasing || window.fishes.includes(this.chasing)) {
      this.chasing = this.findNearestFish();  
    }

    // determine direction
    var direction;

    if (this.x === this.chasing.x) {
      direction = (this.chasing.y > this.y) ? 0 : Math.PI;
    } else {
      direction = Math.atan( (this.chasing.y - this.y) / (this.chasing.x - this.x) );
    }

    console.log(direction * 180 / Math.PI);

    this.x -= Math.cos(direction) * this.speed * interval;
    this.y -= Math.sin(direction) * this.speed * interval;

    if (this.distanceTo(this.chasing) < 3) {
      this.eat(this.chasing);
    } 

    this.repaint();
  } else {
    Fish.prototype.move.call(this, interval);
  }
};

Predator.prototype.eat = function(prey) {
  this.hungry = false;
  
  var fishIndex = window.fishes.indexOf(prey);
  prey.$node.remove();
  // window.fishes = window.fishes.splice(fishIndex, 1);
};

Predator.prototype.findNearestFish = function() {
  var nearestDistance = Number.POSITIVE_INFINITY;
  var nearestFish;

  for (var i = 0; i < window.fishes.length; i++) {
    var distance = this.distanceTo(fishes[i]);

    if (distance < nearestDistance && fishes[i] !== this) {
      nearestDistance = distance;
      nearestFish = fishes[i];
    }
  }

  return nearestFish;
};