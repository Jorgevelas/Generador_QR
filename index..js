// Selecciona los elementos del DOM necesarios para el funcionamiento del generador
const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

// Evento de clic en el botón para generar el código QR
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    // Verifica si el valor ingresado es válido o si es igual al valor anterior
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generando Código QR";
    // Genera el código QR utilizando la API
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    // Evento cuando la imagen ha cargado completamente
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Código QR Generado";
    });
});

// Evento para detectar cambios en el campo de texto
qrInput.addEventListener("keyup", () => {
    // Si el campo de texto está vacío, oculta el código QR
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
