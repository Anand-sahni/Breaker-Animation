var el = document.querySelector('h1');

el.addEventListener('input', function(e) {
    el.setAttribute('data-text', this.textContent);
});