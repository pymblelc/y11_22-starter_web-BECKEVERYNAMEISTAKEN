let imageCounter = 0; //start of image array
let imageURL = document.getElementById("toolPhoto");
let score = 0;
let results = document.getElementById("resultsText");
let scoreDisplay = document.getElementById("scoreText");
let imageAPIresults;
let specTool;

//correct
function displayImage() {
  let myButton = document.getElementById("start_btn");
  let div = document.getElementById("hideImage");

  if (div.style.display === "none") {
    div.style.display = "block";
    imageURL.src = tooldata[imageCounter].ImageLink;
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
    imageURL.src = tooldata[TOOL_9].ImageLink;
  } else {
    finish_div.style.display = "none";
  }
}
*/

//calls API & returns data: correct
function getAItool() {
  if (document.getElementById("hideImage").style.display != "block") return;
  ImageAPI.analyseImage(tooldata[imageCounter].ImageLink, function (data) {
    let aiReturn = data.description.tags[0];
    
    imageAPIresults = aiReturn;
    displayResults();
     return aiReturn;
    }
  );
}

//displays the results: correct
function displayResults() {
  let results = "<p>Object " + ": " + imageAPIresults + "</p>";
  resultsText.innerHTML = results;
  if (imageAPIresults == specTool.toLowerCase() ) {
    score++;
  }
  scoreDisplay.innerHTML = "Your Score is: " + score;
 //randomNumber(ToolType);
  getNextImage();
}

//correct
function findId(identity) { myRandom(4);
  specTool = document.getElementById(identity).innerHTML;
  getAItool();
}

//make a list of all the tools
//change btn names to btn_1, btn_2, btn_3, btn_4
// run the tools through 3 of the buttons (random is used)
//make sure the list doesnt include the correct answer
// one button is always the correct answer

//example of multiway selection: unknown
function randomNumber(tool) {
  var random = myRandom(4);// Math.floor(Math.random() * 4);
  switch (random) {
    case 1:
      document.getElementById("01").innerHTML = tool;
      break;
    case 2:
      document.getElementById("02").innerHTML = tool;
      break;
    case 3:
      document.getElementById("03").innerHTML = tool;
      break;
    default:
      document.getElementById(results).innerHTML = tool;
      break;
  }
}

//example of iteration: used to pick a random number for my boxes
function myRandom(n) {
 let r = Date.now()%n;
 for (i=0; i<r; i++) {
if (i == r) break;
 }
 console.log("r", r);
 return r;
};

// this sends my counter back to the beginning :correct
function getNextImage() {
  if (imageCounter++ >=10) imageCounter = 0; 
  imageURL.src = tooldata[imageCounter].ImageLink;
}
