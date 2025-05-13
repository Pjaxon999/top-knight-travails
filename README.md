# top-knight-travails
TOP project for creating and utilizing graph abstraction  

[TOP Project link](https://www.theodinproject.com/lessons/javascript-knights-travails)  

How it works:

1. Exception/error checking:  
- Return the start coordinate pair if start = target
- Run a check with a helper function isValidPosition, that checks to make sure x/y are not out of bounds  

2. Initialize a queue and a set
- Need a queue to go through coordinates to check
- Use a set to keep track of where we have moved to previously (avoids dupliactes)

3. Run a breadth first search
- This effectively checks all move paths to the target 1 "breadth" at a time (check 1 move paths, then 2 move paths, etc.)
- While there are items in the queue, use shift to take the first element out (first in first out!)
- If the current coordinates are the target coordinates, we immediately print the current path
- While this is running however, we need to check the moves we can make and then push any valid moves into the queue so those positions can be checked as necessary.

4. Evaluate moves and add paths to queue as necessary
- Create an array of the possible moves from the current position, this should generate 8 possible moves
- Use a for of loop to iterate through each possible move
- We make sure the move is valid, and make sure that it is not somewhere we have already been
- Add the position to the visisted set
- Adds a new path to the queue to be used in the next iteration of the loop (in other words, adds the next move and the previous move to the queue at the same time. This way we are keeping track of the entire path as we iterate instead of just whatever move we are at currently).  

5. ???  

6. Profit.