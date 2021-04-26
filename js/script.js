var nome = prompt("Ciao! Qual è il tuo nome?");
console.log(nome);
var cognome = prompt("e il tuo cognome?");
console.log(cognome);
var colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);
var numero = 21;

document.getElementById("name").innerHTML = nome;
document.getElementById("surname").innerHTML = cognome;

document.getElementById("passwd").innerHTML = nome + cognome + colore + numero;