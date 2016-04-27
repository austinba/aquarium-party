$(document).ready(function(){
  window.fishes = [];
  window.frameRate = 20;
  window.$aquarium = $('#aquarium');

  // populate with fish
  populateFish();

  $('.addFish').click(addFish.bind(this, Fish));
  $('.addPredator').click(addFish.bind(this, Predator));
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
    addFish(Fish);
  }

  // pre-populate with ScatterFish
  for(var i = 0; i < 50; i++) {
    addFish(ScatterFish);
  }

  // pre-populate with Predator
  for(var i = 0; i < 5; i++) {
    addFish(Predator);
  }

  // add all fish to screen
  fishes.forEach(function(fish) {
    fish.$node.appendTo('#aquarium');
  });
};

var addFish = function(fishType) {
  var fish = new fishType();
  window.fishes.push(fish);
  fish.$node.appendTo('#aquarium');
}