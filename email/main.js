//Creazione Variabili Lista Degli Invitati
let listInvited = [
    "melo@gmail.com",
    "laura@gmail.com",
    "tony@gmail.com",
    "goku@gmail.com",
    "gaetano@gmail.com",
];

//Valore booleano
let access = false

//Prompt 
const emailUser = prompt("Inserisci la tua email");

//Condizioni
for (let n = 0; n < listInvited.length; n++) {
    if (listInvited[n] === emailUser) {
        access = true;
        break;
    }
}
if (access) {
    console.log("Sei in lista,benvenuto.");
}
else {
    console.log("Non sei in lista,mi dispiace.");

}
