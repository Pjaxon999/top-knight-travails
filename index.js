/* legal moves between the nodes as the moves of the knight, assuming they do 
not go beyond the bounds of the chessboard
(x + 2, y + 1), 
(x - 2, y + 1), 
(x + 2, y - 1),
(x - 2, y - 1),
(x + 1, y + 2),
(x - 1, y + 2),
(x + 1, y - 2),
(x - 1 , y - 2)
*/

function knightMoves(start, target) {
    // possible moves from any given position
    const moves = [
    [2 , 1],
    [-2 , 1],
    [2, -1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2]
    ];

}

// Test cases
knightMoves([0,0],[3,3]); // [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]
knightMoves([3,3],[0,0]); // [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]]
knightMoves([0,0],[7,7]); // [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]