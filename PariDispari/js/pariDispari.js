var mioNum = parseInt(prompt('Scegli un numero da 1 a 5'));
var checkPari = isPari();
var numeroRandom = numeriRandom();
var numeroFinale = mioNum + numeroRandom;


console.log('Il tuo numero è: ' + mioNum + " Il numero del computer invece è: " + numeroRandom + " la somma finale è di: " + numeroFinale);
if ((numeroFinale % 2 == 0) && (checkPari)) {
    console.log(numeroFinale + " è pari, hai vinto!");
} else if ((numeroFinale % 2 == 1) && (!checkPari)) {
    console.log(numeroFinale + " è dispari, hai vinto!");
} else {
    console.log('Mi dispiace, hai perso!');
}


function isPari(){
    do {
        var bloccoCiclo= false;
        var pari = prompt('Scegli pari o dispari: ');
        if (pari.toLowerCase() == 'pari') {
            return  true;
        } else if (pari.toLowerCase() == "dispari") {
            return false;
        } else {
            console.log('Dato incorreto, riprova')
            }
        }
     while (bloccoCiclo = true);
}

function numeriRandom () {
    return Math.floor((Math.random() *5)+1);
}
