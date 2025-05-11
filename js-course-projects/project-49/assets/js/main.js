window.addEventListener("load", () => {
    let input = document.querySelector(".form__input");
    let form = document.querySelector(".main__form");
    let list = document.querySelector(".form__list");

    const add = (task, completed = false) => {
        if (!task || task.trim() === "") return;

        let item = document.createElement("li");
        item.classList.add("list__item");
        if (completed) item.classList.add("list__item--completed");

        item.innerHTML = `
            <div class="list__task">
                <input type="checkbox" class="task__check" ${completed ? "checked" : ""}/>
                <p class="task__text">${task}</p>
            </div>
            <i class="fa-solid fa-trash list__delete"></i>
        `;

        list.appendChild(item);

        let checkbox = item.querySelector(".task__check");
        checkbox.addEventListener("change", () => {
            item.classList.toggle("list__item--completed");
        });

        let deleteBtn = item.querySelector(".list__delete");
        deleteBtn.addEventListener("click", () => {
            item.remove();
        });

        input.value = "";
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        add(input.value);
    });
});

