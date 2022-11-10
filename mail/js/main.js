// Inserire le persone nella lista

let inLista = ["Luca", "Marco", "Paolo"];

// Inserire le persone non in lista

let outLista = false


// Chiedere all'utente di inserire il nominativo per vedere se è nella lista

 let richiesta = prompt("Inserisci il tuo nome per vedere se sei nella lista");

// console.log(richiesta);

// Creo l'array

for (let i = 0; i < inLista.length; i++){

    // Creo la condizione
    // Se il nome è in lista la persona sarà vera.
    if (richiesta === inLista[i]) {
        console.log("Benvenuto alla festa", richiesta);
    }
}