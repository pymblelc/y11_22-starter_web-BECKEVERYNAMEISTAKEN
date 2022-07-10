//local storage
document.querySelector("#myFileInput").addEventListener("change", function () {
    const reader = new FileReader ();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result); 
        console.log(reader.result);
    })
    reader.readAsDataURL(this.files[0]);

})


document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataURL = localStorage.getItem("recent-image");

    if (recentImageDataURL) {
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataURL);
    }
    console.log("should work man");
});

let myObject = {
    name: "Domenic",
    age : 56,
};

// localStorage.setItem("myObject", myObject);
// localStorage.getItem("myObject");
// localStorage.getItem("myObject").name;

//serialized just means to change the data into something more readable
let myObject_serialized = JSON.stringify(myObject);
console.log(myObject_serialized);

localStorage.setItem ("myObject",myObject);
console.log(localAtorage)