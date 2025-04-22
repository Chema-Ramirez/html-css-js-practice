window.addEventListener("DOMContentLoaded", (event) => {

    let followers = document.querySelectorAll(".socials__number");
    let counter = 0;

    followers.forEach(follower => {

        let max = parseInt(follower.getAttribute("data-target"));

        let inter = setInterval(() => {
            let actual = parseInt(follower.innerHTML);
            counter = max / 300;

            if (actual > max) {
                follower.innerHTML = max;
                clearInterval(inter)
            } else {
                follower.innerHTML = Math.ceil(counter + actual);
            }
        }, 10);

    })
})