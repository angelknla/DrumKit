function animation(currentKey){
  var actButton = document.querySelector("."+ currentKey);
  actButton.classList.add("pressed");
  setTimeout(function () {
    actButton.classList.remove("pressed");
  }, 150);
}


function makeSound(key) {
  var sound = new Audio();
  switch (key) {
    case "w":
      sound.setAttribute("src", "sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      sound.setAttribute("src", "sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s":
      sound.setAttribute("src", "sounds/snare.mp3");
      sound.play();
      break;
    case "d":
      sound.setAttribute("src", "sounds/tom-1.mp3");
      sound.play();
      break;
    case "j":
      sound.setAttribute("src", "sounds/tom-2.mp3");
      sound.play();
      break;
    case "k":
      sound.setAttribute("src", "sounds/tom-3.mp3");
      sound.play();
      break;
    case "l":
      sound.setAttribute("src", "sounds/tom-4.mp3");
      sound.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animation(event.key);

});
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("mouseover", function() {
    makeSound(this.innerHTML);
    animation(this.innerHTML);
  });
}
