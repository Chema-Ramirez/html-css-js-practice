let salary = parseInt(prompt("How much money do you earn?", 0));
let result = document.getElementById("result")

switch(salary){
    case 500: 
    result.innerHTML = "You work part-time";
    break;

    case 1000: 
    result.innerHTML = "You have the minimum salary";
    break;

    case 1700: 
    result.innerHTML = "You have a good salary";
    break;

    case 2500: 
    result.innerHTML = "You have an extraordinary salary";
    break;

    default:
        result.innerHTML = "You are a student";
        break;
}