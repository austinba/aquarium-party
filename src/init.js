$(document).ready(function(){
  window.fishes = [];
  window.frameRate = 20;
  window.$aquarium = $('#aquarium');

  // populate with fish
  populateFish();

  $('.addFish').click(addFish.bind(this, Fish, false));
  $('.addPredator').click(addFish.bind(this, Predator, false));
  // start tick
  setInterval(refreshScreen, 1000 / window.frameRate);
});

var refreshScreen = function(){
  window.fishes.forEach(function(fish){
    fish.tick(1/window.frameRate);
  });
};

var populateFish = function() {
  // pre-populate with Fish
  for(var i = 0; i < 10; i++) {
    addFish(Fish, true);
  }

  // pre-populate with ScatterFish
  for(var i = 0; i < 50; i++) {
    addFish(ScatterFish, true);
  }

  // pre-populate with Predator
  for(var i = 0; i < 2; i++) {
    addFish(Predator, true);
  }

  // add all fish to screen
  fishes.forEach(function(fish) {
    fish.$node.appendTo('#aquarium');
  });
};

var addFish = function(fishType, preventNewFishEffect) {
  console.log(preventNewFishEffect, !!preventNewFishEffect);
  var fish = new fishType(!!preventNewFishEffect);
  window.fishes.push(fish);
  fish.$node.appendTo('#aquarium');
}