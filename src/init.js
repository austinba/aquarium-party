$(document).ready(function(){
  window.fishes = [];
  for(var i = 0; i < 5; i++) {
    window.fishes.push(new Fish());
  }
  for(var i = 0; i < window.fishes.length; i++) {
    window.fishes[i].$node.appendTo(document.body);
  }
});
