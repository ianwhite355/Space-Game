
// I made the event listener right down below for the start button on this one

// also the DOMContentLoaded peace of code is because it couldnt find start in the dom because the js loaded first so this seemed to be a good solution


// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`

let gameEngine


document.addEventListener('DOMContentLoaded', function() {
  const start = document.getElementById("start")
  start.addEventListener("click", () => {

    setTimeout(() => {
      gameEngine = new Engine(document.getElementById('app'));
      gameEngine.gameLoop();
    }, 500);
    setTimeout(() => {
      start.style.display = "none"

    }, 500)
  
  }, {once : true});
});




const keydownHandler = (event) => {
  if (event.code === 'ArrowLeft') {
    gameEngine.player.moveLeft();
  }

  if (event.code === 'ArrowRight') {
    gameEngine.player.moveRight();
  }
};

document.addEventListener('keydown', keydownHandler);

