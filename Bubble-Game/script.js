document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector("#startButton");
  const topPanel = document.querySelector("#top");
  const bottomPanel = document.querySelector("#bottom");
  const bgMusic = document.querySelector("#bgMusic");

  startButton.addEventListener("click", function () {
    bgMusic.play();

    startButton.style.display = "none";
    topPanel.style.display = "flex";
    bottomPanel.style.display = "flex";
    let isMusicPlaying = false;

    // Function to play/pause the music
    function toggleMusic() {
      if (isMusicPlaying) {
        bgMusic.pause();
      } else {
        bgMusic.play();
      }
      isMusicPlaying = !isMusicPlaying;
      updateMusicControlText();
    }

    function updateMusicControlText() {
      musicControl.textContent = isMusicPlaying ? "Pause" : "Play";
    }

    musicControl.addEventListener("click", toggleMusic);

    startButton.addEventListener("click", function () {
      bgMusic.play();
    });

    var timer = 60;
    var score = 0;
    var hitNum = 0;

    // function for increasing score
    function increaseScore() {
      score += 10;

      document.querySelector("#scoreVal").textContent = score;
    }

    // function for newhit
    function newHit() {
      hitNum = Math.floor(Math.random() * 10);
      document.querySelector("#hitVal").textContent = hitNum;
    }

    // Function to make bubbles
    function makeBubble() {
      let mess = "";

      for (let i = 1; i <= 126; i++) {
        let num = Math.floor(Math.random() * 10);
        mess += `<div class="bubble">${num}</div>`;
      }

      document.querySelector("#bottom").innerHTML = mess;
    }

    // Function to run timer
    function runTimer() {
      var time = setInterval(function () {
        if (timer > 0) {
          timer--;
          document.querySelector("#timerVal").textContent = timer;
        } else {
          clearInterval(time);
          document.querySelector(
            "#bottom"
          ).innerHTML = `<h1>GAME OVER</h1> <h1>SCORE ${score} </h1>`;
        }
      }, 1000);
    }

    // Checking clicked number and hit number is same or not
    document
      .querySelector("#bottom")
      .addEventListener("click", function (details) {
        var clickedNum = Number(details.target.textContent);

        if (clickedNum === hitNum) {
          increaseScore();
          makeBubble();
          newHit();
        }
      });

    newHit();
    runTimer();
    makeBubble();
  });
});
