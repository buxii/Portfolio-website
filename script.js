// Smooth scrolling for all anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Prevent scrolling with mouse wheel in the index section, but allow in others
document.querySelectorAll('.no-scroll').forEach(section => {
    section.addEventListener('wheel', (e) => {
        e.preventDefault();
    }, { passive: false });

    section.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
});
