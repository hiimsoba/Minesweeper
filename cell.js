function cell(i, j, w) {
  this.i = i ;
  this.j = j ;
  this.w = w ;
  this.x = w * j ;
  this.y = w * i ;
  this.mine = false ;
  this.revealed = false ;
  this.neighboringMines = 0 ;

  this.show = function() {
    fill(255) ;
    stroke(0) ;
    rect(this.x, this.y, this.w, this.w) ;
    if(this.revealed) {
      fill(127) ;
      rect(this.x, this.y, this.w, this.w) ;
      if(this.mine) {
        fill(255) ;
        ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.65, this.w * 0.65) ;
      }
      else {
        if(this.neighboringMines) {
        textAlign(CENTER) ;
        textSize(12) ;
        fill(0) ;
        text(this.neighboringMines, this.x + this.w * 0.5, this.y + 5 + this.w * 0.5) ;
        }
      }
    }
  }

  this.isOver = function(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w) ;
  }

  this.reveal = function() {
    this.revealed = true ;
    revealedCells++ ;
    if(this.neighboringMines == 0) {
      for(let i = -1 ; i <= 1 ; i++) {
        for(let j = -1 ; j <= 1 ; j++) {
          if(!i && !j) {
            continue ;
          }
          let indexA = this.i + i ;
          let indexB = this.j + j ;
          if(indexA >= 0 && indexA < rows && indexB >= 0 && indexB < cols) {
            if(!grid[indexA][indexB].mine && !grid[indexA][indexB].revealed) {
              grid[indexA][indexB].reveal() ;
            }
          }
        }
    }
  }
}

  this.countNeighboringMines = function() {
    if(this.mine) {
      this.neighboringMines = -1 ;
      return ;
    }
    let neighbors = 0 ;
    for(let i = -1 ; i <= 1 ; i++) {
      for(let j = -1 ; j <= 1 ; j++) {
        if(!i && !j) {
          continue ;
        }
        let indexA = this.i + i ;
        let indexB = this.j + j ;
        if(indexA >= 0 && indexA < rows && indexB >= 0 && indexB < cols) {
          if(grid[indexA][indexB].mine) {
            neighbors++ ;
          }
        }
      }
    }
    return neighbors ;
  }
}
