<<<<<<< HEAD
// Função para exibir o aviso estilizado
function exibirAviso(mensagem) {
  const aviso = document.createElement("div");
  aviso.className = "aviso";
  aviso.innerHTML = `
      <span>${mensagem}</span>
      <button class="fechar-aviso">&times;</button>
  `;

  document.body.appendChild(aviso);

  aviso.querySelector(".fechar-aviso").addEventListener("click", () => {
      aviso.remove();
  });

  setTimeout(() => {
      aviso.remove();
  }, 5000); // Remove o aviso automaticamente após 5 segundos
}

// Suporte via WhatsApp
document.getElementById("support-button").addEventListener("click", function() {
  window.open("https://wa.me/5534999198782", "_blank");
});

// Configura o evento de clique no botão "Gerar Cupom"
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado");

  const gerarCupomButton = document.getElementById("gerar-cupom");
  let printCount = 0; // Contagem de impressões

  if (gerarCupomButton) {
      gerarCupomButton.addEventListener("click", () => {
          console.log("Botão 'Gerar Cupom' clicado");

          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              chrome.tabs.sendMessage(tabs[0].id, { action: "getPacienteData" }, (response) => {
                  if (response) {
                      const { id, nome } = response;
                      const logoPath = chrome.runtime.getURL("logopreta.png");
                      const cupomContent = `
                          <div style="text-align: left; font-family: Arial, sans-serif; width: 59mm; margin: 0; padding: 0;">
                              <img src="${logoPath}" alt="Logo" style="width: 100%; height: auto;">
                              <h2 style="font-size: 20px;">Laboratório Bioklin</h2>
                              <hr style="border-top: 1px dashed #000;">
                              <p><strong>ID do Paciente:</strong> ${id}</p>
                              <p><strong>Nome do Paciente:</strong> ${nome}</p>
                              <hr style="border-top: 1px dashed #000;">
                              <p>Atendimento com Qualidade e Precisão!</p>
                          </div>
                      `;

                      const printWindow = window.open("", "_blank", "width=300,height=400");
                      printWindow.document.write(`
                        <html>
                          <head>
                            <title>Impressão de Cupom</title>
                            <style>
                              body { font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; }
                              h2 { font-size: 20px; margin: 0; }
                              p { font-size: 18px; margin: 0; }
                              hr { border-top: 1px dashed #000; margin: 2px 0; }
                            </style>
                          </head>
                          <body onload="window.print(); window.close();" style="margin: 0; padding: 0;">
                            ${cupomContent}
                          </body>
                        </html>
                      `);
                      printWindow.document.close();
                      printCount++;
                      document.getElementById("print-count").textContent = `Impressões: ${printCount}`;
                  } else {
                      exibirAviso("Selecione um paciente primeiro.");
                  }
              });
          });
      });
  } else {
      console.error("Botão 'Gerar Cupom' não encontrado.");
  }
=======
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("gerar-cupom").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getPacienteData" }, (response) => {
        if (response) {
          const { id, nome } = response;
          const logoPath = chrome.runtime.getURL("logo.png");
          const cupomContent = `
              <div style="text-align: left; font-family: Arial, sans-serif; width: 59mm; margin: 0; padding: 0; margin-left: -0.5mm;">
              <img src="${logoPath}" alt="Logo" style="width: 100%; max-width: 800px; height: auto; display: block; margin: 0;">
              <h2 style="font-size: 20px; margin: 0;">Laborat&oacute;rio Bioklin</h2>
              <hr style="border-top: 1px dashed #000; margin: 2px 0;">
              <p style="font-size: 18px; margin: 0;"><strong>ID do Paciente:</strong> ${id}</p>
              <p style="font-size: 18px; margin: 0;"><strong>Nome do Paciente:</strong> ${nome}</p>
              <hr style="border-top: 1px dashed #000; margin: 2px 0;">
              <p style="font-size: 16px; margin: 5px 0;">Atendimento com Qualidade e Precis&atilde;o!</p>
             </div>



          `;

          const printWindow = window.open("", "_blank", "width=300,height=400");
          printWindow.document.write(`
            <html>
              <head>
                <title>Impressão de Cupom</title>
                <style>
                  body { font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; }
                  h2 { font-size: 20px; margin: 0; }
                  p { font-size: 18px; margin: 0; }
                  hr { border-top: 1px dashed #000; margin: 2px 0; }
                </style>
              </head>
              <body onload="window.print(); window.close();" style="margin: 0; padding: 0;">
                ${cupomContent}
              </body>
            </html>
          `);
          printWindow.document.close();
        } else {
          alert("Selecione um paciente primeiro.");
        }
      });
    });
  });
>>>>>>> 110c82278fae2b88030eeeda95915cfaec51e3a4
});
