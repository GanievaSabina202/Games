questionWrapper = {
    q1: {
        text: "Question1 ?",
        answer: ["a", "b", "c", "d"],
        trueAnswer: "a"
    },
    q2: {
        text: "Question2 ?",
        answer: ["a", "b", "c", "d"],
        trueAnswer: "b"
    },
    q3: {
        text: "Question3 ?",
        answer: ["a", "b", "c", "d"],
        trueAnswer: "c"
    },
    q4: {
        text: "Question4 ?",
        answer: ["a", "b", "c", "d"],
        trueAnswer: "c"
    },
    q5: {
        text: "Question5 ?",
        answer: ["a", "b", "c", "d"],
        trueAnswer: "c"
    }
}
class questionGame {
    headerQuestion = document.querySelector("#header-question")
    questionVariantWrapper = document.querySelector(".questionVariantWrapper")
    winWrapper = document.querySelector("#winWrapper")
    LoseWrapper = document.querySelector("#LoseWrapper")
    questions = [];
    questionIndex = 0;
    win = 0;
    lose = 0;
    uservariant = null
    constructor(obj) {
        this.questions = Object.values(obj)
    }
    userFindFunc(item) {
        if ("abc".indexOf(item) === -1) {
            alert("A B C");
            return
        }
        this.uservariant = item
        this.nextQuestionFunc()
    }

    showQuestionFunc() {
        this.headerQuestion.innerHTML = this.questions[this.questionIndex].text
        this.questionVariantWrapper.innerHTML = this.questions[this.questionIndex].answer.map((i) => {
            return `
            <div class="col-6">
                <span>${i}</span>
            </div>`
        }).join("")
    }

    nextQuestionFunc() {
        let TrueAnswer = this.questions[this.questionIndex].trueAnswer
        if (!this.questions) {
            alert("Bosdur Bura")
        }
        if (TrueAnswer == this.uservariant) {
            this.winWrapper.innerHTML =
                `<span id="winWrapper">Xal: ${this.win +=10}</span>`
        } else {
            this.LoseWrapper.innerHTML =
                `<span id="LoseWrapper">Səhv cavablar:  ${this.lose +=1}</span>`
        }
        this.questionIndex++
        this.showQuestionFunc()
        this.aa()
    }


}
let StartGame = new questionGame(questionWrapper)
StartGame.showQuestionFunc()
window.onkeydown = (event) => {
    StartGame.userFindFunc(event.key)
}