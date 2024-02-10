/*
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per
il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri
è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari)
della somma ha vinto, altrimenti ha perso.
*/

// Creo una funzione che si attiverà al "click" del
// button "play-button"

function calcolaEsito() {

    // Dichiaro il numero scelto dall'utente
    let numeroUtente = Number(document.getElementById("numero-utente").value);

    // Dichiaro il pronostico dell'utente
    let sceltaUtente = document.getElementById("scelta-utente").value;

    // Creo il numero casuale generato dal computer
    let numeroComputer = Math.floor(Math.random() * 5) + 1;

    // Inizializzo il risultato
    const risultato = document.getElementById("risultato");

    
}