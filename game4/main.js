questionWrapper = {
    q1: {
        text: "What1?",
        answer: ["a", "b", "c"],
        trueAnswer: "a"
    },
    q2: {
        text: "What2?",
        answer: ["a2", "b2", "c2"],
        trueAnswer: "c"
    },
    q3: {
        text: "What3?",
        answer: ["a3", "b3", "c3"],
        trueAnswer: "c"
    }
}
class questionGame {
    headerQuestion = document.querySelector("#header-question")
    questionVariantWrapper = document.querySelector(".questionVariantWrapper")
    questions = [];
    questionIndex = 0;
    win = 0;
    uservariant = null
    constructor(obj) {
        this.questions = Object.values(obj)
    }
    userFindFunc(item) {
        if ("abc".indexOf(item) === -1) {
            alert("A B C");
            return
        }
    }
    showQuestionFunc() {
        this.headerQuestion.innerHTML = this.questions[this.questionIndex].text
        this.questionVariantWrapper.innerHTML =
            this.questions[this.questionIndex].answer.map((i) => {
                return `<span >${i}</span>`
            }).join("")
    }

    nextQuestionFunc(){
        
    }


}
let StartGame = new questionGame(questionWrapper)
StartGame.showQuestionFunc()
window.onkeydown = (event) => {
    StartGame.userFindFunc(event.key)
}