
// Genero i miei numeri.
let mieiNumeri = Math.floor(Math.random() * 6) + 1;
console.log("I miei numeri", mieiNumeri);

// Genero i numeri del Computer.
let pcNumeri = Math.floor(Math.random() * 6) + 1;
console.log("I numeri del Computer", pcNumeri);

// Creo la condizione

if(mieiNumeri > pcNumeri){
    console.log("Hai Vinto, sei troppo forte!", mieiNumeri);
} else if (mieiNumeri == pcNumeri){
    console.log("La Partita è pari", mieiNumeri, pcNumeri)
} else{
    console.log("Ha Vinto il Computer, riprova e sarai meno sfortunato!", pcNumeri);
}