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
    }    
    
    // Añade más noticias según sea necesario
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