let imageCounter = 0; //start of image array
let imageURL = document.getElementById("animalPhoto");
let score = 0;
let results = document.getElementById("resultsText");
let scoreDisplay = document.getElementById("scoreText");

function displayImage(){
    let myButton = document.getElementById("start_btn");
    let div = document.getElementById("hideImage");
   
    if (div.style.display === "none") {
        div.style.display = "block";
            imageURL.src = gamedata[imageCounter].ImageLink;

      } else {
        div.style.display = "none";
      }
}

function checkImage(animalType){

    if (document.getElementById("hideImage").style.display != "block") return; 
    ImageAPI.analyseImage(gamedata[imageCounter].ImageLink, function (data) {
    let shape = data.description.tags[0];
    let results = '<p>Object ' + ': '+ shape + '</p>';
    resultsText.innerHTML = results;
    if (shape == animalType)
    {
        score++;
        scoreDisplay.innerHTML = "Your Score is: " + score;
    }
    getNextImage();

  });


}

function getNextImage(){
    imageCounter++;
    imageURL.src = gamedata[imageCounter].ImageLink;
}

