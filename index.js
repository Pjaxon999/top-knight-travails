// Helper function that returns true if a given position is valid (not less than 0 or greater than 7) on the chessboard.
function isValidPosition(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

// Helper function to print results
function prettyPrint(input) {
    console.log(`You made it in ${input.length} moves! Here's the path:`);
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}

function knightMoves([startX, startY], [targetX, targetY]) {
  // Immediate return if start and target are the same
  if (startX === targetX && startY === targetY) {
    return [[startX, startY]];
  }

  // Input validation
  if (!isValidPosition(startX, startY) || !isValidPosition(targetX, targetY)) {
    throw new Error("Invalid input: Coordinates must be between 0 and 7.");
  }

  // Queue stores full paths
  const queue = [[[startX, startY]]];
  const visited = new Set([`${startX},${startY}`]);

  while (queue.length !== 0) {
    const currentPath = queue.shift();
    const [currentX, currentY] = currentPath.at(-1);

    // Check if target reached
    if (currentX === targetX && currentY === targetY) {
      return prettyPrint(currentPath);
    }

    // Generate all possible knight moves
    const moves = [
      [currentX + 2, currentY + 1],
      [currentX + 2, currentY - 1],
      [currentX - 2, currentY + 1],
      [currentX - 2, currentY - 1],
      [currentX + 1, currentY + 2],
      [currentX + 1, currentY - 2],
      [currentX - 1, currentY + 2],
      [currentX - 1, currentY - 2]
    ];

    for (const [newX, newY] of moves) {
      const key = `${newX},${newY}`;
      if (isValidPosition(newX, newY) && !visited.has(key)) {
        visited.add(key);
        queue.push([...currentPath, [newX, newY]]);
      }
    }
  }
}

// Test cases
console.log(knightMoves([0,0],[3,3])); // [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]
console.log(knightMoves([3,3],[0,0])); // [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]]
console.log(knightMoves([0,0],[7,7])); // [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or similar