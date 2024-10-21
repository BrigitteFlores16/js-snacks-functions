/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
//* Dichiara la funzione qui.
// *Invoca la funzione qui e stampa il risultato in console
//*Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

function estraiParoleConLettera(nomi,lettera_da_controllare)
{
    let nomi_restituiti = [];
    for(let i=0 ; i< nomi.length; i++ )
    {
        let nome_estratto = nomi[i]
        let lettera_iniziale = nome_estratto[0];
        if(lettera_iniziale === lettera_da_controllare)
        {
            nomi_restituiti.push(nome_estratto);
        }
    }
    return nomi_restituiti;
}
console.log(estraiParoleConLettera(names,'A'));

