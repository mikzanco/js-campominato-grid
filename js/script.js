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



function init(numElements){
    // faccio il quadrato del numElements con pow per creare il numero giusto di quadrati
    const totalSquares = Math.pow(numElements, 2);
    // vado a creare un ciclo per creare poi nella funzione gli square con un conteggio
    for(let i = 0; i < totalSquares; i++){
        createSquare(i);
    }
}

function createSquare(idSquare){
    // vado a creare i quadratini e li appendo al container 
    const square = document.createElement('div');
    square.className = 'square'; 
    square.innerHTML = idSquare + 1;
    square.idElement = idSquare + 1;
    // aggiungo l'addEventListner per creare un click su tutte le celle
    square.addEventListener('click', clickSquare)
    container.append(square);
}

function clickSquare(){
    // con this ottengo l'elemento HTML che ho cliccato.
    console.log(this.idElement);
    
    
    
}




