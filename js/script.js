//All Functions
function el(id){
    return document.querySelector(id)
}


//Element selection
const playerZero = el(".player--0");
const playerOne = el(".player--1");
const scoreZero = el("#score--0");
const scoreOne = el("#score--1");
const currentZero = el("#current--0");
const currentOne = el("#current--1");
const playerNames1 = el("#name--0");
const playerNames2 = el("#name--1")
const usernameA = el("#usernameA");
const usernameB = el("#usernameB");
const mainSection = el("#main");
const formGroup = el("#input-field");
const setScore = el("#set-score")


const diceEl = el(".dice");
const diceEl2 = el(".diceA");
const pass = el("#pass")
const btnNew = el(".btn--new");
const btnRoll = el(".btn--roll");
const btnHold = el(".btn--hold");


//Global variables
let scores, currentScore, activePlayer, playing, playerNames, scoreBoard;

scores = [0,0];
scoreBoard = [0, 0,];
playerNames = [];
currentScore = 0;
activePlayer = 0;
playing = true




pass.addEventListener("click", playGame);

function playGame(){
  playerNames[0] = usernameA;
  playerNames[1] = usernameB;
  mainSection.classList.remove('hidden');
  formGroup.classList.add('hidden');
 

}
// playerNames[0] = usernameA;
//   playerNames[1] = usernameB;



// playName = playerNames[0];
// playName2 = playerNames[1] 


// Setting all value to zero
scoreZero.textContent = 0;
scoreOne.textContent = 0;
currentZero.textContent = 0;
currentOne.textContent = 0;
playerNames1.textContent = playerNames[0];
playerNames2.textContent = playerNames[1];


btnNew.addEventListener('click', function(){
    scores=[0,0];
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1: 0;
    
    playing = true;
   

    //Clear all content on load
    scoreZero.textContent = 0;
    scoreOne.textContent = 0;  
    currentZero.textContent = 0;
    currentOne.textContent = 0;
    playerNames1.textContent = playerNames[0];
  playerNames2.textContent = playerNames[1];

    diceEl.classList.add('hidden');
    diceEl2.classList.add('hidden');
    btnHold.classList.remove('hidden');
    // pass.classList.add('hidden');
    btnRoll.classList.remove('hidden');
    playerZero.classList.remove('player--winner');
    el(`#score--${1 - activePlayer}`).classList.remove('hidden');
    playerOne.classList.remove('player--winner');
    playerZero.classList.add('player--active');
    playerOne.classList.remove('player--active');
})



diceEl.classList.add('hidden');
diceEl2.classList.add('hidden');
// playerZero.classList.remove('player--winner');
// playerOne.classList.remove('player--winner');
 playerZero.classList.add('player--active');
 playerOne.classList.remove('player--active');


//Add event listeners to Roll Dice Button
btnRoll.addEventListener("click", function(){
if (playing ){
    
// Generate a random dice roll
const dice = Math.floor(Math.random() * 6)+1;
const diceA = Math.floor(Math.random() * 6)+1;

//display the dice
diceEl.classList.remove('hidden');
diceEl2.classList.remove('hidden');
diceEl.src = `images/dice-${dice}.png`;
diceEl2.src = `images/dice-${diceA}.png`;


//Add dice to current score
if(dice !== 1 && diceA != 1 && dice + diceA != 12 ){
    currentScore += (dice + diceA);
el(`#current--${activePlayer}`).textContent = currentScore;
}else{
    toogleAdd();
}
}
})

//Add Eventlistener to hold scores
btnHold.addEventListener("click", function(){
    if(playing  && currentScore != 0){
  // Add current score to active player's score
  scores[activePlayer] += currentScore;
  el(`#score--${activePlayer}`).textContent = scores[activePlayer];


  //Check if active player's score is >= 100
  if(scores[activePlayer] >= setScore.value){
      //change the state of our game to false
      playing = false;
    //   scoreOne.classList.add('hidden'); ---wrong 
      
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
      scoreBoard[activePlayer] +=1
      el(`#current--${0}`).textContent = (`ScoreBoard: ${scoreBoard[0]}`);
      el(`#current--${1}`).textContent = (`ScoreBoard: ${scoreBoard[1]}`);

      //Hide the dice
      //diceEl.classList.add('hidden');
      diceEl.src = '../images/gameover.jpg';
      el(`.player--${activePlayer}`).classList.add('player--winner');
      el(`#score--${activePlayer}`).textContent = "winner";
      el(`#score--${1 - activePlayer}`).classList.add('hidden');
    //   el(`#name--${1 - activePlayer}`).classList.add('hidden');---- wrong
      el(`.player--${activePlayer}`).classList.remove('player--active');
  }else{
    toogleAdd();
  }
    }

})



//Add Eventlistener to create a new game



function toogleAdd(){
    currentScore = 0;
    el(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer == 0 ? 1: 0;
    playerZero.classList.toggle("player--active");
    playerOne.classList.toggle("player--active");
}

//Adding new features
//Refactor this game and create as many functions as possible.
//Add gameover image in place of dice image .
// A score board
//If a player current score is zero, the shouldn't be able to hold
//If the current winner is one, them make the new player second player
//If possible
//Add a fireworks to
//Dice rolling