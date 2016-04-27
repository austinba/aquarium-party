var Predator = function(preventNewFishEffect) {
  Fish.call(this, preventNewFishEffect);
  this.$node.addClass('predator');

  this.height *= 2;
  this.width *= 2;

  this.speed = 100 + 50 * (1 - Math.random()*2); // pixels per second

  this.stomach = 0;
  this.hungryAgain = (5 * Math.random() + 1) * 1000;
  this.chasing;

  this.setHungry(false);

  this.repaint();
}

Predator.prototype = Object.create(Fish.prototype);

Predator.prototype.constructor = Predator;

Predator.prototype.tick = function(interval) {
  if (this.hungry && window.fishes.length > 1) { // fix this later to check count of prey fish
    if (!this.chasing || window.fishes.indexOf(this.chasing)) {
      this.chasing = this.findNearestFish(Fish);
      if(!this.chasing) {
        this.setHungry(false);
        this.tick(interval);
        return;
      }
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

Predator.prototype.setHungry = function(isHungry) {
  this.hungry = isHungry;
  if (this.hungry) {
    this.$node.addClass('hungry');
  } else {
    this.$node.removeClass('hungry');
    setTimeout(function() {
      if(this.findNearestFish(Fish) !== undefined) {
        this.setHungry(true);
      } else {
        this.setHungry(false);
      }
    }.bind(this), this.hungryAgain);
  }
}

Predator.prototype.eat = function(prey) {
  var fishIndex = window.fishes.indexOf(prey);
  prey.$node.remove();
  window.fishes.splice(fishIndex, 1);
  this.setHungry(false);
};