// Initialise commonly used  control data objects
let imageURL = document.getElementById("animalPhoto");
let imageDIV = document.getElementById("hideImage");
let results = document.getElementById("resultsText");
let scoreDisplay = document.getElementById("scoreText");
let startButton = document.getElementById("start_btn");
// Game choice buttons
let btn_1 = document.getElementById("01");
let btn_2 = document.getElementById("02");
let btn_3 = document.getElementById("03");
let btn_4 = document.getElementById("04");
let IMAGE_TIMEOUT = 2000; // how long to display image to user
let BUTTON_COUNT =4; // The number of answer buttons

// Global variables
let score = 0; // player score
let imageAPIresults; // response from AI Analysis
let specifiedAnimal = ""; // Text displayed on answer buttons
let imageCounter = 0;  //current image index being used from data array

// Check users selection of animal with AI
// Called from user answer buttons (onclick)
// ButtonID is passedt thru as text
function CheckAnimal(identity) {

  switch(identity){
  case "01": btn = btn_1; break;
  case "02": btn = btn_2; break;
  case "03": btn = btn_3; break;
  case "04": btn = btn_4; break;
  default:
  }
  // Get text from the specified button
  specifiedAnimal = btn.innerHTML;
  // Analyse the current image URL
  getAIAnimal();
}

// call API & return image analysis data:
// This is SLOW call
// anonymous function callback WILL be delayed
function getAIAnimal() {
    // process the image
    ImageAPI.analyseImage(
      gamedata[imageCounter].ImageLink,
      function (data){
        // we only use the first tag to get the picture description
        let aiReturn = data.description.tags[0];
        imageAPIresults = aiReturn;
        // Answer is displayed when data arrives
        displayAPIResults();
        return aiReturn;
      }
    );
}

// Setup the page for the start of th challenge
function StartImage() {
    // hide any current image
    // Reset app counters
    SetImageVisibility(false);
    imageCounter=0;
    score = 0;
    imageURL.src = gamedata[imageCounter].ImageLink;
    RandomizeButtons();

    // initialize page fields
    scoreDisplay.innerHTML = "Your Score is: " + score;
    let results = "<p>Object:</p>";
    resultsText.innerHTML = results;
    // Turn 1st image on and set timeout
    SetImageVisibility(true);
    setTimeout( SetImageVisibility, IMAGE_TIMEOUT, false);
}

// Get the next image based on imageCounter
// Check the end of the game
// Set a timeout on any image displayed
function getNextImage() {
  // Check the end of the game (final question)
  if (imageCounter++ >= gamedata.length-1)
  {
    scoreDisplay.innerHTML += "<BR>Game Finished";
    SetImageVisibility( false );
    return;
  }
  // show  next image available if not end of game
  imageURL.src = gamedata[imageCounter].ImageLink;
  SetImageVisibility( true );
  setTimeout( SetImageVisibility, IMAGE_TIMEOUT, false);
  // Change button text around
  RandomizeButtons();

}
// Show imageDIV if visibility==true otherwise hide imageDIV
// Can be called directly or as a callback from timer expiration
function SetImageVisibility( visibility ){
  switch (visibility) {
    case true:
      imageDIV.style.display = "block";
      break;
    default:
      imageDIV.style.display = "none";
  }
}

// Gets imageDIV visibility
// Returns true if visible otherwise false
function getImageVisible(){
  let visible = false;
  if (imageDIV.style.display == "block"){
      visible = true;
  }
  return visible;
}

//displays the results from AI engine callback
function displayAPIResults() {
  // Display AI image analysis results

  let results = "<p>Object " + ": " + imageAPIresults + "</p>";
  resultsText.innerHTML = results;

  if (imageAPIresults == specifiedAnimal.toLowerCase()) score++;
  scoreDisplay.innerHTML = "Your Score is: " + score;

  getNextImage();
}

// Becky's random returns a random integer no, domain 0..n
// (Effort saving function)
function bRandom(n) {
  return rndMember = Math.floor( Math.random()*n );
}

// To make game more interesting the Correct answer
// is assigned to a random button
// imagedata[imagecounter].AnimalType contains the "human answer"
// User answer is from the button Text

// Button text is applied as:
// Correct answer is placed in solution set, remaining possibilities
// are selected as a random set of 3 from the 9 remaining possible animals
// As the answer is always added first, the set is shuffled so for each
// user challenge the button choice changes.

function RandomizeButtons()
// The current animal is gamedata[imageCounter].animalType
// its image is gamedata[imageCounter].ImageLink
// the data indexes are randomized here for the buttons
// so the answer is always in a different location
{
    let AnimalIndexes = new Array;
    // Add the solution
    AnimalIndexes.push(imageCounter);
    // Get 3 other different random data indices for animals
    while( true ){
      let rnd = bRandom(9);
      // if the index is not already selected (ie. .indexOf <0) save it
      if (AnimalIndexes.indexOf(rnd) <0)
        AnimalIndexes.push(rnd);
      // when we have 4 indexes exit loop
      if (AnimalIndexes.length == BUTTON_COUNT) break;
    }
    // psuedo Shuffle data so answer is not always at first element
    AnimalIndexes = AnimalIndexes.sort();

    // set up button Text
    for (i=0; i<BUTTON_COUNT; i++)
    {
       switch(i){
       case 0: btn = btn_1; break;
       case 1: btn = btn_2; break;
       case 2: btn = btn_3; break;
       case 3: btn = btn_4; break;
       default:
       }
       let index = AnimalIndexes[i];
       btn.innerHTML = gamedata[index].AnimalType;
    }

}
