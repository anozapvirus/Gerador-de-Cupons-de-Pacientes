chrome.runtime.onMessage.addListener((message) => {
  if (message.id && message.nome) {
      const logoPath = chrome.runtime.getURL("logo.png");
      const cupomContent = `
          <div style="width: 58mm; text-align: center; font-family: Arial, sans-serif; margin: 0; padding: 0;">
            <img src="${logoPath}" alt="Logo Laborat&oacute;rio Bioklin" style="width: 100%; max-width: 400px; height: auto; display: block; margin: 0;">
            <h2 style="font-size: 18px; margin: 0;">Laborat&oacute;rio Bioklin</h2>
            <hr style="border: 0; border-top: 1px dashed #000; margin: 2px 0;">
            <p style="font-size: 16px; margin: 0;"><strong>ID do Paciente:</strong> ${message.id}</p>
            <p style="font-size: 16px; margin: 0;"><strong>Nome do Paciente:</strong> ${message.nome}</p>
            <hr style="border: 0; border-top: 1px dashed #000; margin: 2px 0;">
            <p style="font-size: 14px; margin: 5px 0;">Atendimento com Qualidade e Precis&atilde;o!</p>
          </div>
      `;

      const printWindow = window.open("", "_blank", "width=500,height=500");
      printWindow.document.write(`
        <html>
          <head>
            <title>Impressão de Cupom</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; }
              h2 { font-size: 18px; margin: 0; }
              p { font-size: 16px; margin: 0; }
              hr { border-top: 1px dashed #000; margin: 2px 0; }
            </style>
          </head>
          <body onload="window.print(); window.close();" style="margin: 0; padding: 0;">
            ${cupomContent}
          </body>
        </html>
      `);
      printWindow.document.close();
  }
});
