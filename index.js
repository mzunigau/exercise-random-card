var suits, numbers, suitsBottom, i; 
var card ={
 suits: ["&#9830", "&#9829", "&#9824", "&#9827"], 
 numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

}; 
 
function generarNumero() {
	var numero = Math.floor(Math.random() * (card.numbers.length));
	document.getElementById('randomNumber').innerHTML = card.numbers[numero];
}

function crearEstilo(){
	var allSuits = Math.floor(Math.random() * (card.suits.length));
	document.getElementById('topSuit').innerHTML = card.suits[allSuits];
	document.getElementById('bottomSuit').innerHTML = card.suits[allSuits];
	
	//agregar color dependiendo de la carta
	if (card.suits[allSuits]==="&#9830" || card.suits[allSuits]==="&#9829"){
		document.getElementById("theCard").classList.add("redSuit");
	}else if (card.suits[allSuits]==="&#9827" || card.suits[allSuits]==="&#9824"){
			document.getElementById("theCard").classList.remove("redSuit");
	
	}
}

window.wholeCard = function(){
	generarNumero();
	crearEstilo();

};

window.onload = function primerCarta(){
    generarNumero();
	crearEstilo();
}