const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('collapse');
});

const texts = [
    "Moi, c'est RANAIVOSON Nantenaina Claudio", // #2c3e50
    "Développeur Web", // #3498db
    "Bienvenue dans mon univers créatif", // #e74c3c
    "Imaginez et construisons ensemble" // #2ecc71
];
const typingSpeed = 100;
const delayBetweenTexts = 2000;
const textDisplay = document.getElementById("text-display");
const cursor = document.querySelector(".cursor");
let currentTextIndex = 0;
let currentCharIndex = 0;
const textColors = [
    "#2c3e50", 
    "#3498db", 
    "#e74c3c", 
    "#2ecc71"
];
function typeText() {
    if (currentCharIndex < texts[currentTextIndex].length) {
        textDisplay.textContent += texts[currentTextIndex][currentCharIndex];
        textDisplay.style.color = textColors[currentTextIndex];
        cursor.style.color = textColors[currentTextIndex];
        currentCharIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenTexts);
    }
}
function deleteText() {
    if (currentCharIndex > 0) {
        textDisplay.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(typeText, typingSpeed);
    }
}
typeText();

  
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".project-img");
    images.forEach(image => {
        image.addEventListener("click", function () {
            const modalImage = document.getElementById("modalImage");
            modalImage.src = this.src;
            const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
            imageModal.show();
        });
    });
});

$(document).ready(function () {
    $('.projects-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        Infinite: true,
        arrows : false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$(document).ready(function () {
    $('.pagination .page-link').on('click', function (e) {
        e.preventDefault();
        $('.gallery-page').removeClass('active');
        $('.pagination .page-item').removeClass('active');
        const pageIndex = $(this).text();
        $('.gallery-page').eq(pageIndex - 1).addClass('active');
        $(this).parent().addClass('active');
    });
});
