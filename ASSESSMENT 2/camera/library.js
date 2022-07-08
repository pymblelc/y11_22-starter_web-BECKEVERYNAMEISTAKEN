let myImage = document.getElementById("camera--output");
let myButton = document.getElementById("camera--analyse");
let results = document.getElementById("myText");

let imageURL = myImage.src="";

myButton.addEventListener("click", function () {
  // myText.innerHTML = imageURL;
  ImageAPI.analyseImage(imageURL, function (data) {
   // console.log(data.description.tags);
// for (let i = 0; i < data.length; i++) {
  let shape = (data);
  let results = '<p>Object ' + ': '+ shape + '</p>';
  myText.innerHTML += results;
  console.log(data);
// }

  });
});
    
