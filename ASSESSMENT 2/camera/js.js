// var something = localStorage.setItem('image', '');
// localStorage.getItem('image');
// localStorage.setItem('image', 'url'); //--> give that to a site to host and then return the link; look up hosting images and getting back the url as a variable, pass the variable into storage



// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),
    cameraAnalyse = document.querySelector("#camera--analyse"),
    cameraClear = document.querySelector("#camera--clear");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    //store this as a variable of some sort - we need to know what it needs to analyse
};

cameraAnalyse.onclick = function() {
    document.querySelector("taken");
    
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);


    //clear the camera
cameraClear.onclick = function() {
    cameraSensor.width = "#fff"
    cameraSensor.height = "#fff";
}