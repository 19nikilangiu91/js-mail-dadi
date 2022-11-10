// Chiedere all'utente di inserire il nominativo per vedere se è nella lista.

// let richiesta = prompt("Inserisci il tuo nome per vedere se sei nella lista");

// Inserire le persone nella lista.

let inLista = ["Luca@ciaone.it", "Marco@ciaone.it", "Paolo@ciaone.it"];
console.log(inLista);

// Creo l'input. 

let richiesta = document.getElementById("text");


// Creo Bottone.

let bottone = document.getElementById("miobottone");


// Creo il contenitore output

let uscita = document.getElementById("uscita");


// Creo l'array

bottone.addEventListener("click",

    function(){

        // Inserire le persone non in lista.
        
        let inputUtente = richiesta.value;
        console.log(inputUtente);
        let possoEntrare = false;

        // Ciclo

        for (let i = 0; i < inLista.length; i++){
    
            // Creo la condizione
            // Se il nome è in lista la persona sarà vera.
        
            if (inputUtente === inLista[i]){
                
                possoEntrare = true;
            }
        }

        if (possoEntrare == true){
            console.log(possoEntrare, "può entrare");
            document.getElementById("uscita"). innerHTML = "Sei nella lista, puoi entrare!";
        } else {
            console.log(possoEntrare, " non può entrare" );
            document.getElementById("uscita"). innerHTML = "Non sei nella lista, puoi entrare!";
        }
        
    }

);







