// DOM
var guessesLeftWrapper = document.querySelector("#guesses-left")
var lossesWrapper = document.querySelector("#loss-counter")
var wordWrapper = ["flower", "code", "nature", "peace"];
var randomFindword = "";
var dashWord = [];
var dashWordWrapper = [];
var wrongWrapper = []

var win = 0;
var guessesLeft = 9;
var losses = 0;

var randomFindword = wordWrapper[Math.floor(Math.random() * wordWrapper.length)];
var convertWord = randomFindword.split("")


function dashFunc() {
    for (let i = 0; i < convertWord.length; i++) {
        dashWord.push("_")
    }
    document.querySelector("#word-blanks").innerHTML = `${dashWord.join(" ")}`
}
dashFunc()

startGame = (e) => {
    var userFind = e.key.toLowerCase();
    for (var i = 0; i < convertWord.length; i++) {
        if (convertWord[i] === userFind) {
            dashWord[i] = convertWord[i]
            document.querySelector("#word-blanks").innerHTML = `${dashWord.join(" ")}`
            findwin()
        }
    }
    if (convertWord.indexOf(userFind) === -1) {
        wrongWrapper.push(userFind);
        document.querySelector("#wrong-guesses").innerHTML = `${wrongWrapper.join(" ")}`
        guessesLeftWrapper.innerHTML = guessesLeft--
        x()
        return
    }

    function findwin() {
        if (convertWord.toString() === dashWord.toString()) {
            win++
            document.querySelector("#win-counter").innerHTML = `${win}`
            alert("You Win")
            return
        }
    }
    function x() {
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            lossesWrapper.innerHTML = losses;
            return
        }
    }
}
window.onkeydown = startGame;
