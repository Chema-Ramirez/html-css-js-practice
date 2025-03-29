let animals = ["dog", "cat", "snake", "horse", "tiger"]

const display = () => {
    document.write("<h1>Project 12 JS - Chema Ramirez</h1>");

for(let i = 0; i < animals.length; i++){
    let paragraph = `<p> This animal is ${animals[i]}</p>`;

    document.write(paragraph)
    }
}

display();