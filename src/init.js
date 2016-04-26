$(document).ready(function(){
  window.fishes = [];
  window.frameRate = 20;
  window.$aquarium = $('#aquarium');

  // pre-populate with Fish
  for(var i = 0; i < 1; i++) {
    window.fishes.push(new Fish);
  }

  // pre-populate with Predator
  for(var i = 0; i < 1; i++) {
    window.fishes.push(new Predator);
  }

  fishes.forEach(function(fish) {
    fish.$node.appendTo('#aquarium');
  })

  setInterval(refreshScreen, 1000 / window.frameRate);
});

var refreshScreen = function(){
  window.fishes.forEach(function(fish){
    fish.move(1/window.frameRate);
  });
}
