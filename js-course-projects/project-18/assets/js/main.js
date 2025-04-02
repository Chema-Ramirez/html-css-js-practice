window.addEventListener("DOMContentLoaded", (event) => {
    let cronoMin = document.querySelector(".crono__min")
    let cronoSec = document.querySelector(".crono__sec")

    let btnStart = document.querySelector(".layout__btn-start")
    let btnStop = document.querySelector(".layout__btn-stop")

    let minutes = 0;
    let seconds = 0;
    let time = null;

    let start = () => {
        if (!time) {
            time = setInterval(() => {
                seconds++

                if (seconds == 60) {
                    minutes++;
                    seconds = 0;
                }

                if (minutes >= 60) {
                    alert("You have exceeded the time limit");
                    clearInterval(time);
                    time = null;
                }

                cronoSec.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
                cronoMin.innerHTML = (minutes < 10) ? "0" + minutes : minutes;

            }, 1000);
        }
    }

    let stop = () => {
        clearInterval(time);
        time = null;
    }

    btnStart.addEventListener("click", () => {
        start();
    });

    btnStop.addEventListener("click", () => {
        stop();
    });
});
