// Substitua esta data pela data em que vocês começaram a namorar
const startDate = new Date('2024-08-22'); // Exemplo: 1 de Janeiro de 2023

function updateDaysCounter() {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-counter').textContent = `${diffDays} dias`;
}

// Atualiza o contador quando a página carrega
updateDaysCounter();
