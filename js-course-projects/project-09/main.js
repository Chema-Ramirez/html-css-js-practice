let result = 0;

function sumAll(...numbers){

    let resultBox = document.querySelector("#result");
    let numbersBox = document.querySelector("#numbers");

    numbersBox.innerHTML = "The numbers that have been used for the result are these: "

        for (let count = 0; count < numbers.length; count++){
            result += numbers[count];
            numbersBox.innerHTML += numbers[count];

            if(count !== numbers.length - 1)numbersBox.innerHTML += ", "
        }

        resultBox.innerHTML = "The result is: " + result;
}

sumAll(3,4,5,6,7,8,12);