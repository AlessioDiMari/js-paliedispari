// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma

// Inizializzo l'input
const userWord = document.getElementById("user-word");

// Creo una funzione che al click del button verifichi se
// la parola inserita sia palindroma
const buttonVerify = document.getElementById("verify");

buttonVerify.addEventListener("click", function(){

    // memorizzo la parola inserita nell'input
    let word = userWord.value;

    // Inizializzo una variaile dove inserirò le
    // lettere della variabile nell'ordine inverso
    let flippedWord = "";

    // Creo un ciclo inverso per inserire le lettere della
    // della parola inserite dall'utente nella nuova variabile
    for ( let i = word.length - 1; i >= 0 ; i--){

        flippedWord += word[i];
        
    }
    
    // Creo un if per verificare che le due parole siano identiche
    if( word === flippedWord){
        document.getElementById("esito").innerHTML = "Le parole sono palindrome";
    } else {
        document.getElementById("esito").innerHTML = "Le parole non sono palindrome";
    }
    

})
