var mp = 2; // global multiplier
var fps = 60; // frames per second
var width = 256*mp; // scene width
var height = 224*mp; // scene heigth

var scene = sjs.Scene({w:width, h:height}); // Creates Scene
var input = scene.Input(); // Allows for user input

var sl = "js/sprites/"; // sprite folder prefix
var small_mario = scene.Sprite('js/sprites/small_mario.png'); // small mario sprite
small_mario.size(17, 17); // small mario size in pixels
small_mario.offset(0, 0); //
small_mario.move(40*mp, 200*mp); // small mario position
small_mario.scale(mp); // small mario scale
small_mario.update(); // push sprite to screen

window.setInterval(function() { // game loop
    if(input.keyboard.right){ // check if player moves right
      if(small_mario.x <= width -20) { // check if player is not at end of scene
        small_mario.move(5,0); // move player right
      }
        small_mario.update(); // updates information
    }
    if(input.keyboard.left){ // check if player moves left
      if(small_mario.x >= 11) { // check if player is not at beginning of scene
        small_mario.move(-5,0); // move player left
      }
        small_mario.update(); // updates information
    }
    if(input.keyboard.up){ // checks if player jumps

    }
}, 1000/fps); // tickrate
