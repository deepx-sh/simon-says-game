let userSeq = [];
let computerSeq = [];

let btn = ["yellow", "red", "green", "blue"]; //random button flash
// This two array used for compare the sequence

let highScore = 0;
let levelCount = 0;
let gameStarted = false;

let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
document.addEventListener("keydown", function () {
  if (gameStarted == false) {
    //Only one time game start after starting the game
    console.log("Game Start");
    gameStarted = true;
    h3.classList.remove("war");
    levelUp();
  }
});

window.addEventListener("click", function () {
  if (gameStarted == false) {
    //Only one time game start after starting the game
    console.log("Game Start");
    gameStarted = true;
    h3.classList.remove("war");
    levelUp();
  }
});
// Flash Button

function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  levelCount++;
  h3.innerText = `Level ${levelCount}`;

  // Random Button Flash
  let randIdx = Math.floor(Math.random() * 4);
  let randmCol = btn[randIdx];
  let randBtn = document.querySelector(`#${randmCol}`);

  //   console.log(randIdx);
  //   console.log(randmCol);
  //   console.log(randBtn);

  // Color push into computer sequence array
  computerSeq.push(randmCol);
  console.log(computerSeq);

  btnFlash(randBtn);
}

function checkSeq(idx) {
  //   let idx = levelCount - 1; //here level -1 because level score is equally to element in array
  if (userSeq[idx] === computerSeq[idx]) {
    if (userSeq.length == computerSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.classList.add("war");
    h3.innerText = `Game over Your Score is ${levelCount} Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "bisque";
    }, 200);
    if (highScore < levelCount) {
      highScore = levelCount;
      h4.innerText = `High Score ${highScore}`;
    }
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  // check answer
  checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameStarted = false;
  userSeq = [];
  computerSeq = [];
  levelCount = 0;
  //   h3.classList.remove("war");
}
