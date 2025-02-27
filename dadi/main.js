//Variabili User e Bot

//Lancio Del player
const diceUser = Math.floor(Math.random() * 6) + 1;
console.log("Hai lanciato:" + " " + diceUser);

//Lancio del bot
const diceBot = Math.floor(Math.random() * 6) + 1;
console.log("Il bot ha lanciato:" + " " + diceBot);

// Condizioni 
if (diceUser > diceBot) {
    console.log("Hai Vinto");
} else if (diceUser < diceBot) {
    console.log("Hai Perso");
} else {
    console.log("Pari");
}
