var ScatterFish = function(preventNewFishEffect) {
	Fish.call(this, preventNewFishEffect);
  this.$node.addClass('scatterfish');
	this.width = 15;
	this.height = 5;
	this.repaint();
};
ScatterFish.prototype = Object.create(Fish.prototype);
ScatterFish.prototype.constructor = ScatterFish;