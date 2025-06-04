var TEMP = document.getElementById("temp");
var TARGET = document.getElementById("target");
var CARD = temp.querySelector("card");

for(var i = 0; i < 52; i++){
    var cardCopy = CARD.cloneNode(true);

    cardCopy.innerHTML = "silver " + i;
    cardCopy.style.backgroundPositionX = -(i) + "00%";
    EventTarget.append(cardCopy)
}

class Card{
    constructor(num){
        this.id = num;
        this.suit = num;
        this.value = num;
        
    }
    getsuit(){return suit}
    getdom(){
        return document.createElement()

        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "silver " + this.id;
        cardCopy.style.backgroundPositionX = -(this.id) + "00%";
        EventTarget.append(cardCopy);
    }

    draw(){
        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "silver " + this.id;
        cardCopy.style.backgroundPositionX = -(this.id) + "00%";
        cardCopy.style.backgroundPositionY = -(this.id / 13) + "00%";
        TARGET.append(cardCopy);
    }
}

function createDeck(num){
    var deck = [];
    for(var i = 0; i < num; i++){deck.push(i)}

    return deck
}

function shuffleDeck(deck){
    for (var i = 0; i < deck.length; i++){
        //swap places of lots of cards (at random)
        var rng = Math.floor(Math.random() * deck.length);
        var card1 = deck[i];
        var card2 = deck[rng];
        deck[i] = card2;
        deck[rng] = card1;
        
    }
}

var CARDS = createDeck(52);
shuffleDeck(CARDS);
console.log(CARDS);
DECK[0].draw();