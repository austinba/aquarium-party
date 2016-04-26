var Predator = function() {
  Fish.call(this);
  this.$node.addClass('predator');

  this.height *= 2;
  this.width *= 2;

  this.speed = 100 + 4 * (1 - Math.random()*2); // pixels per second

  this.stomach = 0;
  this.hungry = true;
  this.hungryAgain = 3 * 1000;
  this.chasing;

  this.repaint();
}

Predator.prototype = Object.create(Fish.prototype);

Predator.prototype.constructor = Predator;

Predator.prototype.tick = function(interval) {

  if (this.hungry && window.fishes.length > 1) { // fix this later to check count of prey fish
    if (!this.chasing || window.fishes.indexOf(this.chasing)) {
      this.chasing = this.findNearestFish();  
    }

    var chaseDistance = this.distanceTo(this.chasing);
    var deltaX = (this.chasing.x - this.x) / chaseDistance * this.speed * interval;
    var deltaY = (this.chasing.y - this.y) / chaseDistance * this.speed * interval;
    this.moveXY(deltaX, deltaY);


    if (this.distanceTo(this.chasing) < 3) {
      this.eat(this.chasing);
    } 

    this.repaint();
  } else {
    Fish.prototype.tick.call(this, interval);
  }
};

Predator.prototype.eat = function(prey) {
  // this.hungry = false;
  
  var fishIndex = window.fishes.indexOf(prey);
  prey.$node.remove();
  window.fishes.splice(fishIndex, 1);
  console.log(window.fishes);
  this.hungry = false;

  setTimeout(function() {
    this.hungry = true
  }.bind(this), this.hungryAgain);

  // reset direction of fish

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