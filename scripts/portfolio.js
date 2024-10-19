// scripts/portfolio.js

document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;

        portfolioItems.forEach(item => {
            if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
