const keys = document.querySelectorAll(".key");

// sab keys ko audio number assign kar do (28 → 63)
keys.forEach((key, index) => {
  key.dataset.audio = 28 + index;
});

document.addEventListener("keydown", function(e) {
  let pressedKey = e.key.toUpperCase();
  let el = document.getElementById(pressedKey);

  if(el){
    // visual press
    el.style.transform = "scale(0.95)";
    el.style.background = "orange";

    // audio play
    let num = el.dataset.audio;
    let audio = new Audio(`audio/${num}.mp3`);
    audio.currentTime = 0;
    audio.play();
  }
});

document.addEventListener("keyup", function(e) {
  let pressedKey = e.key.toUpperCase();
  let el = document.getElementById(pressedKey);

  if(el){
    el.style.transform = "scale(1)";

    if(el.classList.contains("black")){
      el.style.background = "black";
    } else {
      el.style.background = "white";
    }
  }
});