// Password generator

// Ottieni nome dell'utente
const nomeUtente = prompt ('Qual è il tuo nome?')

// Ottieni cognome dell'utente
const cognomeUtente = prompt ('Qual è il tuo cognome?')

// Chiedi qual è il suo colore preferito
const colorePreferito = prompt ('Qual è il tuo colore preferito?')

// Mostra password a schermo
//document.getElementById('password').innerHTML = 'La tua password è: ' + nomeUtente + cognomeUtente + colorePreferito + '21';
document.getElementById('password').innerHTML = `La tua password è: ${nomeUtente}${cognomeUtente}${colorePreferito}21`;