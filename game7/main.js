var gamer = {
    "a": {
        name: "aa",
        health: 20,
        attack: 1
    },
    "b": {
        name: "bb",
        health: 16,
        attack: 2

    },
    "c": {
        name: "cc",
        health: 14,
        attack: 5

    },
    "d": {
        name: "dd",
        health: 17,
        attack: 7
    }
}

var aaa = Object.entries(gamer)
console.log(aaa[2][1].health);

$(".container").on("click", ".btnGamer", function () {
    var name = $(this).val()
    console.log(name);
})
