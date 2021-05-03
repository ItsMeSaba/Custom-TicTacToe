
/**
 * @param x   
 * @param y 
 * @param board 
 */

export default function(x, y, board, win, play, setWon) {
    function checkWin(dx, dy) {
        // let matched = 1;
        let blocks = {[`${x}-${y}`]: true};
        let x1 = x; // Copying value
        let y1 = y; // Copying value
    
        for(let i = 0; i < win; i++) {
            x1 += dx;
            y1 += dy;
            
            // Make sure spot we are checking isn't out of bound
            // if(x1 >= board[0].length || y1 >= board.length || x1 < 0 || y1 < 0) break;
    
            
            if(board[x1] && board[x1][y1] && board[x1][y1] === play) {
            // if(board[x1] && board[x1][y1] && board[x1][y1] === play) {
                blocks[`${x1}-${y1}`] = true;
    
                // matched++;
            }
    
            else break;
        }
        
        let x2 = x; // Copying value
        let y2 = y; // Copying value
        
        for(let i = 0; i < win; i++) {
            x2 -= dx;
            y2 -= dy;
            
            // Make sure spot we are checking isn't out of bound
            // if(x2 > board[0].length || y2 > board.length || x2 < 0 || y2 < 0) break;
    
            // If we meet same symbol we have match
            if(board[x2] && board[x2][y2] && board[x2][y2] === play) {
                blocks[`${x2}-${y2}`] = true;
    
                // matched++;
            }

            // else we won't continune
            else break;
        }

    
        if(Object.keys(blocks).length >= win) {
            setWon(blocks); // Setting winning blocks for coloring
    
            return true;
        }
    
        return  false;
    }

    // Checks horizontal
    if(checkWin(1, 0)) return true;
    
    // Checks vertical
    if(checkWin(0, 1)) return true;
    
    // Checks vertical #1
    if(checkWin(1, 1)) return true;
    
    // Checks vertical #2
    if(checkWin(1, -1)) return true;

    return false
}