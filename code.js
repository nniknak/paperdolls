let state = {
    dress: -1,
    hat: 0,
    background: 0,
  };

  nextDress();
  nextHat();
  nextBackground();

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
    if (state.dress < 40) {
      state.dress++;
      dress.setAttribute("class", `dress${state.dress}`);
    } else if (state.dress === 40) {
      state.dress = 0;
      dress.setAttribute("class", `dress${state.dress}`);
    }
  }
  
  function nextHat() {
    let shoes = document.querySelector("#shoes");
    if (state.shoes < 3) {
      state.shoes++;
      shoes.setAttribute("class", `shoes${state.shoes}`);
    } else if (state.shoes === 3) {
      state.shoes = 0;
      shoes.setAttribute("class", `shoes${state.shoes}`);
    }
  }
  function nexthair() {
    let hair = document.querySelector("#hair");
    if (state.hair < 5) {
      state.hair++;
      hair.setAttribute("class", `hair${state.hair}`);
    } else if (state.hair === 5) {
      state.hair = 0;
      hair.setAttribute("class", `hair${state.hair}`);
    }
  }
  
  function nextBackground() {
    let hat = document.querySelector("#hat");
    if (state.hat < 4) {
      state.hat++;
      hat.setAttribute("class", `hat${state.hat}`);
    } else if (state.hat === 4) {
      state.hat = 0;
      hat.setAttribute("class", `hat${state.hat}`);
    }
  }
