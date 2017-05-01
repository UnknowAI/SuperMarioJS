var small_mario = scene.Sprite('js/sprites/small_mario.png');   // small mario sprite
var small_mario_direction = "r";
var small_mario_flip = 0;

small_mario.size(17, 17);                                       // small mario size in pixels
small_mario.offset(0, 0);
small_mario.move(40*mp, 200*mp);                                // small mario position
small_mario.scale(mp);                                          // small mario scale

function flipMario() {
    if(small_mario_direction == "r") {
        if(small_mario_flip != 0) {
            small_mario_flip = 0;
            small_mario.dom.style.transform = "scale(2, 2) rotatey(" + small_mario_flip + "deg)";
        }
    } else {
        if(small_mario_flip != 180) {
            small_mario_flip = 180;
            small_mario.dom.style.transform = "scale(2, 2) rotatey(" + small_mario_flip + "deg)";
        }
    }
}