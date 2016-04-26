$(document).ready(function(){
  window.fishes = [];
  window.frameRate = 20;
  window.$aquarium = $('#aquarium');
  for(var i = 0; i < 10; i++) {
    window.fishes.push(new Fish);
  }
  window.fishes.forEach(function(fish){
    setTimeout(function() {
      fish.$node.appendTo('#aquarium');
    }, 300);
    // setTimeout(fish.$node.appendTo.bind(fish.$node, '#aquarium'), 300);
    // fish.$node.appendTo('#aquarium');
  });
  setInterval(refreshScreen, 1000 / window.frameRate);
});

var refreshScreen = function(){
  window.fishes.forEach(function(fish){
    fish.move(1/window.frameRate);
  });
}
