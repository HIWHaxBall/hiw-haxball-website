// AÑADE TUS NOTICIAS AQUÍ
const newsData = [
    {
        title: "¡Arranca la Primera División Fut X5!",
        date: "19 de abril de 2025",
        content: `
            <p>La espera ha terminado: ¡la Primera División Fut X5 ya está en marcha!</p>
            <p>Nos esperan emocionantes encuentros, jugadas espectaculares y resultados que darán mucho que hablar.</p>
            <p>¡Que comience el espectáculo!</p>
        `,
        author: "Prensa Hiw"
    },
    {
        title: "Resumen de la primera jornada",
        date: "22 de abril de 2025",
        content: `
            <p>Luego de terminar la primera jornada, se han visto muchas sorpresas.</p>
            <p>Junior de Barranquilla y Club Atlético Aldosivi golearon 7-0 a sus rivales, haciéndose fuertes y colocándose en la cima de la tabla.</p>
            <p>Club YSB venció 3-0 a Brigada, y Club Atlético Buenos Aires sigue firme en la pelea por el primer puesto tras ganar 3-0 a Palestino.</p>
        `,
        author: "Prensa Hiw"
    },
    {
        title: "Resultados de la segunda fecha",
        date: "25 de abril de 2025",
        content: `
            <p>Hoy finalizó la segunda jornada de la Primera División Fut X5.</p>
            <p>Palestino abrió la noche con una victoria por 3-0. Club Atlético Aldosivi mantuvo su invicto con un 2-1 frente a Club Atlético Buenos Aires, que sufrió su primera derrota.</p>
            <p>Club YSB y Free Fire Team empataron 0-0 en un encuentro muy disputado, donde YSB dominó pero no logró romper el empate.</p>
            <p>Junior volvió a golear 3-0 y sigue sin recibir goles, perfilándose como uno de los grandes candidatos.</p>
            <p>Atlético Patagonia Austral, cuyo partido anterior fue suspendido, ganó 3-0 frente a Brigada.</p>
        `,
        author: "Prensa Hiw"
    },
    {
        title: "Previa de la tercera fecha",
        date: "29 de abril de 2025",
        content: `
            <p>El día de hoy, más tarde, se jugará la tercera fecha de la Primera División Fut X5.</p>
            <p>Habrá encuentros muy interesantes con el debut de nuevos clubes que se han sumado recientemente a la liga: Selectivo Torito, Team Balanza y Vasineta.</p>
            <p>Veremos de qué están hechos estos nuevos equipos. ¡Nos vemos después!</p>
        `,
        author: "Prensa Hiw"
    }
];

// ==============================================
// NO NECESITAS MODIFICAR NADA DEBAJO DE ESTA LÍNEA
// ==============================================

// Función para generar las noticias
function generateNews() {
    const container = document.getElementById('newsContainer');
    let html = '';
    
    newsData.forEach(news => {
        html += `
            <article class="news-article">
                <div class="news-header">
                    <h2>${news.title}</h2>
                    <span class="news-date">${news.date}</span>
                </div>
                <div class="news-content">
                    ${news.content}
                </div>
                <div class="news-footer">
                    <span class="news-author">${news.author}</span>
                </div>
            </article>
        `;
    });
    
    container.innerHTML = html;
}

// Inicialización
document.addEventListener('DOMContentLoaded', generateNews);
