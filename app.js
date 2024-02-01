const progreso = document.getElementById('progreso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let currentActive = 1


const update = () => {
    circles.forEach((circle, index) => {
        (index < currentActive)
            ? circle.classList.add('active')
            : circle.classList.remove('active')
    })

    const actives = document.querySelectorAll('.active')

    progreso.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


prev.addEventListener('click', () => {
    // Elimina las animaciones del círculo actualmente activo
    if (circles[currentActive - 1]) {
        circles[currentActive - 1].classList.remove('heartbeat');
    }

    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()

    // Agrega las animaciones al nuevo círculo activo
    if (circles[currentActive - 1]) {
        circles[currentActive - 1].classList.add('heartbeat');
    }
})


next.addEventListener('click', () => {
    // Elimina la animación del círculo actualmente activo
    if (circles[currentActive - 1]) {
        circles[currentActive - 1].classList.remove('heartbeat');
    }

    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()

    // Agrega la animación al nuevo círculo activo
    if (circles[currentActive - 1]) {
        circles[currentActive - 1].classList.add('heartbeat');
    }
})