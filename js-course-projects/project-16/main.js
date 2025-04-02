window.addEventListener("DOMContentLoaded",()=>{
    console.log(screen.width, screen.height, window.location.href)    

    let data = document.querySelector("#data")

    data.innerHTML += "<h2>Width: "+window.innerWidth+" pixels<h2>";
    data.innerHTML += "<h2>Height: "+window.innerHeight+" pixels</h2>";
    data.innerHTML += "<h2>URL: "+window.location.href+"</h2>";


    window.open("https://www.linkedin.com/", "blank")



})