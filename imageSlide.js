const img = [
    'url(images/1.jpg)',
    'url(images/2.jpg)',
    'url(images/3.jpg)',
    'url(images/4.jpg)',
    'url(images/5.jpg)',
    'url(images/6.jpg)',

];

let currentImageIndex = 0;
const myDiv = document.getElementById("div2");

function changeBackground() { 
    myDiv.style.backgroundImage = img[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % img.length;
 }

setInterval(changeBackground, 5000)
