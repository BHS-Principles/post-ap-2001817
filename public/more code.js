//var temp = document.getElementById("");
//var target = document.getElementById("");
//var card = temp.querySelector("");

class Card{
    constructor(num){
        this.id = num;
        this.suit = num;
        this.value = num;
        
    }
    getsuit(){return suit}
    getdom(){return document.createElement()}
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