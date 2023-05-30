
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
  // Do something with myElement
});




// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
  // event.code contains a string. The string represents which key was press. If the
  // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
  if (event.code === 'ArrowLeft') {
    gameEngine.player.moveLeft();
  }

  // If `event.code` is the string that represents a right arrow keypress,
  // then move our hamburger to the right
  if (event.code === 'ArrowRight') {
    gameEngine.player.moveRight();
  }
};

// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
document.addEventListener('keydown', keydownHandler);

// We call the gameLoop method to start the game
// gameEngine.gameLoop();
//this is now commented out since its in the add event listner
