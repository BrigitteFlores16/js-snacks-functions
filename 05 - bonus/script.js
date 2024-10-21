/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
//* Dichiara la funzione qui.
//* Invoca la funzione qui e stampa il risultato in console
//*Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


function salutoNome(nome)
{
    let now = new Date();
    let ora = now.getHours();
    if(ora >= 0 && ora < 13)
    {
        return "buongiorno " + nome;
    } 
    else if(ora >= 13 && ora < 17 )
    {
        return "buon pomeriggio " + nome;
    }
    else
    {
        return "buonasera " + nome;
    }

}

console.log(salutoNome(name));

