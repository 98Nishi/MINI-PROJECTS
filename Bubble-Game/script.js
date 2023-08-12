document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector("#startButton");
  const topPanel = document.querySelector("#top");
  const bottomPanel = document.querySelector("#bottom");

  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    topPanel.style.display = "flex";
    bottomPanel.style.display = "flex";

    var timer = 60;
    var score = 0;
    var hitNum = 0;

    function increaseScore() {
      score += 10;

      document.querySelector("#scoreVal").textContent = score;
    }

    function newHit() {
      hitNum = Math.floor(Math.random() * 10);
      document.querySelector("#hitVal").textContent = hitNum;
    }

    function makeBubble() {
      let mess = "";

      for (let i = 1; i <= 126; i++) {
        let num = Math.floor(Math.random() * 10);
        mess += `<div class="bubble">${num}</div>`;
      }

      document.querySelector("#bottom").innerHTML = mess;
    }

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

    document.querySelector("#bottom").addEventListener("click", function (details) {
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
