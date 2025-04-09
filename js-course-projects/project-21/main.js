window.addEventListener("DOMContentLoaded", (e) => {

    let inventoryDom = document.querySelector(".main__inventory");
    let boxes = document.querySelectorAll(".inventory__box");
    let shelfDom = document.querySelectorAll(".store__shelf");

    boxes.forEach((box, i) => {
        box.setAttribute("id", "box" + i)

        box.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", e.target.id);
        })
    })

    shelfDom.forEach((shelf, i) => {
        shelf.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        shelf.addEventListener("drop", function (e) {
            e.preventDefault();
            let boxId = e.dataTransfer.getData("id");

            if (boxId && boxId != "") {
                let box = document.querySelector("#" + boxId);
                if (this.lastChild == null) {
                    e.target.appendChild(box);
                    this.style.boxShadow = "none";

                } else {
                    alert("This shelf is complete");
                }

                shelfDom.forEach(shelf => {
                    if (shelf.lastChild == null) {
                        shelf.style.boxShadow = "0 0 8px black inset"
                    }
                });
                if (inventoryDom.innerHTML.trim() == "") {
                    alert("All the boxes have been stored");
                }
            }
        })
    })


})