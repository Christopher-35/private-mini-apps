//create var to use strings without having to make a bunch of copies
let xClass = 'x';
let OClass = 'O';

//create an array for all possible winning combinations
let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//get the board
let board = document.getElementById('myBoard');

//var to show msg later on
let winningTxtEl = document.getElementById('winningMsg');

//create var for reset button
let restartButton = document.getElementById('buttonRestart');

//var for showing text of win
let winningMessageTextElement = document.querySelector('[data-winningMsg-text]');
//select all of these different cells
let cellEl = document.querySelectorAll('[data-cell]');

//create var for switching turns, if true its circles turn, if not it's x's
let circleTurn;
//loop through each cell
// cellEl.forEach(cell => {
//   //add an event listener every time we click on cell
//   cell.addEventListener('click', handleClick, {once: true})
//   //once true means only fire this event once, so when we click on the cell
//   //its not going to fire again, ONLY DOES CLICK EVENT ONCE
// })
beginGame();

//create a click event listener for the restart button
restartButton.addEventListener('click', beginGame);


//call start game to set up board the right way
function beginGame() {
  //to have x hover first
  circleTurn = false;
  cellEl.forEach(cell => {
    //remove all classes if they existed before
    cell.classList.remove(xClass);
    cell.classList.remove(OClass);

    //remove event listener on click and handle click
    cell.removeEventListener('click', handleClick);
    //add an event listener every time we click on cell, its only going to fire once
    cell.addEventListener('click', handleClick, {once: true})
    //once true means only fire this event once, so when we click on the cell
    //its not going to fire again, ONLY DOES CLICK EVENT ONCE
  })

  //set the hoverClass
  setHoverClass();

  //remove the show class
  winningTxtEl.classList.remove('show');

}

function handleClick(e) {
  //cell we clicked on
  let cell = e.target
  //lets us know if we're using x or o
  let currentClass = circleTurn ? OClass : xClass;
  //places x or o on board
  createMark(cell, currentClass);

  //check for a winner
  if(winCheck(currentClass)){
    endGame(false);
    //check for a draw
  } else if (isDraw()) {
    endGame(true);
  } else {
    //only want to swap turns if there's no winnder or draw
    changeTurn();
    setHoverClass()
  }

}

//if it's a draw, show draw, or win show whichever turn it is wins
function endGame(draw) {
  //set on text element so it doesn't delete button
  if (draw){
    winningMessageTextElement.innerText = "DRAW!";
  } else {
    //check to see whos turn it is, so we can declare a winner
    //THIS WILL PRINT OUT THE TEXT
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  //THIS WILL SHOW US THE WINNING MESSAGE ELEMENT
  winningTxtEl.classList.add('show');
}

function isDraw () {
  //check if all cells have same class
  //destrucutre cell elements into an array so it has every method bc cellEl doesnt have
  //.every method
  return [...cellEl].every(cell => {
    //check if cell contains circle class or x class and return it
    return cell.classList.contains(xClass) ||
    cell.classList.contains(OClass)
  })
}


//write x or o
function createMark (cell, currentClass) {
  cell.classList.add(currentClass);
}

//going to swap turns between xs and os
function changeTurn() {
  circleTurn = !circleTurn;
}


//creates the appropriate shape over the board
function setHoverClass () {
  //remove any classes that exist
  board.classList.remove(xClass);
  board.classList.remove(OClass);
    if (circleTurn){ //add circle class if circles turn
      board.classList.add(OClass);
    } else {  //add x's class if x's turn
      board.classList.add(xClass);
    }
}

//create this to see if there's a winner
function winCheck(currentClass){
  //loops over all winning combinations. .Some will return true if 1 is met
  return winningCombos.some(combination => {
    //loops over each index in that combo
    return combination.every(index => {
      //checks each element in array to see if it contains the current class
      return cellEl[index].classList.contains(currentClass);
    })
  });
}