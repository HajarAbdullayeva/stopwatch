const startBtn = document.querySelector("#start-button");
const stopBtn = document.querySelector("#stop-button");
const resetBtn = document.querySelector("#reset-button");
const timerContainer = document.querySelector("#timer");

const stopwatch = { elapsedTime: 0 };

startBtn.addEventListener("click", () => {
  startStopwatch();
  stopBtn.disabled = false;
  startBtn.disabled = true;
  resetBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  startBtn.disabled = false;

  stopwatch.elapsedTime += Date.now() - stopwatch.startTime;
  clearInterval(stopwatch.intervalId);
});

resetBtn.addEventListener("click", () => {
  resetBtn.disabled = true;
  startBtn.disabled = false;
  stopBtn.disabled = true;

  stopwatch.elapsedTime = 0;
  stopwatch.startTime = Date.now();
  displayTime(0, 0, 0, 0);
});

function startStopwatch() {
  stopwatch.startTime = Date.now();
  stopwatch.intervalId = setInterval(() => {
    const elapsedTime =
      Date.now() - stopwatch.startTime + stopwatch.elapsedTime;
    const milliseconds = parseInt(elapsedTime % 1000);
    const seconds = parseInt((elapsedTime / 1000) % 60);
    const minutes = parseInt((elapsedTime / (1000 * 60)) % 60);
    displayTime(minutes, seconds, milliseconds);
  }, 100);
}

function displayTime(m, s, ms) {
  timerContainer.innerHTML =
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms);
}
