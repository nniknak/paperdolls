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

  //function to change dress
  function nextDress() {
    let dress = document.querySelector("#dress");
    //code from the tutorial example:
    //   if (state.dress === 0) {
    //     dress.setAttribute("class", "dress1");
    //     state.dress++;
    //     console.log(state);
    //   } else if (state.dress === 1) {
    //     dress.setAttribute("class", "dress2");
    //     state.dress++;
    //     console.log(state);
    //   } else if (state.dress === 2) {
    //     dress.setAttribute("class", "dress3");
    //     //set back to 0
    //     state.dress = 0;
    //     console.log(state);
    //   }
  
    //my refactored version with LESS code and MORE scalability:
    if (state.dress < 39) {
      state.dress++;
      dress.setAttribute("class", `dress${state.dress}`);
    } else if (state.dress === 39) {
      state.dress = 0;
      dress.setAttribute("class", `dress${state.dress}`);
    }
  }

  function previousDress() {
    let dress = document.querySelector("#dress");
    if (state.dress > 0) {
      state.dress--;
      dress.setAttribute("class", `dress${state.dress}`);
    } else if (state.dress === 0) {
      state.dress = 39;
      dress.setAttribute("class", `dress${state.dress}`);
    }
  }
  
  function nextHat() {
    let hat = document.querySelector("#hat");
    if (state.hat < 3) {
      state.hat++;
      hat.setAttribute("class", `hat${state.hat}`);
    } else if (state.hat === 3) {
      state.hat = 0;
      hat.setAttribute("class", `hat${state.hat}`);
    }
    // Get the element you want to modify
    const element = document.getElementById("hat");

    // something here to generate the next filename

    // Change the background image
    element.style.backgroundImage = "url('new-image.jpg')"; 
  }
  
  function nextBackground() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.getElementById("background").style.background = rgbValue;


    /* for when there's a set of background images 
    if (state.hat < 4) {
      state.hat++;
      hat.setAttribute("class", `hat${state.hat}`);
    } else if (state.hat === 4) {
      state.hat = 0;
      hat.setAttribute("class", `hat${state.hat}`);
    }
  }
    */
  }

  function nextScene() {
    const fileList = ["backgrounds/admin-building.jpg", "backgrounds/agricultural-building.jpg", "backgrounds/bullmaiden.jpg", "backgrounds/germany-building.jpg", "backgrounds/horse.jpg", "backgrounds/liberalarts.jpg", "backgrounds/machinery-hall-1.jpg", "backgrounds/moose.jpg"]
    const random = Math.floor(Math.random() * fileList.length)
    const urlstring = fileList[random];
    console.log(typeof(urlstring))
    let bgurl = `url(${urlstring})`;
    console.log(bgurl);
    document.getElementById("background").style.backgroundSize = "contain";
    document.getElementById("background").style.backgroundImage = bgurl;


    /* for when there's a set of background images 
    if (state.hat < 4) {
      state.hat++;
      hat.setAttribute("class", `hat${state.hat}`);
    } else if (state.hat === 4) {
      state.hat = 0;
      hat.setAttribute("class", `hat${state.hat}`);
    }
  }
    */
  }


