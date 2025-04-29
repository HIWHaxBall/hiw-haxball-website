// 1. TABLA DE POSICIONES - AÑADE TUS EQUIPOS AQUÍ
const standingsData = [
    { position: 1, team: "Junior de Barranquilla", points: 6, played: 2, wins: 2, draws: 0, losses: 0, goalsFor: 10, goalsAgainst: 0, difference: 10 },
    { position: 2, team: "Club Atlético Aldosivi", points: 6, played: 2, wins: 2, draws: 0, losses: 0, goalsFor: 9, goalsAgainst: 1, difference: 8 },
    { position: 3, team: "Club YSB", points: 4, played: 2, wins: 1, draws: 1, losses: 0, goalsFor: 3, goalsAgainst: 0, difference: 3 },
    { position: 4, team: "Atlético Patagonia Austral", points: 3, played: 1, wins: 1, draws: 0, losses: 0, goalsFor: 3, goalsAgainst: 0, difference: 3 },
    { position: 5, team: "C.A. Buenos Aires", points: 3, played: 2, wins: 1, draws: 0, losses: 1, goalsFor: 4, goalsAgainst: 2, difference: 2 },
    { position: 6, team: "Palestino", points: 3, played: 2, wins: 1, draws: 0, losses: 1, goalsFor: 3, goalsAgainst: 3, difference: 0 },
    { position: 7, team: "Free Fire Team", points: 1, played: 2, wins: 0, draws: 1, losses: 1, goalsFor: 0, goalsAgainst: 7, difference: -7 },
    { position: 8, team: "Selectivo Torito", points: 0, played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, difference: 0 },
    { position: 9, team: "Team Balanza R", points: 0, played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, difference: 0 },
    { position: 10, team: "Vastineta F.C.", points: 0, played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, difference: 0 }
];

// 2. PARTIDOS - AÑADE TUS FECHAS Y PARTIDOS AQUÍ
const matchdaysData = [
    {
        matchday: 1,
        matches: [
            { home: "Junior de Barranquilla", away: "OFF", score: "7-0" },
            { home: "Club YSB", away: "Brigada FC", score: "3-0" },
            { home: "Free Fire Team", away: "Club Atlético Aldosivi", score: "0-7" },
            { home: "Club Atletico B.A", away: "Palestino", score: "3-0" },
            { home: "OFF", away: "Atletico Patagonia Austral", score: "-" }
        ]
    },
    {
        matchday: 2,
        matches: [
            { home: "OFF", away: "Palestino", score: "0-3" },
            { home: "Club Atlético Aldosivi", away: "Club Atletico B.A", score: "2-1" },
            { home: "Club YSB", away: "Free Fire Team", score: "0-0" },
            { home: "Junior de Barranquilla", away: "OFF", score: "3-0" },
            { home: "Atlético Patagonia Austral", away: "Brigida FC", score: "3-0" }
        ]
    },
    {
        matchday: 3,
        matches: [
            { home: "CABA", away: "TBZ", score: "-" },
            { home: "YSB", away: "PAL", score: "-" },
            { home: "STC", away: "CAA", score: "-" },
            { home: "FFT", away: "APA", score: "-" },
            { home: "VFC", away: "JUN", score: "-" }
        ]
    },
    // Añade más fechas según sea necesario
];

// ==============================================
// NO NECESITAS MODIFICAR NADA DEBAJO DE ESTA LÍNEA
// ==============================================

// Función para generar la tabla de posiciones
function generateStandingsTable() {
    const table = document.getElementById('standingsTable');
    
    // Cabecera de la tabla
    let html = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Equipo</th>
                <th>PTS</th>
                <th>PJ</th>
                <th>V</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    // Filas de datos
    standingsData.forEach(team => {
        html += `
            <tr>
                <td>${team.position}</td>
                <td>${team.team}</td>
                <td>${team.points}</td>
                <td>${team.played}</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}</td>
                <td>${team.goalsFor}</td>
                <td>${team.goalsAgainst}</td>
                <td>${team.difference}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
}

// Función para generar los partidos
function generateMatchdays() {
    const container = document.getElementById('matchdaysContainer');
    let html = '';
    
    matchdaysData.forEach(matchday => {
        html += `
            <div class="matchday">
                <h3>Fecha ${matchday.matchday}</h3>
                <div class="matches">
        `;
        
        matchday.matches.forEach(match => {
            const [homeScore, awayScore] = match.score.split('-');
            html += `
                <div class="match">
                    <span class="team home">${match.home}</span>
                    <span class="score">${homeScore} - ${awayScore}</span>
                    <span class="team away">${match.away}</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Función para generar las estadísticas
function generateStatsTables() {
    // Goleadores
    const goalsTable = document.getElementById('goalsTable');
    let goalsHtml = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Jugador</th>
                <th>Equipo</th>
                <th>Goles</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    statsData.goals.forEach((player, index) => {
        goalsHtml += `
            <tr>
                <td>${index + 1}</td>
                <td>${player.player}</td>
                <td>${player.team}</td>
                <td>${player.goals}</td>
            </tr>
        `;
    });
    
    goalsHtml += `</tbody>`;
    goalsTable.innerHTML = goalsHtml;
    
    // Asistencias
    const assistsTable = document.getElementById('assistsTable');
    let assistsHtml = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Jugador</th>
                <th>Equipo</th>
                <th>Asistencias</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    statsData.assists.forEach((player, index) => {
        assistsHtml += `
            <tr>
                <td>${index + 1}</td>
                <td>${player.player}</td>
                <td>${player.team}</td>
                <td>${player.assists}</td>
            </tr>
        `;
    });
    
    assistsHtml += `</tbody>`;
    assistsTable.innerHTML = assistsHtml;
    
    // MVP
    const mvpTable = document.getElementById('mvpTable');
    let mvpHtml = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Jugador</th>
                <th>Equipo</th>
                <th>MVP</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    statsData.mvp.forEach((player, index) => {
        mvpHtml += `
            <tr>
                <td>${index + 1}</td>
                <td>${player.player}</td>
                <td>${player.team}</td>
                <td>${player.mvps}</td>
            </tr>
        `;
    });
    
    mvpHtml += `</tbody>`;
    mvpTable.innerHTML = mvpHtml;
}

// Funcionalidad de pestañas
function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

function openStatsTab(tabName) {
    document.querySelectorAll('.stats-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.stats-tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generateStandingsTable();
    generateMatchdays();
    generateStatsTables();
    
    // Activar primera pestaña
    document.querySelector('.tab-button').click();
    document.querySelector('.stats-tab-button').click();
});
