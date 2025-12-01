/****************************
 * BOTÓN DE COPIAR RUTAS (CON TOAST)
 ****************************/
function copiar(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            showToast(`Ruta copiada: ${texto}`);
        })
        .catch(err => console.error("Error al copiar:", err));
}

/****************************
 * COPIAR + TOAST PRO
 ****************************/
function copiar(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            showToast(`Ruta copiada: ${texto}`);
            document.getElementById("copy-sound").play();
        })
        .catch(err => console.error("Error al copiar:", err));
}

function showToast(message) {
    const toast = document.getElementById("toast");
    const msg = document.getElementById("toast-msg");

    msg.textContent = message;

    toast.classList.remove("hidden");

    setTimeout(() => toast.classList.add("show"), 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.classList.add("hidden"), 250);
    }, 2800);
}



/****************************
 * PARTICULAS PROFESIONALES
 ****************************/
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const totalParticles = 60;

for (let i = 0; i < totalParticles; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(140, 255, 230, 0.5)";
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

