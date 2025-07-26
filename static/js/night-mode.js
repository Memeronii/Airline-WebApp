document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-night-mode');

    if (localStorage.getItem('nightMode') === 'enabled') {
        document.body.classList.add('night-mode');
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');

        if (document.body.classList.contains('night-mode')) {
            localStorage.setItem('nightMode', 'enabled');
        } else {
            localStorage.removeItem('nightMode');
        }
    });
});