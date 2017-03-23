var mp      = 2;                            // global multiplier
var fps     = 60;                           // frames per second
var width   = 256*mp;                       // scene width
var height  = 224*mp;                       // scene heigth
var inAir   = false;                        //check if play is in air
var marioJump = 0;

var scene = sjs.Scene({w:width, h:height}); // Creates Scene
var input = scene.Input();                  // Allows for user input

var sl = "js/sprites/";                     // sprite folder prefix