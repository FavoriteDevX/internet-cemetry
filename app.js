fetch('artifacts.json')
    .then(response => response.json())
    .then(data => {
        const timeline = document.getElementById('timeline');
        
        data.forEach(item => {
            const screen = document.createElement('section');
            screen.className = 'artifact-screen';
            
            screen.innerHTML = `
                <div class="artifact-content">
                    <p class="artifact-date">${item.date}</p>
                    <h2 class="artifact-title">${item.title}</h2>
                    <img class="artifact-image" src="${item.image}" alt="${item.title} logo">
                    <p class="artifact-summary">${item.summary}</p>
                </div>
            `;
            timeline.appendChild(screen);
        });
    });

// Converte scroll vertical em scroll horizontal
window.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    window.scrollBy({
        left: evt.deltaY * 1.5,
        behavior: 'auto'
    });
}, { passive: false });
