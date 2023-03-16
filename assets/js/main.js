/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


//Palidromo
//chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedere all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');
const reverseWord = wordReverse(userWord);

//Creare una funzione per capire se la parola inserita è palindroma
function wordReverse(word) {
  const reverse = word.split('').reverse().join('');

  return reverse;
}

if(userWord == reverseWord){
  console.log('La parola è palindroma');
} else {
  console.log('La parola non è palindroma');
}


//Pari e Dispari
//scelgo pari o dispari e inserisco un numero da 1 a 5
//generiamo un numero random (1/5) per il pc (usando una funzione)
//sommiamo i due numeri
//stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//dichiariamo chi ha vinto


//scelgo pari o dispari e inserisco un numero da 1 a 5
const selectWord = prompt('Scelgo Pari o Dispari:');
const selectNumber = Number(prompt('scelgo un numero da 1 a 5:'));


//generiamo un numero random (1/5) per il pc (usando una funzione)
function pcRandom() {
  let num = Math.round(Math.random()* 5) + 1;
  return num;
}
let num = pcRandom();
console.log(num, 'Numero PC');

//sommiamo i due numeri
const sumNumbers = selectNumber + num;
console.log(sumNumbers, 'Somma Totale');


//stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sumOddOrEven() {
let sumOddEven = sumNumbers
let wordUser = selectWord
let messages;
if (wordUser == "pari" && sumOddEven % 2 == 0) {
  console.log(sumOddEven, 'Pari');  
  //dichiariamo chi ha vinto  
  messages = "HAI VINTO!";
  console.log(messages);
} else if (wordUser == "pari" && sumOddEven % 2 != 0){
  console.log(sumOddEven, 'Dispari')
  //dichiariamo chi ha vinto
  messages = "HAI PERSO!"
  console.log(messages);
} else if (wordUser == "dispari" && sumOddEven % 2 != 0) {
  console.log(sumOddEven, 'Dispari'); 
  //dichiariamo chi ha vinto   
  messages = "HAI VINTO!";
  console.log(messages);
} else if (wordUser == "dispari" && sumOddEven % 2 == 0) {
  console.log(sumOddEven, 'Pari'); 
  //dichiariamo chi ha vinto
  messages = "HAI PERSO!";
  console.log(messages);
}  
}
let oddEven = sumOddOrEven()
