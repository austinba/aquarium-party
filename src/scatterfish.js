var ScatterFish = function() {
	Fish.call(this);
  this.$node.addClass('scatterfish');
	this.width = 15;
	this.height = 5;
	this.repaint();
};
ScatterFish.prototype = Object.create(Fish.prototype);
ScatterFish.prototype.constructor = ScatterFish;