window.addEventListener("load", () => {

    let selection = document.querySelector(".selection");
    let close = document.querySelector(".selection__close");
    let selectedBox = document.querySelector(".slection__image");
    let imageSelected = document.querySelector(".image__selected")
    let images = document.querySelectorAll(".main__image");


    images.forEach(image => {

        let img = image.querySelector(".image__item")
        image.addEventListener("click", () => {
            imageSelected.setAttribute("src", img.getAttribute("src"));
            selection.classList.add("selection__show")
        })
    });

    close.addEventListener("click", () => {
        selection.classList.remove("selection__show")
    })
})