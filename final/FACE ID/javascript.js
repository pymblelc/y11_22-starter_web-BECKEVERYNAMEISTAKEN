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
})
