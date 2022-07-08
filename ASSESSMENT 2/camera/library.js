let myImage = document.getElementById("camera--output");
let myButton = document.getElementById("camera--analyse");
let results = document.getElementById("myText");
var objects;
let imageURL = myImage.src="";

myButton.addEventListener("click", function () {
  // myText.innerHTML = imageURL;
  ImageAPI.analyseImage(imageURL, function (data) {
   // console.log(data.description.tags);
// for (let i = 0; i < data.length; i++) {
  let objects = (data);
  let results = '<p>Object ' + ': '+ objects + '</p>';
  myText.innerHTML += results;
  console.log(data);
// }

  });
});
    


 objects = [
     {
        "rectangle":{
           x : "",
           y : "",
           sides : 4,
        },
        "triangle" : {
          x : "",
          y : "",
          sides : 3,
        },
        "circle" : {
          x : "",
          y: "",
          sides : 1,
        }
      }
      ]
 
