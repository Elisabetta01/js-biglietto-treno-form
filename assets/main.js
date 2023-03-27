/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.*/


function invioDati(){

     let nomeCognome = document.getElementById('nomeCognome').value;
     let km = parseFloat(document.getElementById('numeroKilometri').value);
     let eta = document.getElementById('eta').value;

     const prezzoAlKm = 0.21;

     let prezzo = km * prezzoAlKm;

     if (eta == 'minorenne'){
          prezzo = prezzo * 0.80
         
     } else if (eta == 'over'){
          prezzo = prezzo * 0.60
     }    

     document.getElementById('nomePasseggero').innerText = `${nomeCognome}`
     document.getElementById('offerta').innerText = `biglietto per ${eta}` 
     document.getElementById('carrozza').innerText = `${numCarrozza()}` 
     document.getElementById('codice').innerText = `${numCodice()}` 
     document.getElementById('prezzo').innerText = `${prezzo.toFixed(2)}€` 

     console.log(nomeCognome, km, eta, prezzo.toFixed(2))
}

function numCarrozza(){
     return Math.floor(Math.random() * 10) + 1
}

function numCodice(){
     return Math.floor(Math.random() * 10000) + 1
}



