var Fish = function() {
  this.width = 100;
  this.height = 30;
  this.$node = this.$createNode();
};
Fish.prototype.$createNode = function() {

  this.left = ($aquarium.width() - this.width) * Math.random();
  this.top = ($aquarium.height() - this.height) * Math.random();

  var $node = $('<div class="fish"></div>');
  $node.css('width', this.width);
  $node.css('height', this.height);
  $node.css('left', this.left);
  $node.css('top', this.top);
  return $node;
};
