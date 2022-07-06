
//timer function

setInterval(myTimer, 1000);
function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML =
    d.toLocaleTimeString();
}

let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");

let imageURL = myImage.src;

myButton.addEventListener("click", function () {
    //myText.I
    ImageAPI.analyseImage(imageURL, function (data) {
      //  console.log(data[0].faceAttributes.age);  
     // for (let i = 0; i < data.length; i++) {
     //   let age = data[i].faceAttributes.age;
        //let lipstick = data[i].faceAttributes.makeup.lipMakeup;
     //   let results = '<p>Face ' + (i + 1) + ': age is' + age + ', lipstick = '
      //                  + lipstick + '</p>';
        myText.innerHTML += results; 
     // }

    });
});