let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;  // Volver al primer slide si se excede el número de imágenes
    } else if (index < 0) {
        currentIndex = totalSlides - 1;  // Ir al último slide si se retrocede demasiado
    } else {
        currentIndex = index;
    }

    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Configura el carrusel para que ajuste el tamaño al cambiar la ventana
window.addEventListener('resize', () => {
    showSlide(currentIndex);
});
