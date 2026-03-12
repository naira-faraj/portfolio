// Elegant entrance animations for a premium feel
document.addEventListener('DOMContentLoaded', () => {
    
    // Add loaded class to trigger CSS keyframe animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Add scroll animations for Projects and About sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.project-item, .about-content, .about-visual, .section-header');
    
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
        sectionObserver.observe(el);
    });

    // Manual Smooth Scroll with requestAnimationFrame to bypass native behavior issues
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset || document.documentElement.scrollTop;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // cubic-bezier approximation
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const rect = targetElement.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetPosition = rect.top + scrollTop - 60; // Offset

                smoothScrollTo(targetPosition, 800); // 800ms duration
            }
        });
    });
});
