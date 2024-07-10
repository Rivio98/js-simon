//funzione per generare 5 numeri random
function generateFiveNumbers(num) {
    return Math.floor(Math.random() * 100 + 1);
}

//funzione per generare array dei numeri
function createArray() {
    let array = [];
    //verifico la lunghezza array e se minore di 5 pusho il numero nell'array
    while (numbers < 5) {
        //genero il numero con la funzione di sopra 
        let num = generateFiveNumbers();
        //verifico se il numero è incluso nell'array
        if (!numbers.includes(numbers)); {
            //pusho il numero nell array
            array.push(num);
        }
    }
    return numbers;
}