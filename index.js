// helper function that returns true if a given position is valid (not less than 0 or greater than 7) on the chessboard. 
function isValidPosition(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function knightMoves([startX, startY], [targetX, targetY]) {
    // make sure we have valid input before any other nonsense takes place
    if (isValidPosition(startX, startY) === false || isValidPosition(targetX, targetY) === false) {
    throw new Error("Invalid input: Coordinates must be between 0 and 7.");
    }

    // possible moves from any given position positive numbers add, negative numbers subtract
    const moves = [
      [x + 2, y + 1], 
      [x + 2, y - 1],
      [x - 2, y + 1], 
      [x - 2, y - 1],
      [x + 1, y + 2], 
      [x + 1, y - 2],
      [x - 1, y + 2], 
      [x - 1, y - 2]
    ];



}

// Test cases
knightMoves([0,0],[3,3]); // [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]
knightMoves([3,3],[0,0]); // [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]]
knightMoves([0,0],[7,7]); // [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]