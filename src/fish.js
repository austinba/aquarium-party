var Fish = function() {
  this.$node = this.$createNode();
};
Fish.prototype.$createNode = function() {
  var windowWidth = $(document.body).width();
  var windowHeight = $(document.body).height();
  var $node = $('<div class="fish"></div>');
  $node.css('left', windowWidth * Math.random());
  $node.css('top', windowHeight * Math.random());
  console.log(windowHeight, windowWidth);
  return $node;
};
