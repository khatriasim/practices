let prevbtn = document.querySelector(".prev")
let nextbtn = document.querySelector(".next")
let container = document.querySelector(".container")
let image = document.getElementById("image")

// Array of image paths
let images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
let currentIndex = 0;

function showImage(index) {
    // Make sure index is within bounds
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    
    currentIndex = index;
    image.src = images[currentIndex];
    console.log("Showing image:", image.src);
}

// Initialize with first image
showImage(0);

nextbtn.addEventListener("click", () => {
    console.log('next clicked');
    showImage(currentIndex + 1);
});

prevbtn.addEventListener("click", () => {
    console.log('prev clicked');
    showImage(currentIndex - 1);
});
