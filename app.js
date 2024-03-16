const button = document.querySelector("button")
const body = document.querySelector("body");
const colors = ["Red", "black", "Green", "Purple", "Blue", "Yellow", "Pink"]

body.style.backgroundColor = "Yellow"


button.addEventListener('click', function () {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
        // for (let colorIndex = 0; colorIndex <= colors.length; colorIndex++) {
        //     body.style.backgroundColor = colors[colorIndex];
        // }
})