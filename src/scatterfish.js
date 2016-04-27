var ScatterFish = function(preventNewFishEffect) {
	Fish.call(this, preventNewFishEffect);
  this.$node.addClass('scatterfish');
	this.width = 15;
	this.height = 5;
	this.scattering = false;
	this.scatterTurnRate = Math.PI;  // Max rotation rate per second (180deg / sec)
	this.scatterActivatingDistance = 100;
	this.scatterSpeedMultiplier = 2;
	this.repaint();
};
ScatterFish.prototype = Object.create(Fish.prototype);
ScatterFish.prototype.constructor = ScatterFish;

ScatterFish.prototype.tick = function(interval) {
	var predator = this.findNearestFish(Predator);
 	var distance = this.distanceTo(predator);



 	if (!this.scattering) {
 		if (distance < this.scatterActivatingDistance) {
 			this.scattering = true;
 			this.scatterDirection = Math.atan2(this.y - predator.y, this.x - predator.x);
 			setTimeout(function() {
 				this.scattering = false;
 			}.bind(this), 2000);
 		} else {
 			Fish.prototype.tick.call(this, interval);	
 		}
 	}
 	if(this.scattering) {
 		this.scatterDirection += (1 - 2 * Math.random()) * this.scatterTurnRate * interval;
    var deltaX = Math.cos(this.scatterDirection) * this.speed * this.scatterSpeedMultiplier * interval;
    var deltaY = Math.sin(this.scatterDirection) * this.speed * this.scatterSpeedMultiplier * interval;
    this.moveXY(deltaX, deltaY);
    this.repaint();
 	}
};