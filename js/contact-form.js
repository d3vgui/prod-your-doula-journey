document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o redirecionamento

  const formData = new FormData(this);

  fetch("https://formsubmit.co/info@yourdoulajourney.com", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      Toastify({
        text: "✅ Mensagem enviada com sucesso!",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        duration: 4000,
        gravity: "bottom", // posição vertical
        position: "right" // posição horizontal
      }).showToast();
      this.reset();
    } else {
      Toastify({
        text: "❌ Erro ao enviar mensagem.",
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        duration: 4000,
        gravity: "bottom",
        position: "right"
      }).showToast();
    }
  })
  .catch(() => {
    Toastify({
      text: "⚠️ Ocorreu um erro inesperado.",
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
      duration: 4000,
      gravity: "top",
      position: "right"
    }).showToast();
  });
});
