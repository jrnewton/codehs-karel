// working from bottom to top, can I create a rainbow heart?
// 12/11/2024
// Using Super Karel functions... 

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

function goBackToStart() {
    turnAround();
    while (frontIsClear()) {
        move();
    }
}

// these colors are used by paintRow and paintHeartTop
//               Row 0    Row 1         Row 2      Row 3         etc          etc
let rowColors = [null,    Color.purple, Color.red, Color.yellow, Color.green, Color.orange, Color.cyan, Color.blue];

// these are used in paintRow
const squaresPerRow = 10;
let row = 1

function paintRow() {
    //row 1 is the bottom row.
    //in row 1, we paint 2 squares.  That's 1 * 2.
    //in row 2, we paint 4 squares.  That's 2 * 2.
    //in row 3, we paint 6 squares.  That's 3 * 2.
    //in row 4, we paint 8 squares.  That's 4 * 2.
    
    
    let squaresToPaint = row * 2;
    let squaresToMove = (squaresPerRow - squaresToPaint) / 2

    // get in position
    for (let i=0; i<squaresToMove; i++) {
      move();    
    }
    
    // paint
    for (let i=0; i<squaresToPaint; i++) {
        paint(rowColors[row]);
        move();
    }
    
    // move backwards to start of row
    goBackToStart();
}

function moveToNextRow() {
   turnRight();
   move();
   turnRight();
   row++;
}

function paintHeartTop3() {
    move();
    
    for (let i=0; i<3; i++) {
        paint(rowColors[row]);
        move();
    }
    
    move();
    move();
    
    for (let i=0; i<3; i++) {
        paint(rowColors[row]);
        move();
    }
    
    goBackToStart();
}

function paintHeartTop1() {
    move();
    move();
    paint(rowColors[row]);
    move();
    move();
    move();
    move();
    move();
    paint(rowColors[row]);
    goBackToStart();
}

//------- paint the bottom of the heart:
paintRow();
moveToNextRow();
paintRow();
moveToNextRow();
paintRow();
moveToNextRow();
paintRow();

//------- paint the top of the heart

//paint a 2x3 square?
moveToNextRow();
paintHeartTop3();
moveToNextRow();
paintHeartTop3();
moveToNextRow();
paintHeartTop1();
