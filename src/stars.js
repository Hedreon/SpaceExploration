// CONFIGURABLE SETTINGS
const numberOfStars = 5000;
const fieldClass = ".starfield";
const pageHeight = 500; // Measured in VH (Viewport Height)

// DON'T MODIFY BELOW
const backgroundClass = document.querySelector(fieldClass);

for (let i = 0; i < numberOfStars; i++) {
    const newStar = document.createElement("div");
    newStar.classList.add("star");
    newStar.style.top = `${Math.floor(Math.random() * pageHeight)}vh`;
    newStar.style.left = `${Math.floor(Math.random() * pageHeight)}vw`;
    backgroundClass.appendChild(newStar);
}