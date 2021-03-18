/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//document methods
// displaying amount of lives left
var strikeDiv = document.getElementById("strikes-left");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var strikes = 3;

// creating random pattern
function createRanPattern(){
  // random length arr between 4 and 6 included
  var arr = new Array(Math.floor(Math.random() * 3) + 4);
  var ranLen = arr.length
  var i;
  for(i = 0; i < ranLen; i++){
    // random number between 1 and 5 included
    arr[i] = Math.floor(Math.random() * 6) + 1;
  }
  return arr;
}

function startGame(){
  //initialize game variables
  progress = 0;
  strikes = 3;
  strikeDiv.innerHTML = 'You have ' + strikes + ' strikes left!';
  clueHoldTime=1000;
  pattern = createRanPattern();
  console.log(pattern);
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  strikeDiv.innerHTML = '';
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 513.2,
  6: 581.2
}
function playTone(btn,len){ 
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
    setTimeout(function(){
      stopTone()
    },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// lighting or clearing a button functions
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// function countDown() {
//   var timeLeft = 10; //10 seconds to enter guess
//   var timer = setInterval(function(){
//     if(timeLeft <= 0){
//       clearInterval(timer);
//       document.getElementById("countdown").innerHTML = "Finished";
//     } else {
//       document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
//     }
//     timeLeft -= 1;
//   }, 1000);
// }

function playClueSequence(){
  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  button5.disabled = true;
  button6.disabled = true;
  guessCounter=0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far1
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  // timeout letting the sequence of tones play before player can guess
  setTimeout(() => {  
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    }, delay);
    // countDown();
}

function loseGame(){
  stopGame();
  strikeDiv.innerHTML = '';
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/e38b7be8-2e38-46d8-be44-2466a2d50824%2F83453979_p0.jpg?v=1616010555516')";
  alert("YOU WON! You unlocked a cool background image");
}

function guess(btn){
  console.log("user guessed: " + btn);

  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //Guess was correct!
    clueHoldTime = clueHoldTime/((progress/(pattern.length*3))+1);
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    strikes = strikes-1;
    if (strikes > 0){
      strikeDiv.innerHTML = 'You have ' + strikes + ' strikes left!';
      alert("That was incorrect, try again. You have " + strikes + ' strikes left.')
      playClueSequence();
    }else{
      loseGame();
    }
  }
}    