document.addEventListener('DOMContentLoaded', function () {
    const cardElement = document.querySelector('.hero-section div[style*="width: 450px"]');
    if (window.innerWidth <= 768) {
        if (cardElement) {
            cardElement.style.width = '90%';
            cardElement.style.height = 'auto';
            cardElement.style.margin = '20px auto';
            cardElement.style.transform = 'none';
        }
    }
});
