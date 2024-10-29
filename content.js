// Variáveis para armazenar o ID e Nome do paciente
let selectedPatientId = null;
let selectedPatientName = null;

// Função para capturar o ID e nome do paciente da linha clicada
function capturePacienteData(element) {
  selectedPatientId = element.id;
  selectedPatientName = element.textContent.trim();
}

// Adicionar evento para observar cliques na tabela de pacientes
document.addEventListener('click', (event) => {
  if (event.target.matches('#tabelaDimanica a')) {
    capturePacienteData(event.target);
  }
});

// Ouvir mensagens de popup.js para obter os dados do paciente
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPacienteData") {
    sendResponse({
      id: selectedPatientId,
      nome: selectedPatientName,
    });
  }
});
