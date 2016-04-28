# Aquarium Party

**Aquarium Project** is a Junior project that was worked on at Hack Reactor. During this project we explored the pseudoclassical inheritance pattern.

[View Aquarium Party!](http://taptapdan.github.io/aquarium-party)

![Screenshot of Aquarium Party](preview.png)

## Created By

* [Austin Baltes](https://github.com/austinba)
* [Daniel Fiore](https://github.com/taptapdan)

## What's Going On?

### Fish (Base Object)

* Swim left and right

<img src="img/fish.png" style="width: 100px;">

### Predator (Delegates to Fish)

* Swim left and right
* Become hungry (and change color to indicate)
* Move towards Fish when hungry
* "Eat" Fish

<img src="img/fish.png" style="width: 200px; -webkit-filter: hue-rotate(300deg); filter: hue-rotate(300deg);">

### ScatterFish (Delegates to Fish)

* Swim left and right
* Scatter away from hungry Predator

<img src="img/fish.png" style="width: 30px; -webkit-filter: grayscale(100%); filter: grayscale(100%)">