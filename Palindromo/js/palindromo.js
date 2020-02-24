
var frase = prompt('Inserisci una stringa');
var fraseInvertita =  frase.split("").reverse().join("");
var check= isPali(frase , fraseInvertita);


function isPali(str1, str2) {
    if (str1 == str2) {
        console.log(frase, 'è palindromo!');
        return true;
    } else {
    console.log(frase, 'non è palindromo!');
    return false;
    }
}
