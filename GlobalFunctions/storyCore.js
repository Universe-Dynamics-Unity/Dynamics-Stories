// Función para guardar el progreso antes de salir
function saveAndExit(historiaNombre, capituloActual) {
    const progreso = {
        historia: historiaNombre,
        capitulo: capituloActual,
        fecha: new Date().toLocaleDateString()
    };

    // Guardamos el JSON en el navegador
    localStorage.setItem('UDU_Progreso_' + historiaNombre, JSON.stringify(progreso));
    
    // Redirigimos al menú principal
    window.location.href = '../../index.html';
}

// Función para ir al siguiente capítulo
function nextChapter(url) {
    window.location.href = url;
}