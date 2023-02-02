
// function playVideo(video) {
//   video.play();
// }
// function pauseVideo(video) {
//   video.pause();
// }


var video = document.getElementById("video");
video.addEventListener("mouseover", function () {
  playVideo(video);
});
video.addEventListener("mouseout", function () {
  pauseVideo(video);
});
