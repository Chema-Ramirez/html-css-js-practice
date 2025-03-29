const salaries = [1050, 640, 750, 1500, 2200, 3011, 432];

let userSalary = parseInt(prompt("What is your salary?"));

function searchSalaries(salaries, mySalary) {
    let search = salaries.filter(salary => salary >= mySalary);
    let order = search.sort((a, b) => a - b);
    console.log("There are several salaries higher than "+ mySalary + ", these are:");

    for(let i in order) console.log(order[i]);
}

searchSalaries(salaries, userSalary);
