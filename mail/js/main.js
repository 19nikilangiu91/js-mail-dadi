// Chiedere all'utente di inserire il nominativo per vedere se è nella lista

 let richiesta = prompt("Inserisci il tuo nome per vedere se sei nella lista");

// console.log(richiesta);

// Inserire le persone nella lista

let inLista = ["Luca", "Marco", "Paolo"];

// Inserire le persone non in lista

let outLista = false;

// Creo l'array

for (let i = 0; i < inLista.length; i++){

    // console.log(inLista[i]);

    // Creo la condizione
    // Se il nome è in lista la persona sarà vera.
    if (richiesta === inLista[i]) {
        console.log("Benvenuto alla festa", richiesta);

    } else (richiesta !== inLista[i])
        console.log("Non sei nella lista")
}