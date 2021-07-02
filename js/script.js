/*

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

// Verifica email
for (var i = 0; i < emails.length; i++) {
    if (userEmail === emails[i]){
        user = users[i];
        console.log(userEmail)
        console.log(user);
    }
}

username.innerHTML = user;
console.log(username)

