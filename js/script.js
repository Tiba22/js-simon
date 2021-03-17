

// GOAL:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// Funzione per generare numeri random
function getRandom(min, max){
  var minRnd = min;
  var maxRnd = max - min + 1;
  return  Math.floor(Math.random() * maxRnd) + minRnd;
}


// Genero un array di 5 elemnti
var arrNumPC = [];
while (arrNumPC.length < 5){
  var numRnd = getRandom(1, 20);
  if (!arrNumPC.includes(numRnd)){
    arrNumPC.push(numRnd);
  }
}

alert(arrNumPC);

// Input dell'utente
setTimeout(function(){
  var arrayUtente = [];
  var numeriOk = [];
  while(arrayUtente.length < 5){
    var numeroUtente = parseInt(prompt("inserisci il numero"));
    if(!arrayUtente.includes(numeroUtente)){
      arrayUtente.push(numeroUtente);
      if (arrNumPC.includes(numeroUtente)){
        numeriOk.push(numeroUtente);
      }
    }
  }
  console.log(arrayUtente, numeriOk);
}, 3000);
console.log(arrNumPC);
