// Detecting Button press
var list = document.getElementsByClassName("drum");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
var clickedButton=this.innerHTML;
makeSound(clickedButton);
addAnimation(clickedButton);
  });
};
// Detecting Keyboard press
document.addEventListener("keypress",function(event){
  var pressedChar= event.key;
  makeSound(pressedChar);
  addAnimation(pressedChar);
});
// function to make sound
function makeSound(pressedChar){

  if (pressedChar === "w") {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play( );
  } else if (pressedChar === "a") {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
  } else if (pressedChar === "s") {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  } else if (pressedChar === "d") {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  } else if (pressedChar === "j") {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  } else if (pressedChar === "k") {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  } else if (pressedChar === "l") {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
  }
};

// Make Animation
function addAnimation(currentKey){
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed")
  },100);
}
