document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ANIMACIÓN DE SCROLL (INTERSECTION OBSERVER) ---
    const hiddenElements = document.querySelectorAll('.hidden-text, .hidden-card, .hidden-img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Dejamos de observar una vez que se muestra para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));

    // --- 2. EFECTO TYPEWRITER (ESCRITURA) ---
    const textToType = "INGENIERO DE ENERGÍAS & SOSTENIBILIDAD";
    const typeWriterElement = document.querySelector('.typewriter');
    
    // Verificamos que el elemento exista antes de intentar escribir
    if (typeWriterElement) {
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                typeWriterElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Velocidad (ms)
            }
        }
        // Iniciar escritura (pequeño retraso para dar sensación de carga)
        setTimeout(typeWriter, 500); 
    }
});