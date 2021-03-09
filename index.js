var suits, numbers, suitsBottom, i;
var card = {
    suits: ["&#9830", "&#9829", "&#9824", "&#9827"],
    numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

};

function generarNumero() {
    var numero = Math.floor(Math.random() * (card.numbers.length));
    document.getElementById('randomNumber').innerHTML = card.numbers[numero];
}

function crearEstilo() {
    var allSuits = Math.floor(Math.random() * (card.suits.length));
    document.getElementById('topSuit').innerHTML = card.suits[allSuits];
    document.getElementById('bottomSuit').innerHTML = card.suits[allSuits];

    //agregar color dependiendo de la carta
    if (card.suits[allSuits] === "&#9830" || card.suits[allSuits] === "&#9829") {
        document.getElementById("theCard").classList.add("red");
    } else if (card.suits[allSuits] === "&#9827" || card.suits[allSuits] === "&#9824") {
        document.getElementById("theCard").classList.remove("red");

    }
}

window.wholeCard = function () {
    generarNumero();
    crearEstilo();

};

window.onload = function primerCarta() {
    generarNumero();
    crearEstilo();
    timer();
}

var count = 11;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;

    console.log(count);
    if (count == 1) {
        count = 10;
        generarNumero();
        crearEstilo();

    }
    if (count <= 0) {
        clearInterval(counter);
        return;
    }

}


function selectNumber() {
    var num = document.getElementById("numero").value;
    document.getElementById('randomNumber').innerHTML = card.numbers[num-1];
}

function tipo() {
    var type = document.getElementById("tipo").value;

    document.getElementById('topSuit').innerHTML = card.suits[type];
    document.getElementById('bottomSuit').innerHTML = card.suits[type];

    //agregar color dependiendo de la carta
    if (card.suits[type] === "&#9830" || card.suits[type] === "&#9829") {
        document.getElementById("theCard").classList.add("red");
    } else if (card.suits[type] === "&#9827" || card.suits[type] === "&#9824") {
        document.getElementById("theCard").classList.remove("red");

    }
}

function crear() {
    selectNumber();
    tipo()

}