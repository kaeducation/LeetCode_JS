const numIslands = grid => {
  let count = 0;

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[0].length; row++) {
      if (grid[col][row] === "1") {
        count++;
        dfs(grid, col, row);
      }
    }
  }

  function dfs(grid, col, row) {
    if (
      col < 0 ||
      col >= grid.length ||
      row < 0 ||
      row >= grid[0].length ||
      grid[col][row] === "0"
    ) {
      return;
    }

    grid[col][row] = "0";
    dfs(grid, col + 1, row);
    dfs(grid, col - 1, row);
    dfs(grid, col, row + 1);
    dfs(grid, col, row - 1);
  }

  return count;
};
