let concessionaire = [
    {
        brand: "Mercedes",
        models: ["clase A", "clase B", "clase C"]
    },
    {
        brand: "Audi",
        models: ["A5", "Q7", "R8"]
    },
    {
        brand: "Renault",
        models: ["Megane", "Clio", "Captur"]
    }
];

function display(dates){

    let boxConcessionaire = document.querySelector("#concessionaire")

    dates.forEach(cars => {
        boxConcessionaire.innerHTML += `<h1>${cars.brand}</h1>`

        boxConcessionaire.innerHTML += `<ul>`

        cars.models.forEach(model => {
            boxConcessionaire.innerHTML += `<li>${model}</li>`
        })

        boxConcessionaire.innerHTML += `</ul>`
    });
}

display(concessionaire)