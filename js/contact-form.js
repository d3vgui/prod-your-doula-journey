document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(this);

    const nome = data.get("nome").trim();
    const email = data.get("email").trim();
    const telefone = data.get("telefone").trim();
    const mensagem = data.get("mensagem").trim();

    const textoWhats = `Olá, Your Doula Journey!

Meu nome é ${nome}, vim através do site e gostaria de mais informações.

Telefone/WhatsApp: ${telefone}
E‑mail: ${email}

Mensagem:
${mensagem}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=15618667280&text=${encodeURIComponent(
      textoWhats
    )}`;

    window.open(whatsappURL, "_blank");
  });
