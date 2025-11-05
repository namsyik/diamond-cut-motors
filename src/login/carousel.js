let headerBackgrounds = document.querySelectorAll(".header-image");
let imageIndex = 0;

function changeBackground() {
    headerBackgrounds[imageIndex].classList.remove("active");

    imageIndex++;

    if(imageIndex >= headerBackgrounds.length) {
        imageIndex = 0;
    }

    headerBackgrounds[imageIndex].classList.add("active");
}

setInterval(changeBackground, 3000);

