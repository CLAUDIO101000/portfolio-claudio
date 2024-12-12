const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('collapse');
});

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