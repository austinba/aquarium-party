var Fish = function() {
  this.$node = this.$createNode();
  this.width = 100;
  this.height = 30;
};
Fish.prototype.$createNode = function() {
  var aquariumWidth = $aquarium.width();
  var aquariumHeight = $aquarium.height();
  var $node = $('<div class="fish"></div>');
  $node.css('width', this.width);
  $node.css('height', this.height);
  $node.css('left', (aquariumWidth - this.width) * Math.random());
  $node.css('top', (aquariumHeight - this.height) * Math.random());
  return $node;
};
