
var frase = prompt('Inserisci una stringa');
var fraseInvertita =  frase.split("").reverse().join("");
var check;

check= isPali(frase , fraseInvertita);
if(check) {
    console.log(frase, 'è palindromo!');
} else {
    console.log(frase, 'non è palindromo!');
}

function isPali(str1, str2) {
    if (str1 == str2) {
        return true;
    }
    else {
    return false;
    }
}
