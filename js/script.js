/*
    * Inizializzare array
    * Input Email
    * Output Benvenuto
    * Lanciare i dadi
    * Output Vincitore
    
*/

// Inizializzo array
var emails = ["pippo@gmail.com", "pluto@live.it", "paperino@hotmail.it"];
var users = ["Pippo", "Pluto", "Paperino"];

console.log(emails);
console.log(users);

var username = document.getElementById("username");

// Input dati

var userEmail = prompt("Inserisci la tua Email", "pippo@gmail.com");
var user;
var flag = -1;

// Verifica email
for (var i = 0; i < emails.length; i++) {
    if (userEmail === emails[i]){
        user = users[i];
        flag = i;
        console.log("flag for: ", flag)
        console.log(userEmail);
        console.log(user);
    }
}

if (flag === -1) {
    console.log("flag: ", flag)
    var choice = prompt("Email non trovata, creare nuovo utente?", "si");
    if (choice === "si") {
        var newUser = prompt("Inserisci il tuo username");
        emails.push(userEmail);
        users.push(newUser);
        user = newUser
    } else {
        window.location.reload();
    }
}

username.innerHTML = user;
console.log(username)

/* 
* Lancio Dadi
*/

var userDice = Math.floor(Math.random() * 6) + 1;
var cpuDice = Math.floor(Math.random() * 6) + 1;

console.log("userDice: ", userDice);
console.log("cpuDice: ", cpuDice);


if (userDice > cpuDice) {
    console.log("Hai vinto");
} else if (userDice < cpuDice) {
    console.log("Hai perso")
} else {
    console.log("Pareggio")
}
