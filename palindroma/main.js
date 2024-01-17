/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


let inserisciParola = prompt("Inserisci il tuo nome")
if(inserisciParola === palindroma(inserisciParola)){
    console.log("Parola Polindroma")
}else{
    console.log("Parola Normale")
}

function palindroma (word){
    let parolaAlContrario= ``


    for(let i= word.lenght-1; i>=0; i--){
        parolaAlContrario+= word[i]
       
    }
    return parolaAlContrario
}

console.log(palindroma(inserisciParola))