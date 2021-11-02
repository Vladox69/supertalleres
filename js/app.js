document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    galeriaPuertas();
    galeriaVentanas();
    galeriaTechos();
    galeriaBanios();
    galeriaEstantes();
}

function galeriaPuertas() {
    const puertas = document.querySelector('#puertas');
    if (puertas == null) {
        return;
    }
    for (let i = 1; i <= 20; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="images/puertas/puerta${i}.jpg" type="image/webp">
            <img width="300" height="300" src="images/puertas/puerta${i}.webp" > 
            `;
        puertas.appendChild(imagen);

    }
}

function galeriaVentanas() {
    const ventanas = document.querySelector('#ventanas');
    if (ventanas == null) {
        return;
    }
    for (let i = 1; i <= 13; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="images/ventanas/ventana${i}.jpg" type="image/jpg">
            <img width="300" height="300" src="images/ventanas/ventana${i}.jpg" > 
            `;
        ventanas.appendChild(imagen);

    }
}

function galeriaTechos() {
    const techos = document.querySelector('#techos');
    if (techos == null) {
        return;
    }
    for (let i = 1; i <= 6; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="images/techos/techo${i}.jpg" type="image/jpg">
            <img width="300" height="300" src="images/techos/techo${i}.jpg" > 
            `;
        techos.appendChild(imagen);

    }
}

function galeriaBanios() {
    const banios = document.querySelector('#banios');
    if (banios == null) {
        return;
    }
    for (let i = 1; i <= 15; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="images/banios/banio${i}.jpg" type="image/jpg">
            <img width="300" height="300" src="images/banios/banio${i}.jpg" > 
            `;
        banios.appendChild(imagen);

    }
}

function galeriaEstantes() {
    const estantes = document.querySelector('#estantes');
    if (estantes == null) {
        return;
    }
    for (let i = 1; i <= 4; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="images/estantes/estante${i}.jpg" type="image/jpg">
            <img width="300" height="300" src="images/estantes/estante${i}.jpg" > 
            `;
        estantes.appendChild(imagen);

    }
}
