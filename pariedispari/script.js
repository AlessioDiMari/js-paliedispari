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
    const esito = document.getElementById("esito");

    // Faccio la somma tra il numero utente e quello del computer
    let somma = numeroUtente + numeroComputer;

    // Creo un if per decidere se la somma è peri o dispari
    let risultato;

    if (somma % 2 == 0 ){
        risultato = "pari";
    } else {
        risultato = "dispari"
    }

}