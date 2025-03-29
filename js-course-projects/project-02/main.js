let brand= "Audi",
    speed= 200,
    stock = true,
    models= ["R8", "A3", "Q3"];

let phrase =`<p>We have an ${brand} car, they go at a maximum speed of ${speed} km/h.</p>
<p>You have these models in stock ${stock}:</p>
`

models.forEach(models => {
    phrase += `- ${models} <br/>`;
});


let box = document.querySelector("#box")
box.innerHTML = phrase

