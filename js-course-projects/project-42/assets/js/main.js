window.addEventListener("load", () => {

    let input = document.querySelector(".search__input");
    let button = document.querySelector(".search__btn");
    let container = document.querySelector(".main__users");

    const USERS_URL = "https://reqres.in/api/users";

    let getUsers = () => {
        fetch(USERS_URL)
            .then(response => response.json())
            .then(response => {
                let users = response.data

                users.forEach(user => {
                    container.innerHTML += `
                                    <article class="users__user">
                    <div class="user__container-img">
                        <img class="user__img"
                            src="${user.avatar}"
                            alt="wow">
                    </div>
                    <div class="user__content">
                        <p class="user__name">${user.first_name} ${user.last_name}</p>
                        <p class="user__email">${user.email}</p>
                    </div>
                </article>
                    `
                });
            })
            .catch(error => console.log(error));
    }

    let searchUsers = (search) => {
        let users = document.querySelectorAll(".users__user");
        users.forEach(user => {
            let userInfo = user.innerText.toLoweCase();

            if (userInfo.includes(search.toLoweCase()) || search.trim() == "") {
                user.classList.remove("hidden");
            } else {
                user.classList.add("hidden");
            }
        })
    }

    getUsers();

    input.addEventListener("input", () => {
        searchUsers(input.value);
    })

    btn.addEventListener("click", () => {
        e.preventDefault();
        searchUsers(input.value);
    })
})