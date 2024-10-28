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
});
