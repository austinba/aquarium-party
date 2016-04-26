var Predator = function() {
  Fish.call(this);
  this.$node.addClass('predator');

  this.height *= 2;
  this.width *= 2;

  this.hungry = true;

  this.repaint();
}

Predator.prototype = Object.create(Fish.prototype);

Predator.prototype.constructor = Predator;

Predator.prototype.move = function(interval) {
  // debugger;
  if (this.hungry) {
    var nearestFish = this.findNearestFish();
    console.log(nearestFish);
    this.repaint();
  } else {
    Fish.prototype.move.call(this, interval);
  }
};

Predator.prototype.findNearestFish = function() {
  var nearestDistance = Number.POSITIVE_INFINITY;
  var nearestFish;

  window.fishes.forEach(function(fish) {
    var distance = Math.sqrt( Math.pow((this.x - fish.x), 2) + Math.pow((this.y - fish.y), 2));
    if (distance < nearestDistance && fish !== this) {
      nearestDistance = distance;
      nearestFish = fish;
    }
  });

  return nearestFish;
};