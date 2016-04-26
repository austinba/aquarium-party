var Predator = function() {
  Fish.call(this);
  this.$node.addClass('predator');
  
  this.height *= 2;
  this.width *= 2;
}

Predator.prototype = Object.create(Fish.prototype);

Predator.prototype.constructor = Predator;