let text = prompt("Insert a word");

function countAndUpperLetters(word){
    let upper = word.toUpperCase();
    let counter = word.length;

    return "The word is "+upper+" and have "+counter+" letters"; 
}

alert(countAndUpperLetters(text)); 