let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");

let imageURL = myImage.src;

myButton.addEventListener("click", function () {
  // myText.innerHTML = imageURL;
  ImageAPI.analyseImage(imageURL, function (data) {
   // console.log(data.description.tags);
// for (let i = 0; i < data.length; i++) {
  let shape = data.description.tags;
  let results = '<p>Object ' + ': '+ shape + '</p>';
  myText.innerHTML += results;
// }

  });
});
    