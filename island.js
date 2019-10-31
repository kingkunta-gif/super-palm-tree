/**
 * @param {character[][]} grid
 * @return {number}
 */



var numIslands = function(grid) {
  let countOfIsland = 0;
    
    
    function countRecursively(x,y) {
        if (grid[x][y] === '1') {
            grid[x][y] = '0'
        } else {
            return
        }
        
        

        if (x < grid.length - 1) {
            countRecursively(x+1, y);
        }
        
        if (y < grid[0].length - 1) {
            countRecursively(x, y+1);
        }
        
        if (x > 0 && x < grid.length) {
            countRecursively(x-1, y);
        }
        
        if (y > 0 && y < grid[0].length) {
            countRecursively(x, y-1);
        }
        
    }
    
    
    for (let i = 0; i<grid.length; i++) {
        for(let j = 0; j<grid[0].length;j++) {
            if (grid[i][j] === '1') {
                countOfIsland++;
                countRecursively(i,j);
            }
        }
    }
    
    
    return countOfIsland
};
