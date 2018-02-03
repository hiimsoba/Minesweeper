function setup() {
  createCanvas(401, 401) ;

  textAlign(CENTER) ;

  rows = floor(width / w) ;
  cols = floor(height / w) ;

  mines = floor(rows * cols / 10) ;

  resetGame() ;
}

function draw() {
  background(51) ;
  if(revealedCells == freeCells && !lost) {
    revealEverything() ;
    for(let i = 0 ; i < cols ; i++) {
      for(let j = 0 ; j < rows ; j++) {
        grid[i][j].show() ;
      }
    }
    textSize(20) ;
    fill(255) ;
    text("YOU WON! Press the mouse to play again!", width * 0.5, height * 0.5) ;
    if(mouseIsPressed && !clicked) {
      clicked = true ;
      resetGame() ;
    }
    if(!mouseIsPressed) {
      clicked = false ;
    }
  }
  else if(lost) {
    revealEverything() ;
    for(let i = 0 ; i < cols ; i++) {
      for(let j = 0 ; j < rows ; j++) {
        grid[i][j].show() ;
      }
    }
    textSize(20) ;
    fill(255) ;
    text("You lost. :( Press the mouse to play again!", width * 0.5, height * 0.5) ;
    if(mouseIsPressed && !clicked) {
      clicked = true ;
      resetGame() ;
    }
    if(!mouseIsPressed) {
      clicked = false ;
    }
  }
  else {
    for(let i = 0 ; i < cols ; i++) {
      for(let j = 0 ; j < rows ; j++) {
        checkIfClicked(i, j) ;
        grid[i][j].show() ;
      }
    }
  }
}
