

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
    background: "transparent",
    bgvalue: ""
  };

  let musicplay = false;

  let blankurl = `url(hats/hat0.png)`

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
    state.background = "color";
    state.bgvalue = rgbValue;
    document.getElementById("background").style.background = rgbValue;
  }



  function nextScene() {
    const fileList = ["backgrounds/admin-building.jpg", "backgrounds/agricultural-building.jpg", "backgrounds/bullmaiden.jpg", "backgrounds/germany-building.jpg", "backgrounds/horse.jpg", "backgrounds/liberalarts.jpg", "backgrounds/machinery-hall-1.jpg", "backgrounds/moose.jpg"]
    const random = Math.floor(Math.random() * fileList.length)
    const urlstring = fileList[random];
    let bgurl = `url(${urlstring})`;
    state.background = "scene";
    state.bgvalue = urlstring;
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

  
  // Function to download data to a file
  function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
                console.log("show me " + url);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
  }

  function saveDoll(){
    let mannequin = new Image(450, 380);
    mannequin.setAttribute('crossorigin', 'anonymous');
    mannequin.src = "dresses/doll0.png";
    let dresspic = new Image(450, 380);
    dresspic.setAttribute('crossorigin', 'anonymous');
    dresspic.src = `dresses/doll${state.dress}.png`;
    let hatpic = new Image(450, 380);
    hatpic.setAttribute('crossorigin', 'anonymous');
    hatpic.src = `hats/hat${state.hat}.png`;
    
    // const exportcanvas = document.getElementById("export").getContext("bitmaprenderer");

    const canvas = new OffscreenCanvas(450, 380);
    const ctx = canvas.getContext("2d");
    

    if (state.background == "transparent"){
      ctx.fillStyle = "white";
      ctx.fillRect(0,0,450, 380);

    }
    else if (state.background == "color"){
      ctx.fillStyle = state.bgvalue;
      ctx.fillRect(0,0,450, 380);
    }
    else if (state.background == "scene"){
      let backgroundurl = state.bgvalue;
      let backgroundpic = new Image(450, 380);
      backgroundpic.src = backgroundurl;
      ctx.drawImage(backgroundpic,0,0,450, 380)
    }
    else{
      ctx.fillStyle = "white";
      ctx.fillRect(0,0,450, 380);
    }

    ctx.drawImage(mannequin,0,0,450, 380);
    ctx.drawImage(dresspic,0,0,450, 380);
    ctx.drawImage(hatpic,0,0,450, 380);
    --
    // First: transfer your canvas into an ImageBitmap
    new bmp;
    bmp = ctx.transferToImageBitmap();

    // Get a bitmaprenderer context
    const bmpctx = outputCanvas.getContext('bitmaprenderer');

    // Transfer the ImageBitmap into the new canvas
    bmpctx.transferFromImageBitmap(bmp);

    // --- Now offer download functionality ---
    outputCanvas.toBlob((blob) => {
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, "image.png");
      } else {
        const objectURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = objectURL;
        a.download = "myDress.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(objectURL); // Release memory
      }
    }, 'image/png'); // MIME type
  }