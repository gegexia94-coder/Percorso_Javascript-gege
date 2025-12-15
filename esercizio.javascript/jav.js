//ESERCIZIO 1 (variabili + costante)//
let num1 = 5;

let num2 = 10;

console.log("Before swap: num1 =", num1, ", num2 =", num2);

let Name = "Alice";

console.log("Hello, " + Name );

Name = "Bob";

console.log("Hello, " + Name );

const pi =3.14159265359 ;

console.log("The value of pi is: " + pi );

//ESERCIZIO 2 (somma e media di 5 numeri)//

//1) Crea 5 variabili numero//
const numero1 = 4;

const numero2 = 8;

const numero3 = 15;

const numero4 = 16;

const numero5 = 44;

 //2) Somma //

const soma= numero1 +numero2 +numero3 +numero4 +numero5;

//3) Media //

const media = soma / 5;

console.log("La somma dei numeri è: " + soma);

console.log("La media dei numeri è: " + media);

//ESERCIZIO 3 (età e anni per arrivare a 100)// 

//variabile età//

let annoCorrente = 2025;

let annoNascita = 1994;

let età = annoCorrente - annoNascita;
console.log("La tua età è: " + età);

//calcolo anni per arrivare a 100//
let mancantiAnni = 100 - età;

console.log("hai tot anni e ti mancano tot anni per compierne 100 ;" + età + " anni e ti mancano " + mancantiAnni + " anni per compierne 100.");
//ESERCIZIO 4 (numeri scelti dall’utente + operazioni)//

let a = Number(prompt("Inserisci il primo numero"));
let b = Number(prompt("Inserisci il secondo numero"));

if (isNaN(a) || isNaN(b)) {
    console.log("Per favore,fai sul Serio??NUMERII.");     
} else {
    let somma = a + b;
    let sottrazione = a - b;
    let moltiplicazione = a * b;
    let divisione = a / b;  
//1) Le console.log devono stare DENTRO l’else//
    console.log (`con i numeri da te scelti, i risultati sono:
    Somma: (${somma})
    Sottrazione: (${sottrazione})
    Moltiplicazione: (${moltiplicazione})
    Divisione: (${divisione})`) };
   