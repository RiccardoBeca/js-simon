/* 
CONSEGNA

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**Consigli del giorno:**
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.


1. Genero un numero random creando una funzione con random math
2. Creo un ciclo for per avere 5 numeri random
3. Creo un array dove inserisco i 5 numeri random
4. Creo un ciclo  while per creare  5 prompt per richiedere all'utente 5 numeri
5. creo un array vuoto dove andro' a pushare i 5 numeri inseriti dall'uente 
6. confronto i due array e controllo se i numeri inseriti dall'utente sono anche nell'array dei numeri generati randomicamente

*/


const estraiNumeri = document.querySelector("button");

let numeriPc = [];
let numeriUtente = [];


// funzione per numeri random 

function estraiNumeriRandom(min, max) {
  return Math.floor( Math.random() * (max - min + 1) + min );
}


// ciclo for per estrarre 5 numeri e pusharli nell'array

for (let i = 0; i < 5; i++) {

  numeriEstratti = estraiNumeriRandom(1, 100)
  console.log(numeriEstratti);
  numeriPc.push(numeriEstratti)
  console.log(numeriPc);
  
}













// getNumbers.addEventListener("click", getRandomNumbers);

// let pcNumbers = [];

// function getRandomNumbers() {
//   pcNumbers = 
//   pcNumbers.length = 0;
//   for (let i = 0; i < 5; i++) {

//     let numeroEstratto = Math.ceil(Math.random() * 100);
     
//     console.log(numeroEstratto);   
    
//     pcNumbers.push(numeroEstratto);
//     console.log(pcNumbers);
//   }

//   let outputNumbers = document.querySelector(".output");
//   outputNumbers.append(pcNumbers);
  
  
// }









