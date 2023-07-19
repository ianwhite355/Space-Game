
class Enemy {

  constructor(theRoot, enemySpot) {
  
    this.root = theRoot;
    this.spot = enemySpot;

    
    this.x = enemySpot * ENEMY_WIDTH;

    this.y = -ENEMY_HEIGHT;
    this.destroyed = false;

  
    this.domElement = document.createElement('img');

    this.domElement.src = './images/Ians-images/clipart1392775.png';
 
    this.domElement.style.maxWidth = "15%";
    this.domElement.style.maxHeight = "15%"
    this.domElement.style.marginLeft = "18px"
    this.domElement.style.transform = "rotate(180deg)"
    
    this.domElement.style.position = 'absolute';
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;


    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 1 + 0.25;
  }


  update(timeDiff) {

    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);

      this.destroyed = true;
    }
  }
}
