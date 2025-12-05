document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll(".monitor-img");
    let slideshowInterval = null;
    let currentIndex = 0;
    let isSlideshowRunning = false;
    const imageArray = Array.from(imgs);
    imageArray.forEach((img, index) => {
         img.style.opacity = index === 0 ? "1" : "0";
    });

    function startSlideshow() {
        if (isSlideshowRunning) return;
        isSlideshowRunning = true;
        slideshowInterval = setInterval(() => {
            imageArray[currentIndex].style.opacity = "0";
            currentIndex = (currentIndex + 1) % imageArray.length;
            imageArray[currentIndex].style.opacity = "1";
        }, 3000);
    }

    function stopSlideshow() {
        if (!isSlideshowRunning) return;
        clearInterval(slideshowInterval);
        isSlideshowRunning = false;
        imageArray.forEach(img => img.style.opacity = "0");
        if (imageArray.length > 0) {
            imageArray[0].style.opacity = "1";
            currentIndex = 0;
        }
    }
    imgs.forEach(img => {
        img.addEventListener("click", stopSlideshow);
    });
    startSlideshow();
});