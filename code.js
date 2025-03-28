function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

let state = {
    dress: 0,
    hat: 0,
    background: 0,
  };

  let musicplay = false;

  let blankurl = `url(hats/blank.png)`

  function nextDress() {
    if (state.dress < 39) {
      state.dress++;
      console.log(state.dress);
    } else if (state.dress === 39) {
      state.dress = 0;
    }
    let dressurl = `url(dresses/doll${state.dress}.png)`
    document.getElementById("dress").style.backgroundImage = dressurl;
  }

  function previousDress() {
    if (state.dress > 0) {
      state.dress--;
      console.log(state.dress);
    } else if (state.dress === 0) {
      state.dress = 39;
    }
    let dressurl = `url(dresses/doll${state.dress}.png)`
    document.getElementById("dress").style.backgroundImage = dressurl;
  }

  function nextHat() {
    if (state.hat < 23) {
      state.hat++;
      console.log(state.hat);
    } else if (state.hat === 23) {
      state.hat = 0;
    }
    if (state.hat>0){
      let haturl = `url(hats/hat${state.hat}.png)`
      console.log(haturl)
      document.getElementById("hat").style.backgroundImage = haturl;
    }
    else if (state.hat === 0){
      document.getElementById("hat").style.backgroundImage = blankurl;
    }
    console.log(document.getElementById("dress").style.zIndex)
  }
  
  function previousHat() {
    if (state.hat > 0) {
      state.hat--;
      console.log(state.hat);
    } else if (state.hat === 0) {
      state.hat = 23;
      console.log(state.hat);
    }
    if (state.hat>0){
      let haturl = `url(hats/hat${state.hat}.png)`
      document.getElementById("hat").style.backgroundImage = haturl;
    }
    else if (state.hat === 0){
      document.getElementById("hat").style.backgroundImage = blankurl;
    }
  }
  


  function nextBackground() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.getElementById("background").style.background = rgbValue;
  }



  function nextScene() {
    const fileList = ["backgrounds/admin-building.jpg", "backgrounds/agricultural-building.jpg", "backgrounds/bullmaiden.jpg", "backgrounds/germany-building.jpg", "backgrounds/horse.jpg", "backgrounds/liberalarts.jpg", "backgrounds/machinery-hall-1.jpg", "backgrounds/moose.jpg"]
    const random = Math.floor(Math.random() * fileList.length)
    const urlstring = fileList[random];
    let bgurl = `url(${urlstring})`;
    document.getElementById("background").style.backgroundSize = "contain";
    document.getElementById("background").style.backgroundImage = bgurl;
  }

  function resetAll(){
    state.dress = 0;
    let dressurl = `url(dresses/doll${state.dress}.png)`
    document.getElementById("dress").style.backgroundImage = dressurl;

    state.hat = 0;
    document.getElementById("hat").style.backgroundImage = blankurl;

    state.background = 0;
    document.getElementById("background").style.backgroundImage = blankurl;
    document.getElementById("background").style.background = "white";  
  }


  var myAudio = new Audio("victor.mp3");

  function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  }

