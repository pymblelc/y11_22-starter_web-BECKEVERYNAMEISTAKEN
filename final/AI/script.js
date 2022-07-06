let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");

let imageURL = myImage.src;

myButton.addEventListener("click", function () {
    //myText.I
    q= PIXABAY_URL + "?yellow+flowers&image_type=photo";
        ImageAPI.searchPhotos( q ,function(imagedata) {
      results = imagedata;
      myText.innerHTML = results;
    })
    return;
    ImageAPI.analyseImage(imageURL, function (data) {
      //  console.log(data[0].faceAttributes.age);  
     // for (let i = 0; i < data.length; i++) {
     //   let age = data[i].faceAttributes.age;
        //let lipstick = data[i].faceAttributes.makeup.lipMakeup;
     //   let results = '<p>Face ' + (i + 1) + ': age is' + age + ', lipstick = '
      //                  + lipstick + '</p>';
      let results = "test";
        myText.innerHTML += results; 
     // }

    });
});


//        finalInfo += "and has" + data[0].faceAttributes.facialhair.moustache + "moustage";
/*
results.innerHTML = imageURL;
ImageAPI.annalyseFaces(imageURL, function(data){
    for 
}
        let finalInfo = "Dr Hadwen looks about" + data[0].faceAttributes.age + "years old";

        results.innerHTML = finalInfo;
*/

/*import 'js-camera';

// Camera element
const camera = document.querySelector('#camera');

// Open the camera.
// If necessary, you can also specify the resolution like "await camera.open('back', 1920, 1080)".
document.querySelector('#btnOpen').addEventListener('click', async () => {
  await camera.open('back');
});

// Close the camera.
document.querySelector('#btnClose').addEventListener('click', () => {
  if (!camera.opened)
    return;
  camera.close();
});

// Pause
document.querySelector('#btnPause').addEventListener('click', () => {
  if (!camera.opened)
    return;
  camera.pause();
});

// Play camera
document.querySelector('#btnPlay').addEventListener('click', () => {
  if (!camera.opened)
    return;
  camera.play();
});

// Take a photo
document.querySelector('#btnCapture').addEventListener('click', () => {
  if (!camera.opened)
    return;
  // Get the photo data taken
  let base64 = camera.capture();
  console.log(`Capture: ${base64}`);// Capture: data:image/png;base64,iVBORw0K

  // You can specify image/webp, image/png, image/jpeg as the capture format.
  // Default is image/png.
  base64 = camera.capture({format: 'image/webp'});
  console.log(`WebP capture: ${base64}`);// WebP capture: data:image/webp;base64,UklGRrb

  // You can also resize the capture with width, height, and fit options.
  base64 = camera.capture({
    fit: 'cover',
    width: 300,
    height: 200
  });
  console.log(`Resize capture: ${base64}`);// Resize capture: data:image/png;base64,iVBORw0K
});
*/