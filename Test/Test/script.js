document.addEventListener("DOMContentLoaded", function() {
    
    const sectiuneMonitorizare = document.getElementById("monitorizare");
    const containerGalerie = document.getElementById("galerie-resurse");

    const imagini = [
        "cpu.png",
        "ram.png",
        "net.png"
    ];

    let indexCurent = 0;
    let slideshowInterval;
    let slideshowActiv = false;

    sectiuneMonitorizare.addEventListener("dblclick", function() {
        
        if (slideshowActiv) return; 

        slideshowActiv = true;

        containerGalerie.innerHTML = "";
        
        const slideContainer = document.createElement("div");
        slideContainer.id = "slideshow-container";
        
        const imgElement = document.createElement("img");
        imgElement.id = "slideshow-img";
        imgElement.src = imagini[0];
        imgElement.alt = "Slideshow Monitorizare";
        
        slideContainer.appendChild(imgElement);
        
        const infoText = document.createElement("p");
        infoText.textContent = "Slideshow activ - se schimbă la fiecare 3 secunde.";
        slideContainer.appendChild(infoText);

        containerGalerie.appendChild(slideContainer);

        slideshowInterval = setInterval(function() {
            indexCurent++;
            
            if (indexCurent >= imagini.length) {
                indexCurent = 0;
            }

            imgElement.src = imagini[indexCurent];
            
        }, 3000);
    });
});