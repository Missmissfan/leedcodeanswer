/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var cont=0;
    var i,j;
    var n=grid[0].length;
    var m=grid.length;
    for(i=0;i<m;i++)
    {
        for(j=0;j<n;j++)
        {
            if(grid[i][j]==1)
            {
                var up,down,left,right;
                if(i==0)
                {
                    up=0;
                } else {
                    up=grid[i-1][j];
                }
                if(i==m-1)
                {
                    down=0;
                } else {
                    down=grid[i+1][j];
                }
                if(j==0)
                {
                    left=0;
                } else {
                    left=grid[i][j-1];
                }
                if(j==n-1)
                {
                    right=0;
                } else {
                    right=grid[i][j+1];
                }
                cont=cont+4-up-down-right-left;
            }
        }
    }
    return cont;

};
