// Chiedere all'utente di inserire il nominativo per vedere se è nella lista

let richiesta = prompt("Inserisci il tuo nome per vedere se sei nella lista");

// Inserire le persone nella lista

let inLista = ["Luca", "Marco", "Paolo"];

// Inserire le persone non in lista

let possoEntrare = false;

// Creo l'array

for (let i = 0; i < inLista.length; i++){
    
    // Creo la condizione
    // Se il nome è in lista la persona sarà vera.

    if (richiesta === inLista[i]){
        
        possoEntrare = true;
    }
    
    if (possoEntrare == true){
        console.log("Complimenti puoi entrare");
        document.getElementById("title"). innerHTML = "Sei nella lista, puoi entrare!";
    } else {
        console.log("Mi dispiace, non puoi entrare");
        document.getElementById("title"). innerHTML = "Non sei nella lista, puoi entrare!";
    }
}


