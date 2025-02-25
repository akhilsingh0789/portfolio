document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const words = ["Pythonist", "Web Developer", "Tech Enthusiast"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            currentWord = words[wordIndex].substring(0, letterIndex + 1);
            letterIndex++;
        } else {
            currentWord = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
        }

        textElement.textContent = currentWord;

        if (!isDeleting && letterIndex === words[wordIndex].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
});
 s