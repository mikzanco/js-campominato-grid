// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
const container = document.querySelector('.container');
// creo il bottone che poi mi creerà la griglia
document.getElementById('start').addEventListener('click', function(){
    const elementsPerRow = 10;
    container.innerHTML = '';
    init(elementsPerRow);
})





function init(numElemets){
    const totalSquare = Math.pow(numElements, 2);

    for(let i = 0; i < totalSquare; i++){
        createSquare(i);
    }
}

function createSquare(idSquare){
    // vado a creare i quadratini e li appendo al container 
}

