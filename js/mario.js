var mp = 2;
var fps = 60;

var scene = sjs.Scene({w:256*mp, h:224*mp});
var input = scene.Input();

var sl = "js/sprites/";
var mario = scene.Sprite('js/sprites/small_mario.png');
mario.size(17, 17);
mario.offset(0, 0);
mario.move(40*mp, 200*mp);
mario.scale(2);
mario.update();

window.setInterval(function() {
    if(input.keyboard.right){
        mario.move(5,0);
        mario.update();
    }
    if(input.keyboard.left){
        mario.move(-5,0);
        mario.update();
    }
    if(input.keyboard.up){
        
    }
}, 1000/fps);