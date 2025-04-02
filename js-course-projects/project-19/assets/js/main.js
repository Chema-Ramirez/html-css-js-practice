window.addEventListener("DOMContentLoaded", (event) => {
    let articles = document.querySelector(".layout__articles");
    let title = document.querySelector("#title");
    let subtitle = document.querySelector("#subtitle");
    let description = document.querySelector("#description");
    let form = document.querySelector(".form__create");

    let newArticles = JSON.parse(localStorage.getItem("articles")) || [];

    function createArticle() {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (title.value && subtitle.value && description.value) {
                let article = {
                    title: title.value,
                    subtitle: subtitle.value,
                    description: description.value
                };

                newArticles.push(article);
                localStorage.setItem("articles", JSON.stringify(newArticles));
                showArticles();
            } else {
                alert("Missing data in the form");
            }
        });
    }

    function layoutArticle(article) {
        let layout = `<article class="layout__card">
                <header class="card__header">
                    <p class="header__author">${article.subtitle}</p>
                </header>
                <div class="card__content">
                    <h2 class="content__title">${article.title}</h2>
                    <p class="content__description">${article.description}</p>
                    <button class="content__btn">Read more</button>
                </div>
            </article>`;
        return layout;
    }

    function showArticles() {
        articles.innerHTML = "";

        if (newArticles.length > 0) {
            newArticles.reverse().forEach(article => {
                articles.innerHTML += layoutArticle(article);
            });
        }
    }

    createArticle();
    showArticles();
});
