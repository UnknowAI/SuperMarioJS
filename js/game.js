window.setInterval(function() {             // game loop
    if(input.keyboard.right){               // check if player moves right
        if(small_mario.x <= width -20) {    // check if player is not at end of scene
            small_mario.move(5,0);          // move player right
        }
    }
    if(input.keyboard.left){                // check if player moves left
        if(small_mario.x >= 11) {           // check if player is not at beginning of scene
            small_mario.move(-5,0);         // move player left
        }
    }
    if(input.keyboard.up){                  // checks if player jumps

    }
    update();
}, 1000/fps);                               // tickrate

function update() {                         //called at the end of every tick to update all objects
    small_mario.update();
}