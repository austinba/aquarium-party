$(document).ready(function(){
  window.fishes = [];
  window.frameRate = 20;
  window.$aquarium = $('#aquarium');

  // pre-populate with Fish
  for(var i = 0; i < 10; i++) {
    window.fishes.push(new Fish);
  }

  // pre-populate with ScatterFish
  for(var i = 0; i < 50; i++) {
    window.fishes.push(new ScatterFish);
  }

  // pre-populate with Predator
  for(var i = 0; i < 5; i++) {
    window.fishes.push(new Predator);
  }

  fishes.forEach(function(fish) {
    fish.$node.appendTo('#aquarium');
  })

  setInterval(refreshScreen, 1000 / window.frameRate);
});

var refreshScreen = function(){
  window.fishes.forEach(function(fish){
    fish.tick(1/window.frameRate);
  });
}
