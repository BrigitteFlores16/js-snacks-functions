/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
// *Dichiara la funzione qui.
// *Invoca la funzione qui e stampa il risultato in console
//* Risultato atteso: ["A", "L", "M", "A", "G", "A"]
function estraiIniziali(nomi){
    let nomi_con_lettere_iniziali = [];
for(let i=0 ; i< nomi.length; i++ )
    {
        let nome_estratto = nomi[i]
        let lettera_iniziale = nome_estratto[0];
        nomi_con_lettere_iniziali.push(lettera_iniziale);
    }
    return nomi_con_lettere_iniziali;
}
let risultato_funzione = estraiIniziali(names);
console.log(risultato_funzione);