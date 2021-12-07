var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var redDom = document.querySelector("#red")
var purpleDom = document.querySelector("#purple")
var greenDom = document.querySelector("#green")
var blueDom = document.querySelector("#blue")

class Crystal {
    AllCrystal = {
        blue: {
            color: "blue",
            value: 0
        },
        red: {
            color: "red",
            value: 0
        },
        green: {
            color: "green",
            value: 0
        },
        purple: {
            color: "purple",
            value: 0
        },
        targetNum:{
            value:0
        }
    }
}

class Game extends Crystal {
    win = 0
    lose = 0
    NumberWrapper = 0
    constructor() {
        super()
    }
    setValue() {
        var NumberWrapper = 0
        var b = this.AllCrystal.blue.value = getRandom(1, 10)
        var r = this.AllCrystal.red.value = getRandom(1, 10)
        var p = this.AllCrystal.purple.value = getRandom(1, 10)
        var g = this.AllCrystal.green.value = getRandom(1, 10)
        var t = this.AllCrystal.targetNum.value = getRandom(11, 100);
        blueDom.addEventListener("click", function () {
            console.log(
                StartGame.NumberWrapper += b
            );
        })
        redDom.addEventListener("click", function () {
            console.log(
                StartGame.NumberWrapper += r

            );
        });
        greenDom.addEventListener("click", function () {
            console.log(
                StartGame.NumberWrapper += g
            );
        });
        purpleDom.addEventListener("click", function () {
            console.log(
                StartGame.NumberWrapper += p
            );
        })
        console.log(t);
        if (NumberWrapper == t) {
            console.log("heheheh");
        }
    }
}


let StartGame = new Game(getRandom(1, 10), getRandom(1, 10), getRandom(1, 10), getRandom(1, 10), getRandom(11, 100));
console.log(StartGame.setValue());
