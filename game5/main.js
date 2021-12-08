class Dom {
    static blue = $('#blueC');
    static red = $('#redC');
    static purple = $('#purpleC');
    static green = $('#greenC');
    static win = $('#win');
    static lose = $('#lose');
}

let currentScore = 0;
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    }
};
class Game extends Dom {
    lossCount = 0;
    winCount = 0;
    targetScore = 0;
    constructor(data) {
        super(data);
        this.data = data;
    }
    random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    targetCount = () => {
        this.targetScore = this.random(19, 150);
        $("#target-score").text(`${this.targetScore}`);
    }

   
    changeValue = () => {
        currentScore = 0;
        this.targetCount()
        $("#your-score").text(`${currentScore}`);
        this.data.blue.value = this.random(1, 12);
        this.data.red.value = this.random(1, 12);
        this.data.green.value = this.random(1, 12);
        this.data.purple.value = this.random(1, 12);
        Dom.win.text(`win ${this.winCount}`)
        Dom.lose.text(`lose ${this.lossCount}`)

    }

    currentCounter = (x) => {
        if (currentScore === this.targetScore) {
            alert("winner");
            this.winCount++;
            return this.changeValue();
        }

        else if (currentScore > this.targetScore) {
            alert('lose')
            this.lossCount++;
            return this.changeValue();
        }
        else {
            $("#your-score").text(`${currentScore}`);
            currentScore += x.value
        }
    }
}
let g = new Game(crystal);
g.targetCount();
g.changeValue();
$(document).on('click', '#blueC', () => g.currentCounter(crystal.blue))
$(document).on('click', '#redC', () => g.currentCounter(crystal.red))
$(document).on('click', '#greenC', () => g.currentCounter(crystal.green))
$(document).on('click', '#purpleC', () => g.currentCounter(crystal.purple))



