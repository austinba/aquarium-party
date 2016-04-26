$(document).ready(function(){
  window.fishes = [];
  window.$aquarium = $('#aquarium');
  for(var i = 0; i < 10; i++) {
    window.fishes.push(new Fish());
  }
  for(var i = 0; i < window.fishes.length; i++) {
    window.fishes[i].$node.appendTo('#aquarium');
  }
});
