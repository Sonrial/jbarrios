// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionar todos los elementos que queremos animar
    const hiddenElements = document.querySelectorAll('.hidden-text, .hidden-card, .hidden-img');

    // Crear el observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            // Si el elemento es visible
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Añadir clase 'show'
            } 
            // Opcional: Si quieres que la animación se repita al subir y bajar, quita el 'else'
            // else {
            //     entry.target.classList.remove('show');
            // }
        });
    });

    // Decirle al observador que vigile a cada elemento
    hiddenElements.forEach((el) => observer.observe(el));
});