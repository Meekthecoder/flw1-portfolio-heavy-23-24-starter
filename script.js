let mute =document.querySelector(".mute");
audio = document.querySelector("audio");

mute.addEventListener("click", function(){
  audio.muted = !audio.muted;
});