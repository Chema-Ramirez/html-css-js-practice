let tableContainer = document.querySelector(".tables");

let result = 0;

//Bucle para sacar el numero de la tabla
for (let i = 1; i <= 10; i++) {

    //Plantilla para sacar el numero de la tabla y crear caja àra las operaciones de la tabla
    tableContainer.innerHTML += `
    <div class="tables__item">
    <h2 class="tables__title">
    Tabla del ${i}</h2>

    <ul class="tables__list tables__list--${i}">
    
    </ul>
    </div>`;


    //Bucle para sacer numeros para las operaciones de la tabla
    for (let n = 1; n <= 10; n++) {


        //Resultado de la operacion
        result = i * n

        //Caja donde se muestra las operaciones
        let list = document.querySelector(".tables__list--" + i);


        //Agregar operacion
        list.innerHTML += `<li class ="list__item">${i + "x" + n + "=" + result}</li>`;
        }
    }