var startD = document.querySelector("#start");
var clock = document.querySelector("#clock");
var pauseD = document.querySelector("#pause");
var resetD = document.querySelector("#reset");
var lapD = document.querySelector("#lap");
var ulD = document.querySelector("#ul");

var ms = 0, s = 0, m = 0, time

class ClockFunc {
    startClock() {
        if (!this.time) {
            this.time = setInterval(this.run, 300);
        }
    }
    run() {
        this.ms++;
        if (this.ms == 100) {
            this.ms = 0;
            this.s++;
        }
        if (this.s == 60) {
            this.s = 0;
            this.m++;
        }
        let result = (this.m < 10 ? "0" + this.m : this.m) + ":" + (this.s < 10 ? "0" + this.s : this.s) + ":" + (this.ms < 10 ? "0" + this.ms : this.ms)
        clock.innerHTML = result
        return result
    }
    pause() {
        clearInterval(this.time);
        this.time = false;
    }
    reset() {
        ms = 0
        s = 0
        m = 0
        time = 0
    }

    lap(){
        if(this.time){
            let li = document.createElement("li");
            li.innerText = result;
            laps.appendChild(li);
        }
    }
}
let StartGame = new ClockFunc()
startD.addEventListener('click', () => StartGame.startClock())
pauseD.addEventListener("click", () => StartGame.pause())
resetD.addEventListener("click", () => StartGame.reset())
lapD.addEventListener("click", () => StartGame.lap())
