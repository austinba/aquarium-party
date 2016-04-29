$(document).ready(function(){
  window.fishes = [];
  window.targetFrameRate = 30;
  window.frameRate = targetFrameRate;
  window.lastTenRefreshRates = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  window.$aquarium = $('#aquarium');

  // populate with fish
  populateFish();

  $('.addFish').click(addFish.bind(this, Fish, false));
  $('.addPredator').click(addFish.bind(this, Predator, false));
  // start tick
   setInterval(refreshScreen, 1000 / window.frameRate);
  //refreshScreen();
});

var refreshScreen = function(){
  //setTimeout(refreshScreen, 1000 / window.frameRate);
  window.lastTenRefreshRates.unshift((new Date).getTime());
  window.lastTenRefreshRates.pop();
  var timeElapsed = (window.lastTenRefreshRates[0] - window.lastTenRefreshRates[9]) / 10;
  console.log(1000 / timeElapsed, window.frameRate);
  window.fishes.forEach(function(fish){
    fish.tick(1/window.frameRate);
  });
 // var timeElapsed = (new Date).getTime() - startTime;

  //console.log(timeElapsed, 1000 / window.frameRate)
  // if(timeElapsed > 1000 / window.frameRate && window.frameRate > 10) {
  //   window.frameRate--;
  // } else if(timeElapsed < 1000 / window.frameRate && window.frameRate < window.targetFrameRate) {
  //   window.frameRate++;
  // }
  //console.log(window.frameRate);
};

var populateFish = function() {
  for(var i = 0; i < 10; i++) {
    addFish(Fish, true);
  }
  for(var i = 0; i < 100; i++) {
    addFish(ScatterFish, true);
  }
  for(var i = 0; i < 2; i++) {
    addFish(Predator, true);
  }
  var addFishRandomly = function(skipFirst){
    if(!skipFirst) addFish(Fish);
    setTimeout(addFishRandomly, Math.random() * 10000);
  };
  addFishRandomly(true);
  // add all fish to screen
  fishes.forEach(function(fish) {
    fish.$node.appendTo('#aquarium');
  });
};

var addFish = function(fishType, preventNewFishEffect) {
  var fish = new fishType(!!preventNewFishEffect);
  window.fishes.push(fish);
  fish.$node.appendTo('#aquarium');
}
