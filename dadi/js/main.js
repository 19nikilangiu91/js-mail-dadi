
// Genero i miei numeri.
let mieiNumeri = Math.floor(Math.random() * 6) + 1;
console.log("I miei numeri", mieiNumeri);

// Genero i numeri del Computer.
let pcNumeri = Math.floor(Math.random() * 6) + 1;
console.log("I numeri del Computer", pcNumeri);

let ilMio = document.getElementById("textmiei");
let ilPc = document.getElementById("textpc");
// Creo la condizione

if(mieiNumeri > pcNumeri){
    ilMio.append(mieiNumeri);
    ilPc.append(pcNumeri);
    console.log("Hai Vinto, sei troppo forte!", mieiNumeri);
} else if (mieiNumeri == pcNumeri){
    ilMio.append(mieiNumeri);
    ilPc.append(pcNumeri);
    console.log("La Partita è pari", mieiNumeri, pcNumeri);
} else{
    ilMio.append(mieiNumeri);
    ilPc.append(pcNumeri);
    console.log("Ha Vinto il Computer, riprova e sarai meno sfortunato!", pcNumeri);
}