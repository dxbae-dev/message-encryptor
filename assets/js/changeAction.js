const toggleEncrypt = document.getElementById("toggleEncrypt");
const actionButton = document.getElementById("action");
const form = document.querySelector(".form");
const result = document.querySelector(".result");
const messageInput = document.getElementById("message");
const messageResult = document.getElementById("message-result");

let isEncryptMode = true;

toggleEncrypt.addEventListener("click", () => {
  isEncryptMode = !isEncryptMode;

  if (isEncryptMode) {
    actionButton.textContent = "🔒 Encriptar";
    toggleEncrypt.src = "assets/img/lock.png";
    showToast("🔐 Modo: Encriptación");
  } else {
    actionButton.textContent = "🔓 Desencriptar";
    toggleEncrypt.src = "assets/img/unlock.png";
    showToast("🔓 Modo: Desencriptación");
  }

  if (form.style.display === "none") {
    form.style.display = "flex";
    result.style.display = "none";
    messageInput.value = "";
    messageResult.value = "";
  }
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
