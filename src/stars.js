// CONFIGURABLE SETTINGS
const numberOfStars = 1200;
const fieldClass = ".starfield";

// DON'T MODIFY BELOW
const backgroundClass = document.querySelector(fieldClass);

for (let i = 0; i < numberOfStars; i++) {
    const newStar = document.createElement("div");
    newStar.classList.add("star");
    newStar.style.top = `${Math.floor(Math.random() * 500)}vh`;
    newStar.style.left = `${Math.floor(Math.random() * 98)}vw`;
    backgroundClass.appendChild(newStar);
}