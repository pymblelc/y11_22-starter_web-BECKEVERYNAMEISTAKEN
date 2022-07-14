// Roughly copy & pasted from the easier level, names have been changed, etc..


// This initialises the commonly used control data challenges
let imageURL = document.getElementById("challengePhoto");
let imageDIV = document.getElementById("hideImage");
let results = document.getElementById("resultsText");
let scoreDisplay = document.getElementById("scoreText");
let startButton = document.getElementById("start_btn");
// Game choice buttons
let btn_1 = document.getElementById("01");
let btn_2 = document.getElementById("02");
let btn_3 = document.getElementById("03");
let btn_4 = document.getElementById("04");
let IMAGE_TIMEOUT = 2000; // this describes how long to display the image to the user
let BUTTON_COUNT =4; // The number of answer buttons

// Global variables
let score = 0; // Player score
let imageAPIresults; // Response from AI Analysis
let specifiedChallenge = ""; // Text displayed on answer buttons
let imageCounter = 0;  //Current image index being used from data array

// This function checks the users selection of challenge (through the buttons) with the AI
// It is then called from user answer buttons (onclick)
// The buttonID is passed through as text

// Example of multiway selection
function CheckChallenge(identity) {

  switch(identity){
  case "01": btn = btn_1; break;
  case "02": btn = btn_2; break;
  case "03": btn = btn_3; break;
  case "04": btn = btn_4; break;
  default:
  }
  // Gets text from the specified button
  specifiedChallenge = btn.innerHTML;
  // This analyses the current image URL
  getAIChallenge();
}

// This function calls the API & returns the image analysis data:
// It is very slow as there is a time delay -- uncontrollable 

// Example of function
function getAIChallenge() {
    // This processes the image
    ImageAPI.analyseImage(
      challenge[imageCounter].ImageLink,
      function (data){
        // This only uses the first tag to get the picture description
        let aiReturn = data.description.tags[0];
        imageAPIresults = aiReturn;
        // The answer is then displayed when data arrives
        displayAPIResults();
        return aiReturn;
      }
    );
}

// Setups the page for the start of the challenge
function StartImage() {
    // Hides any of the current images
    // Resets the app counters
    SetImageVisibility(false);
    imageCounter=0;
    score = 0;
    imageURL.src = challenge[imageCounter].ImageLink;
    RandomizeButtons();

    scoreDisplay.innerHTML = "Your Score is: " + score;
    let results = "<p>Object:</p>";
    resultsText.innerHTML = results;
    // The first image is turned on, then the timeout starts
    SetImageVisibility(true);
    setTimeout( SetImageVisibility, IMAGE_TIMEOUT, false);
}

// The next image is loaded up based off of the imageCounter
// Sets a timeout on any image displayed
function getNextImage() {
  // Check the end of the game (final question)
  if (imageCounter++ >= challenge.length-1)
  {
    scoreDisplay.innerHTML += "<BR>Game Finished";
    SetImageVisibility( false );
    return;
  }
  // This displays the next image available if not end of game
  imageURL.src = challenge[imageCounter].ImageLink;
  SetImageVisibility( true );
  setTimeout( SetImageVisibility, IMAGE_TIMEOUT, false);
  // Change button text around
  RandomizeButtons();

}

// Displays imageDIV if the visibility==true, otherwise the imageDIV is hidden
// This can either be called directly or as a callback from timer expiration
function SetImageVisibility( visibility ){
  switch (visibility) {
    case true:
      imageDIV.style.display = "block";
      break;
    default:
      imageDIV.style.display = "none";
  }
}

// This gets the imageDIV's visibility
// Then it returns true if visible, otherwise it returns as false
function getImageVisible(){
  let visible = false;
  if (imageDIV.style.display == "block"){
      visible = true;
  }
  return visible;
}

//The results are displayed from the AI engine callback
function displayAPIResults() {
  // This displays AI image analysis results
  let results = "<p>Object " + ": " + imageAPIresults + "</p>";
  resultsText.innerHTML = results;

  if (imageAPIresults == specifiedChallenge.toLowerCase()) score++;
  scoreDisplay.innerHTML = "Your Score is: " + score;

  getNextImage();
}

// I created a random return that returns a random integer
// It will hopefully save some effort -- 
function bRandom(n) {
  return rndMember = Math.floor( Math.random()*n );
}

// The correct answer is assigned to a random button of the four. 
// The image data[imagecounter].challengeType contains the answer
// The user answer is displayed from the button text.

// The button text is decided through having one correct answer being placed in a solution set, 
// ... the rest of the answers are placed through the remaining possibilities.
// They are selected as a random set of 3 from 9 remaining answers.
// The answer is always placed first, therefore the set is then shuffled for each question, the button choice changes

function RandomizeButtons()
// The current challenge is found through the gamedata[imageCounter].challengeType
// The image = medium[imageCounter].ImageLink
// The data indexes are randomized here for the rest of the buttons, so the answer is always in a different location
{
    let ChallengeIndexes = new Array;
    // Add the solution
    ChallengeIndexes.push(imageCounter);
    // Get 3 other different random data indices for the challenges
    while( true ){
      let rnd = bRandom(9);
      // if the index is not already selected (ie. .indexOf <0) it is then saved
      if (ChallengeIndexes.indexOf(rnd) <0)
      ChallengeIndexes.push(rnd);
      // when we have 4 indexes exit loop
      if (ChallengeIndexes.length == BUTTON_COUNT) break;
    }
    // psuedo Shuffle data so answer is not always at first element
    ChallengeIndexes = ChallengeIndexes.sort();


    // This sets up button Text : example of Multiway selection & iteration
    for (i=0; i<BUTTON_COUNT; i++)
    {
       switch(i){
       case 0: btn = btn_1; break;
       case 1: btn = btn_2; break;
       case 2: btn = btn_3; break;
       case 3: btn = btn_4; break;
       default:
       }
       let index = ChallengeIndexes[i];
       btn.innerHTML = challenge[index].ChallengeType;
    }

}
