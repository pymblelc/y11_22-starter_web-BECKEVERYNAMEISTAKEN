let imageCounter = 0; //start of image array
let imageURL = document.getElementById("animalPhoto");
let score = 0;
let results = document.getElementById("resultsText");
let scoreDisplay = document.getElementById("scoreText");
let imageAPIresults;
let specAnimal;

//correct
function displayImage() {
  let myButton = document.getElementById("start_btn");
  let div = document.getElementById("hideImage");
  if (div.style.display === "none") {
    div.style.display = "block";
    imageURL.src = gamedata[imageCounter].ImageLink;
    //setTimeout( imageHide, 5000 );
  } else {
    div.style.display = "none";
  }
}

/* potential finishing button
function displaybtn_finish(){
  let finishBtn = document.getElementById("finish");
  let finish_div = document.getElementById("hidden_btnfinish");
s
  if (div.style.display === "none") {
    finish_div.style.display = "block";
    imageURL.src = gamedata[ANIMAL_9].ImageLink;
  } else {
    finish_div.style.display = "none";
  }
}
*/

//calls API & returns data: correct
function getAIAnimal() {
  if (document.getElementById("hideImage").style.display != "block") return;
  ImageAPI.analyseImage(gamedata[imageCounter].ImageLink, function (data) {
    let aiReturn = data.description.tags[0];
    imageAPIresults = aiReturn;
    displayResults();
    return aiReturn;
  });
}

//displays the results: correct
function displayResults() {
  let results = "<p>Object " + ": " + imageAPIresults + "</p>";
  resultsText.innerHTML = results;
  if (imageAPIresults == specAnimal.toLowerCase()) {
    score++;
  }
  scoreDisplay.innerHTML = "Your Score is: " + score;
  
  getNextImage();
}

//correct
function findId(identity) {
  myRandom(4);
  specAnimal = document.getElementById(identity).innerHTML;
  getAIAnimal();
}

/*
//make a list of all the animals
//change btn names to btn_1, btn_2, btn_3, btn_4
// run the animals through 3 of the buttons (random is used)
//make sure the list doesnt include the correct answer
// one button is always the correct answer

//example of multiway selection: unknown
function randomButton(animal) {
  var random = myRandom(4); // Math.floor(Math.random() * 4);
  switch (random) {
    case 1:
      document.getElementById("01").innerHTML = animal;
      break;
    case 2:
      document.getElementById("02").innerHTML = animal;
      break;
    case 3:
      document.getElementById("03").innerHTML = animal;
      break;
    default:
      document.getElementById(results).innerHTML = animal;
      break;
  }
}
*/


function imageHide(){
  // Function can be called directly or as a callback from timer expiration
  document.getElementById("hideImage").style.display = "none"; 
}


//example of iteration: used to pick a random number for my boxes
function myRandom(n) {
  // Randomize number of iterations to get
  // final random number from the clock
  //Returns no domain 0..n
  let r = Date.now() % n;
  for (i = 0; i <= r; i++) {
    if (i == r) { 
      r = Date.now() % n;
      break;
    }
  }
  // r=  Math.floor(Math.random()*n
  return r;
}

// this sends my counter back to the beginning :correct
function getNextImage() {
  if (imageCounter++ >= 10) 
  imageURL.src = gamedata[imageCounter].ImageLink;
  // setTimeout( imageHide, 1000);
  RandomizeButtonId();

}

function RandomizeButtonId()
{
  let myset = new Set();

  myset.add (imageCounter);
  while( myset.size <4)
  {
    rnd = myRandom(9);
    if ( !myset.has (rnd) )
     myset.add( rnd);
  }
  // Shuffle data so answer is not always at first element
  finalset = new Set();
  while( finalset.size < 4)
    {
        rndMember = Math.floor(Math.random()*9);
        if (myset.has(rndMember)) {
            myset.delete(rndMember);
            finalset.add( rndMember );
        }
    } 
    //setButtontext
    for (const element of finalset) {
      buttonID = '0' + element;
      button = document.getElementById(buttonID);
      console.log(button.innerHTML);
    }
      
    };




 
//shuffle
var tag = Array("01", "02", "03", "04");
var tagshuffle = tag[myRandom(4)];
  //document.getElementById().innerHTML = tagshuffle;
  console.log("tagshuffle")


//shuffle for tag 1
var items = Array('cat', 'elephant', 'giraffe', 'fish', 'primate', 'horse', 'zebra', 'cow', 'insect', 'dog');
var item = items[myRandom(9)];
document.getElementById("01").innerHTML = item;
console.log(item);

//shuffle for tag 2
var items = Array('cat', 'elephant', 'giraffe', 'fish', 'primate', 'horse', 'zebra', 'cow', 'insect', 'dog');
var item = items[myRandom(9)];
document.getElementById("02").innerHTML = item;
console.log(item);

//shuffle for tag 3
var items = Array('cat', 'elephant', 'giraffe', 'fish', 'primate', 'horse', 'zebra', 'cow', 'insect', 'dog');
var item = items[Math.floor(Math.random()*items.length)];
document.getElementById("03").innerHTML = item;
console.log(item);

