window.addEventListener("DOMContentLoaded", (event) => {
    let dateDom = document.querySelector(".main__date");
    let hourDom = document.querySelector(".main__hour");

    let myDate = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;

        if (hour < 10) hour = `0${hour}`
        if (minutes < 10) minutes = `0${minutes}`

        dateDom.innerHTML = `${day}/${month}/${year}`;
        hourDom.innerHTML = `${hour}:${minutes}`;

    }
    myDate();

    setInterval(() => {
        myDate();
    }, 1000)
})