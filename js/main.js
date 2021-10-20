// Password generator

// Ottieni nome dell'utente
const nomeUtente = prompt ('Qual è il tuo nome?')
console.log(nomeUtente);
console.log(typeof nomeUtente);

// Ottieni cognome dell'utente
const cognomeUtente = prompt ('Qual è il tuo cognome?')
console.log(cognomeUtente);
console.log(typeof cognomeUtente);

// Chiedi qual è il suo colore preferito
const colorePreferito = prompt ('Qual è il tuo colore preferito?')
console.log(colorePreferito);
console.log(typeof colorePreferito);

// Mostra password a schermo
// 1 seleziona elemento HTML
// 2 inserisci il contenuto
//document.getElementById('password').innerHTML = 'La tua password è: ' + nomeUtente + cognomeUtente + colorePreferito + '21';
document.getElementById('password').innerHTML = `La tua password è: ${nomeUtente}${cognomeUtente}${colorePreferito}21`;