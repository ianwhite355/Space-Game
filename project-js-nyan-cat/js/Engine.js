
class Engine {

  constructor(theRoot) {
   
    this.root = theRoot;
  
    this.player = new Player(this.root);

    this.enemies = [];

    addBackground(this.root);


    this.lives = 3
  }

  gameLoop = () => {
  
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < MAX_ENEMIES) {

      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    if (this.isPlayerDead()) {
      window.alert('Game over! You failed to save earth!');

      return;
    }

    setTimeout(this.gameLoop, 20);
  };

  isPlayerDead = () => {

    const lifeImg = document.getElementById("lifeimg")

      const playerBox = this.player.domElement.getBoundingClientRect()
      for (let enemy of this.enemies) {

        if (!enemy.collided) { 

          const enemyBox = enemy.domElement.getBoundingClientRect()

          if (playerBox.left < enemyBox.right &&
              playerBox.right > enemyBox.left &&
              playerBox.top < enemyBox.bottom &&
              playerBox.bottom > enemyBox.top) {

                this.lives--;
                console.log(`you have ${this.lives} lives left`);
                enemy.collided = true;
                

                
                if (this.lives === 2 && !this.twoLivesMessageShown) {
                  lifeImg.parentElement.removeChild(lifeImg)
                  this.twoLivesMessageShown = true;
                } 
                else if (this.lives === 1 && !this.oneLifeMessageShown) {
                  lifeImg.parentElement.removeChild(lifeImg)
                  this.oneLifeMessageShown = true;
                }
              }
          
          if (this.lives === 0) {
            lifeImg.parentElement.removeChild(lifeImg)
            console.log("test0")

            return true
          }
      

    }  

      }
    
    return false;
    }
}



