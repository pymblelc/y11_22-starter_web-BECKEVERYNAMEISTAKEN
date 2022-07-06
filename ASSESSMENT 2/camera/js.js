var constraints = {video: {facingMode:"user "}, audio: false};

const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),
    cameraClear = document.querySelector("#camera--clear")

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

    cameraTrigger.onclick = function() {
        cameraSensor.width = cameraView.videoWidth;
        cameraSensor.height = cameraView.videoHeight;
        cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
        cameraOutput.src = cameraSensor.toDataURL("image/webp");
        cameraOutput.classList.add("taken");
    };

    window.addEventListener("load", cameraStart, false);

cameraClear.onclick = function() {
    cameraSensor.width = "#fff"
    cameraSensor.height = "#fff";
}

//document.getElementById("taken").src = "test.png";

cameraAnalyse.onclick = function() {
    analyseImage("taken", callback) 
        const url = "test.png";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": ACS_KEY
            },
            body: JSON.stringify({
                url: imageUrl
            }),
        });
        const data = await response.json();
        if (callback) {
            callback(data);
        }
    
        return data;
    }

