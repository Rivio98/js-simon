//funzione per generare 5 numeri random
function generateFiveNumbers(num) {
    return Math.floor(Math.random() * 100 + 1);
}

//funzione per generare array dei numeri
function createArray() {
    let numbers = [];
    //verifico la lunghezza array e se minore di 5 pusho il numero nell'array
    while (numbers.length < 5) {
        //genero il numero con la funzione di sopra 
        let num = generateFiveNumbers();
        //verifico se il numero è incluso nell'array
        if (!numbers.includes(num)); {
            //pusho il numero nell array
            numbers.push(num);
        }
    }
    return numbers;
}

//assegno a una variabile la function per l'array
let random_numbers = createArray();

document.getElementById('random_numbers').innerHTML = random_numbers;

//setto l'intervallo
setTimeout(function () {
    document.getElementById('random_numbers').style.display = 'none';

    //creo array vuoto per l'utente
    let user_numbers = [];

    //creo un ciclo for di 5 interazioni per fare 5 volte il prompt
})