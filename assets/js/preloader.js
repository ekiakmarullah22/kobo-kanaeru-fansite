let preloader = document.getElementById("preloader");
let body = document.getElementsByTagName("body")[0];

window.addEventListener("load", function() {
    setTimeout(function() {
        preloader.style.display = "none";
        body.style.overflowY = "scroll";
    }, 1000);
});