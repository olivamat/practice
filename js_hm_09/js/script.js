"use strict";

class timerString {
  constructor() {}

  static getTimeString(str) {
    let string = str;

    let min = Math.floor(string / 60000);
    string = string - min * 60000;

    let sec = Math.floor(string / 1000);
    string = string - sec * 1000;

    let mSec = Math.floor(string);

    if (min < 10) {
      min = "0" + min;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    return `${min}:${sec}:${mSec}`;
  }
}




console.log(timerString.getTimeString(111111));


class Timer {
  constructor(node, timerStringCont, btnClassStart, btnClassReset, lapsClass) {
    this.container = node;
    this.btnClassStart = btnClassStart;
    this.btnClassReset = btnClassReset;
    this.lapsClass = lapsClass;
    this.timerStringCont = timerStringCont;
    this.timerIsActive = false;
    this.resetIsActive = true;
    this.timerString = "00:00:000";
    this.timeStart = 0;
    this.deltatime = 0;
    this.updateTimerString;
    this.passedTime = 0;
    this.timeAfterPause = 0;
    this.lap = [];
  }

  render() {
    this.container.innerHTML = `
      <div class="${this.timerStringCont}">
      <p class="time js-time">${this.timerString}</p>
      </div>
      <button class="btn js-start ${this.btnClassStart}">Start</button>
      <button class="btn js-reset ${this.btnClassReset}">Reset</button>
      <ul class="laps js-laps"></ul>
      `;
  }

  startTimer() {
    if (this.timerIsActive) {
      clearInterval(this.updateTimerString);

      this.timeAfterPause = this.deltatime;

      document.querySelector(`.${this.btnClassStart}`).textContent =
        "Continued";
      document.querySelector(`.${this.btnClassReset}`).textContent = "Lap";

      this.timerIsActive = false;
      this.resetIsActive = false;
    } else {
      this.timeStart = +new Date();

      this.updateTimerString = setInterval(() => {
        this.deltatime = Date.now() - this.timeStart + this.timeAfterPause;

        this.passedTime = this.deltatime;

        this.timerString = timerString.getTimeString(this.passedTime);

        document.querySelector(`.${this.timerStringCont}`).textContent = `${
          this.timerString
        }`;
      }, 1);

      document.querySelector(`.${this.btnClassStart}`).textContent = "Pause";
      document.querySelector(`.${this.btnClassReset}`).textContent = "Reset";
      this.timerIsActive = true;
      this.resetIsActive = true;
    }
  }

  resettimer() {
    if (this.resetIsActive) {
      clearInterval(this.updateTimerString);

      this.timerIsActive = false;
      this.deltatime = 0;
      this.timeAfterPause = 0;
      this.passedTime = 0;
      this.timerString = "00:00:000";
      this.lap = [];

      document.querySelector(`.${this.btnClassStart}`).textContent = "Start";
      document.querySelector(`.${this.timerStringCont}`).textContent = `${
        this.timerString
      }`;
      document.querySelector(`.${this.lapsClass}`).innerHTML = "";
    } else {
      this.lap.push(this.timerString);

      document.querySelector(
        `.${this.lapsClass}`
      ).innerHTML = `${this.lap.reduce((acc, el) => {
        return acc + `<li> ${el}</li>`;
      }, "")}`;
    }
  }
}

const wrapper = document.querySelector(".wrapper");
const newTimer = new Timer(
  wrapper,
  "stopwatch",
  "btn_start",
  "btn_reset",
  "laps"
);

newTimer.render();

const buttonStart = document.querySelector(".btn_start");
const buttonReset = document.querySelector(".btn_reset");

buttonStart.addEventListener("click", newTimer.startTimer.bind(newTimer));
buttonReset.addEventListener("click", newTimer.resettimer.bind(newTimer));
