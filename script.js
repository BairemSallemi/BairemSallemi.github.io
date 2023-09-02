// JavaScript to show the Lottie animation after a 2-second delay
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("lottie-container").style.display = "block";
    // Load the Lottie animation here
    // Replace 'animation.json' with the path to your Lottie animation JSON file
    lottie.loadAnimation({
      container: document.getElementById("lottie-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "guitarAnimation.json", // Replace with your animation file path
    });
  }, 2000); // 2 seconds delay
});
