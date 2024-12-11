//
// This program has Karel place balls in a spiral pattern within the box.
//
// Written by alex and daddy 12/10/24
//

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

function moveBackward() {
    turnLeft();
    turnLeft();
    move();
    turnRight();
    move();
}

while (noBallsPresent()) {
    putBall();
    move();
    
    if (ballsPresent()) {
        moveBackward();
    }
    
    if (!frontIsClear()) {
        turnLeft();
    }
}    

