document.addEventListener('DOMContentLoaded', function() {

    // --- Fade In Sections on Scroll ---
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');

    if (!sectionsToAnimate.length) {
        console.log("No sections to animate found.");
        return; // Exit if no elements found
    }

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after animation to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class if you want animation to replay when scrolling out and back in
                // entry.target.classList.remove('visible');
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToAnimate.forEach(section => {
        intersectionObserver.observe(section);
    });

    // --- Potential future enhancements ---
    // e.g., Add a subtle mouse follow effect, parallax scrolling, etc.
    // console.log("Portfolio script loaded and observer initiated.");

});