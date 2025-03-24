const copyButton = document.getElementById("copy");
const backButton = document.getElementById("back");

const diccionario =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Función para encriptar
function encriptar(mensaje, desplazamiento = 5) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    const caracter = mensaje[i];
    const indice = diccionario.indexOf(caracter);
    if (indice === -1) {
      mensajeEncriptado += caracter; // Si no está en el diccionario, lo deja igual
    } else {
      const nuevoIndice = (indice + desplazamiento) % diccionario.length;
      mensajeEncriptado += diccionario[nuevoIndice];
    }
  }
  showToast("🔐 Mensaje Encriptado"); // Emoji añadido
  return mensajeEncriptado;
}

// Función para desencriptar
function desencriptar(mensajeEncriptado, desplazamiento = 5) {
  let mensajeDesencriptado = "";
  for (let i = 0; i < mensajeEncriptado.length; i++) {
    const caracter = mensajeEncriptado[i];
    const indice = diccionario.indexOf(caracter);
    if (indice === -1) {
      mensajeDesencriptado += caracter; // Si no está en el diccionario, lo deja igual
    } else {
      const nuevoIndice =
        (indice - desplazamiento + diccionario.length) % diccionario.length;
      mensajeDesencriptado += diccionario[nuevoIndice];
    }
  }
  showToast("🔓 Mensaje Desencriptado"); // Emoji añadido
  return mensajeDesencriptado;
}

// Evento para el botón de acción (Encriptar/Desencriptar)
actionButton.addEventListener("click", () => {
  const mensaje = messageInput.value.trim();

  if (mensaje === "") {
    showToast("⚠️ Por favor, escribe un mensaje."); // Emoji añadido
    return;
  }

  // Verificar el modo (Encriptar o Desencriptar)
  if (actionButton.textContent.includes("🔒 Encriptar")) {
    // Encriptar el mensaje
    const mensajeEncriptado = encriptar(mensaje);
    messageResult.value = mensajeEncriptado;
  } else {
    // Desencriptar el mensaje
    const mensajeDesencriptado = desencriptar(mensaje);
    messageResult.value = mensajeDesencriptado;
  }

  // Cambiar visibilidad
  form.style.display = "none";
  result.style.display = "flex";
});

// Evento para el botón de copiar
copyButton.addEventListener("click", () => {
  if (messageResult.value.trim() === "") {
    showToast("⚠️ No hay nada que copiar"); // Emoji añadido
    return;
  }

  // Copiar el mensaje al portapapeles
  messageResult.select();
  navigator.clipboard.writeText();
  showToast("📋 Mensaje copiado."); // Emoji añadido
});

// Evento para el botón de volver
backButton.addEventListener("click", () => {
  // Cambiar visibilidad
  form.style.display = "flex";
  result.style.display = "none";

  // Limpiar campos
  messageInput.value = "";
  messageResult.value = "";
});
