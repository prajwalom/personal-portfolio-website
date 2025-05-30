window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 1500);
});

function createTrail() {
    const dots = [];
    const numDots = 120;

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        document.body.appendChild(dot);
        dots.push({ element: dot, x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateTrail() {
        let x = mouseX;
        let y = mouseY;

        dots.forEach((dot, index) => {
            const nextDot = dots[index + 1] || dots[0];
            dot.x = x;
            dot.y = y;
            dot.element.style.left = `${x}px`;
            dot.element.style.top = `${y}px`;
            dot.element.style.opacity = 1 - (index / numDots);
            dot.element.style.transform = `translate(-50%, -50%) scale(${1 - (index / numDots)})`;
            x += (nextDot.x - x) * 0.5;
            y += (nextDot.y - y) * 0.5;
        });

        requestAnimationFrame(updateTrail);
    }

    updateTrail();
}

window.addEventListener('load', createTrail);
