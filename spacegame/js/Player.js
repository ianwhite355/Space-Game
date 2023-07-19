
class Player {

  constructor(root) {
  
    this.x = 2 * PLAYER_WIDTH;

    const y = GAME_HEIGHT - PLAYER_HEIGHT - 10;

    this.domElement = document.createElement('img');
    this.domElement.src = './images/Ians-images/pngegg.png';
    this.domElement.style.maxWidth = "15%";
    this.domElement.style.maxHeight = "15%"
    this.domElement.style.padding = "0px"
    this.domElement.style.margin = "0px"


    this.domElement.style.position = 'absolute';
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = ` ${y - 20}px`
    this.domElement.style.zIndex = '10';
    root.appendChild(this.domElement);
  }


  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }

    this.domElement.style.left = `${this.x}px`;
  }

  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
  }
}

