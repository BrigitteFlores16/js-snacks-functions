/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
// * Dichiara la funzione qui.
//* Invoca la funzione qui e stampa il risultato in console
//*Risultato atteso se si passa 'javascript': 3 (a, a, i)

function numeroVocali(nomi)
{
   let vocali = ["a","e","i","o","u"];
   let numero_vocali = 0;
   for(let i = 0; i< nomi.length;i++ )
   {
    for(let j = 0; j < vocali.length;j++)
    {
        if(nomi[i][0] == vocali[j])
        {
            numero_vocali++;
        }
    }
   }
    return numero_vocali;
}
console.log(numeroVocali(word));

