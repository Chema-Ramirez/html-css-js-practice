window.addEventListener("DOMContentLoaded", event => {
    
    let number = 0;
    let result = false;

    do {
        number = parseInt(prompt("Enter a number to see if it is pair or odd."))
    } while (number <=0);

    function isPair(x){
        if(x%2 == 0) {
            return true
        }else{
            return false
        }
    }

    result = isPair(number);

    let resultBox = document.querySelector("#result");
    let message = "The number "+number+" is odd"

    if(result==true){
        message = "The number "+number+" is pair";
    }

    console.log(message)
alert(message)
resultBox.innerHTML = `<h1>${message}</h1>`;
})