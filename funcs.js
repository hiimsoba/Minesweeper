function putMines() {
  let options = new Array() ;
  for(let i = 0 ; i < cols ; i++) {
    for(let j = 0 ; j < rows ; j++) {
      options.push([i, j]) ;
    }
  }
  for(let i = 0 ; i < mines ; i++) {
    let index = floor(random(options.length));
    let gridI = options[index][0] ;
    let gridJ = options[index][1] ;
    grid[gridI][gridJ].mine = true ;
    options[index].splice(index, 1) ;
  }
}

function resetGame() {
  revealedCells = 0 ;
  grid = new Array(cols) ;
  for(let i = 0 ; i < cols ; i++) {
    grid[i] = new Array(rows) ;
    for(let j = 0 ; j < rows ; j++) {
      grid[i][j] = new cell(i, j, w) ;
    }
  }
  freeCells = rows * cols - mines ;
  revealedCells = 0 ;
  putMines() ;
  setNeighbors() ;
  lost = false ;
}

function revealEverything() {
  for(let i = 0 ; i < cols ; i++) {
    for(let j = 0 ; j < rows ; j++) {
      grid[i][j].revealed = true ;
    }
  }
}

function setNeighbors() {
  for(let i = 0 ; i < cols ; i++) {
    for(let j = 0 ; j < rows ; j++) {
      grid[i][j].neighboringMines = grid[i][j].countNeighboringMines() ;
    }
  }
}

function checkIfClicked(i, j) {
  if(mouseIsPressed && !clicked && grid[i][j].isOver(mouseX, mouseY)) {
    grid[i][j].reveal() ;
    if(grid[i][j].mine) {
      lost = true ;
    }
    clicked = true ;
  }
  if(!mouseIsPressed) {
    clicked = false ;
  }
}
