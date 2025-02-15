document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlides(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlides(currentIndex - 1);
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showSlides(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
        showSlides(currentIndex - 1);
    }
});

document.querySelectorAll('.dropdown-toggle').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // If this checkbox is checked, uncheck all others
        if (this.checked) {
            document.querySelectorAll('.dropdown-toggle').forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false; // Uncheck other checkboxes
                }
            });
        }
    });
});