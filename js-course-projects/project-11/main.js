let phrase = "This course has many projects"

let word = prompt(`In this phrase "${phrase}", what words would you like to modify?`)

let replacement = prompt(`You have to choose to replace the word: "${word}, what word would you like to replace it with?`)

function replace(originalWord, replacementWord){
    let search = phrase.search(originalWord);
    let finalPhrase = phrase

    if(search && search != -1){
        finalPhrase = phrase.replace(originalWord, replacementWord)
    
    }else{
        finalPhrase = "That word does not exist";
    }
    return finalPhrase;
} 

alert(replace(word, replacement))