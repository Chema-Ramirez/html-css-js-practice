window.addEventListener("DOMContentLoaded", () => {

    let articleLeft = document.querySelector(".main__article--left");
    let articleRight = document.querySelector(".main__article--right");

    articleLeft.addEventListener("mouseenter", () => {
        articleLeft.classList.add("active");
        articleRight.classList.add("inactive");
    });

    articleLeft.addEventListener("mouseleave", () => {
        articleLeft.classList.remove("active");
        articleRight.classList.remove("inactive");
    });

    articleRight.addEventListener("mouseenter", () => {
        articleRight.classList.add("active");
        articleLeft.classList.add("inactive");
    });

    articleRight.addEventListener("mouseleave", () => {
        articleRight.classList.remove("active");
        articleLeft.classList.remove("inactive");
    });
});
