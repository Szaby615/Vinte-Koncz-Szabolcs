document.addEventListener("DOMContentLoaded", function () {
const imgs = document.querySelectorAll(".monitor-img");
let slideshowInterval = null;
let currentIndex = 0;
let isSlideshowRunning = false;

function startSlideshow() {
if (isSlideshowRunning) return;
isSlideshowRunning = true;

const imageArray = Array.from(imgs);

slideshowInterval = setInterval(() => {
 
imageArray.forEach(img => img.style.opacity = "0");

imageArray[currentIndex].style.opacity = "1";

currentIndex = (currentIndex + 1) % imageArray.length;
}, 3000);
}

function stopSlideshow() {
clearInterval(slideshowInterval);
isSlideshowRunning = false;
imgs.forEach(img => img.style.opacity = "1");
}

imgs.forEach(img => {
img.addEventListener("dblclick", startSlideshow);
});

imgs.forEach(img => {
img.addEventListener("click", stopSlideshow);
});
});
