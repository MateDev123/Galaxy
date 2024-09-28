const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.getElementById('myDropdown');

dropdownToggle.addEventListener('click', function(event) {
    event.stopPropagation(); // Megakadályozza, hogy a kattintás továbbterjedjen
    dropdownContent.classList.toggle('show');
});

// Eseményfigyelő az ablakra, amely bezárja a menüt, ha kívül kattintunk
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});