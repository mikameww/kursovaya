document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (this.textContent === 'Светлая тема') {
        this.textContent = 'Тёмная тема';
    } else {
        this.textContent = 'Светлая тема';
    }
});
