let loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    document.body.style.overflow = "hidden"
    window.setTimeout(() => {
      loader.style.display = "none";
      document.body.style.overflowY = "scroll"
    }, 1000)
  })