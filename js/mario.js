// create the Scene object
var scene = sjs.Scene({w:256, h:224});
var sl = "js/sprites/";
var audio = new Audio('js/audio_file.mp3');
audio.play();

// load the images in parallel. When all the images are
// ready, the callback function is called.
scene.loadImages([sl + 'character.png'], function() {
    // create the Sprite object;
    var sp = scene.Sprite('js/sprites/character.png');
    // change the visible size of the sprite
    sp.size(585, 727);
    // apply the latest visual changes to the sprite
    // (draw if canvas, update attribute if DOM);
    sp.update();
    // change the offset of the image in the sprite
    // (this works the opposite way of a CSS background)
    sp.offset(0, 0);
    // various transformations
    sp.move(0, 0);
    sp.rotate(3.14 / 4);
    sp.scale(0.2);
    sp.setOpacity(1);

    sp.update();
});