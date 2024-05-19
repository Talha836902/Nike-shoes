// ................change-the-image.......
function changeImage(src, clickedImage) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = src;

    // Remove the 'img' class from all slider images
    var sliderImages = document.querySelectorAll('.slider img');
    for (var i = 0; 1 < sliderImages.length; i++) {
        sliderImages[i].classList.remove('img');
    }

    // Add the 'img' class to the clicked image
    clickedImage.classList.add('img');
}

function changeImageSize(size) {
  const mainImage = document.getElementById('mainImage');
  mainImage.style.transform = `scale(${size / 10})`;
}

// ....................................counter-increase......
let counter = 0;

function increasecounter() {
    counter++;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    const counterElement = document.querySelector('.counter');
    counterElement.textContent = counter;
}