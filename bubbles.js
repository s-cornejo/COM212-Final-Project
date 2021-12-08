class Bubble {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.col = color(216, 118, 118);
    }
    
    display() {
      fill(this.col);
      ellipse(this.x, this.y, 75, 75);
    }
    
    orderCol() {
      this.col = color(104, 62, 62);
    }
    
    hideCol() {
      this.col = color(216, 118, 118);
    }
    
    clicked() {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < 37.5) {
        this.col = color(104, 62, 62);
        return true;
      }
    }
    
    getCoor() {
      var coor = [this.x, this.y]
      return coor;
    }
  }


  