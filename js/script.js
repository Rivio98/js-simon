// Funzione per generare un numero random tra 1 e 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

// Funzione per generare un array di 5 numeri unici
function createArray() {
    let numbers = [];
    // Verifico la lunghezza array e se minore di 5 pusho il numero nell'array
    while (numbers.length < 5) {
        // Genero il numero con la funzione di sopra 
        let num = generateRandomNumber();
        // Verifico se il numero è incluso nell'array
        if (!numbers.includes(num)) {
            // Pusho il numero nell'array
            numbers.push(num);
        }
    }
    return numbers;
}

// Assegno a una variabile la function per l'array
let random_numbers = createArray();

document.getElementById('random_numbers').innerHTML = random_numbers;

// Setto l'intervallo
setTimeout(function () {
    document.getElementById('random_numbers').innerHTML = '';
}, 5000);

setTimeout(function () {
    // Creo array vuoto per l'utente
    let user_numbers = [];
    // Creo un ciclo for di 5 iterazioni per fare 5 volte il prompt
    for (let i = 0; i < 5; i++) {
        // Chiedo all'utente di inserire un numero per 5 volte
        let userInput = prompt('Inserisci un numero tra 1 e 100');
        // Convertiamo l'input dell'utente in numero
        let userNum = parseInt(userInput, 10);
        // Verifico che l'input sia un numero valido
        if (!isNaN(userNum) && userNum >= 1 && userNum <= 100) {
            user_numbers.push(userNum);
        } else {
            alert('Numero non valido, per favore inserisci un numero tra 1 e 100');
            i--; // Decremento i per chiedere di nuovo lo stesso numero
        }
    }

    // Array numeri indovinati
    let guessed = [];
    // Controllo che i numeri inseriti dall'utente siano presenti in quelli random
    for (let i = 0; i < user_numbers.length; i++) {
        if (random_numbers.includes(user_numbers[i])) {
            guessed.push(user_numbers[i]);
        }
    }

    // Mostro i numeri indovinati
    document.getElementById('random_numbers').innerHTML = `Hai indovinato ${guessed.length} numeri. E sono: ${guessed.join(', ')}`;
}, 10000); // Ho aumentato l'intervallo a 10 secondi per dare più tempo all'utente
