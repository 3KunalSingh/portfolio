// ====== TYPING EFFECT (MAIN TITLE) ======
const textArray = [
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentText = textArray[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        // Pause when full word is typed
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        // Move to next word
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % textArray.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}


// ====== TAGLINE EFFECT (PROFESSIONAL LINE) ======
const taglineText = "Building high-performance applications where design meets logic.";

const taglineElement = document.getElementById("tagline");
let taglineIndex = 0;

function typeTagline() {
    if (taglineIndex < taglineText.length) {
        taglineElement.textContent += taglineText.charAt(taglineIndex);
        taglineIndex++;
        setTimeout(typeTagline, 30);
    }
}


// ====== START EVERYTHING AFTER PAGE LOAD ======
window.onload = () => {
    typeEffect();
    typeTagline();
};

// INIT EMAILJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// SEND EMAIL
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(function() {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Try again.");
        });
});