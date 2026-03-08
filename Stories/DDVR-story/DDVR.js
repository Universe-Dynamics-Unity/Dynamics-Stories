const storyData = {
    "inicio": {
        text: "Eres Guess y esta es tu historia… A veces el mundo te hace pensar, por ejemplo una duda existencial como: ¿de dónde vengo realmente?.",
        music: "vy0hgTdVxqc", // Canción inicial
        choices: [
            { text: "Iniciar historia", next: "1Ainiciar-historia" },
        ]
    },
    "1Ainiciar-historia": {
        text: "Inicias el día como otro cualquiera pero aún tienes esa duda en tu cabeza, algo no te cuadra en ese mundo de tareas en una nave espacial.<br> 'No siempre se trata de tareas y ya... hay algún propósito. En algún lugar', piensas. Hasta que ves que ya están entregando el desayuno<br> no vas a quedarte sin desayuno por estar pensando en algo qur tal vez no tenga respuesta.",
        choices: [
            { text: "Ir al almacén a tirar la basura", next: "2Abasura" },
            { text: "Ir a la cafetería para desayunar", next: "2Bcafetería"}
        ]
    },
    "2Abasura": {
        text: "Eliges primero ir a hacer las tareas y compensar a la hambre en la hora de comer. Mientras te dirijes a la palanca de cafetería que lleva la basura a almacén donde es expulsada de la nave. Al llegar ves la basura, una hoja rayada con marcador, un baso de plastico usado, una cascara de plátano y otras cosas que dejan los tripulantes.",
        choices: [
            { text: "Tirar de la palanca", next: "3Aexpulsion"},
        ]
    },
    "2Bcafetería": {
        text: "Fuiste a cafetería y te sentaste en una mesa de la cafetería con los demás tripulantes mientras disfrutabas de una donita y un café un poco agrio sabor a rutina.",
        choices: [
            { text: "terminar de comer e ir a hacer las tareas", next: "4AterminarDeElDesayuno" },
            { text: "Platicar con alguien", next: "4BplaticaConAlguienEnElDesayuno" }
        ]
    },
    "4AterminarDeElDesayuno": {
        text: "Terminas rápido de comer, no tienes tiempo para tanta tarea que te dejaron",
        choices: [
            { text: "Ir a las tareas" },
        ]
    },
    "4BplaticaConAlguienEnElDesayuno": {
        text: "Intentas platicar con alguien y al primero que ves es a Snow, 'él es sociable y tranquilo' piensas y te acercas a su mesa.<br> Lo saludas con una sonrisa diciendo<br> -Hola Snow, ¿Podemos platicar?<br> Snow te recbie con una plática tranquila y amigable -¡Hola, Guess! ¿Cómo andas?",
        choices: [
            { text: "Responderle con un '-Bien, ¿Y tú?'"}
        ]
    },
    "3Aexpulsion": {
        text: "Tiras de la palanca y ves cómo la basura desaparece de tu vista siendo transportada a el almacén.",
        choices: [
            { text: "Ir hacia almacén para tirar la basura fuera de la nave", next: "5AtirarBasura" }
        ]
    },
};

function renderScene(sceneId) {
    const scene = storyData[sceneId];
    if (!scene) return;

    // Actualizar Texto (Quitamos la referencia a 'image-element')
    document.getElementById('text-element').innerHTML = scene.text;

    // Gestionar Música
    if (scene.music) {
        const iframe = document.getElementById('music-iframe');
        const newSrc = `https://www.youtube.com/embed/${scene.music}?autoplay=1&controls=1&rel=0`;
        if (!iframe.src.includes(scene.music)) {
            iframe.src = newSrc;
        }
    }

    // Generar Botones
    const choicesEl = document.getElementById('choices-element');
    choicesEl.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.className = 'choice-btn';
        button.onclick = () => renderScene(choice.next);
        choicesEl.appendChild(button);
    });
}

window.onload = () => renderScene("inicio");