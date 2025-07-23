let mainDiv = document.getElementsByClassName("main-body")[0];
let points = document.getElementById('Score');
let divs = [];
let activeDiv = null;
let score = 0;
let timeoutId = null;

for (let i = 0; i < 12; i++) {
  let smallDiv = document.createElement("div");
  smallDiv.style.border = "1px solid black";
  smallDiv.style.width = "166.6px";
  smallDiv.style.height = "125px";
  smallDiv.style.boxSizing = "border-box";
  smallDiv.style.cursor = "pointer";
  smallDiv.style.backgroundColor = "white";

  divs.push(smallDiv);

  

  smallDiv.addEventListener("click", () => {

    
    

    if (smallDiv === activeDiv) {
      score++;
      console.log("Score:", score);
      points.innerText = score;
      activeDiv.style.backgroundImage = "";

      clearTimeout(timeoutId);
      activeDiv = null;
    } else {
      // Reset any active one
      if (activeDiv) {
        activeDiv.style.backgroundColor = "white";
        clearTimeout(timeoutId);
      }

      // Pick new random div

      let randomIndex = Math.floor(Math.random() * divs.length);
      while (divs[randomIndex] === smallDiv) {
        randomIndex = Math.floor(Math.random() * divs.length);
      }

      activeDiv = divs[randomIndex];
      activeDiv.style.backgroundImage = "url(cartoon-funny-mole_29190-3041.avif)";
      activeDiv.style.backgroundSize = "165px 124px";

      timeoutId = setTimeout(() => {
        if (activeDiv) {
          activeDiv.style.backgroundImage = "";

          activeDiv = null;
        }
      }, 500);

    }
  });

  mainDiv.appendChild(smallDiv);
}
