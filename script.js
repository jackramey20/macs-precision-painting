document.addEventListener('DOMContentLoaded', function() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', () => {
                const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded',String(!expanded));
                mainNav.style.display = expanded ? 'none' : 'block';
            });
        }
    // Estimate button scroll
    const estimateBtn = document.getElementById('estimateBtn');
    if (estimateBtn) {
        estimateBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        });
    }

    // Call Button
    const callBtn = document.getElementById('callBtn');
    if (callBtn) {
        callBtn.addEventListener('click', () => {
            window.location.href = 'tel:xxx-xxx-xxxx';
        });
    }

    // Simple form submit (client side only)
    const form = document.getElementById('estimateForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.name.value.trim();
            const phone = form.phone.value.trim();
            if (!name || !phone) {
                alert('Please fill all required fields.');
                return;
            }

            alert('Thanks, ' + name + '! We will contact you soon :)');
            form.reset();
        });
    }
});
