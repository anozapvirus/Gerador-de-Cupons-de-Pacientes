# Gerador de Cupons de Pacientes - Laboratório Bioklin

Esta extensão do Chrome permite gerar e imprimir cupons personalizados com o ID e o nome dos pacientes diretamente da plataforma [Clinicando](https://app.clinicando.med.br). Ideal para o Laboratório Bioklin, a extensão formata o cupom para impressoras térmicas de bobina com largura de papel de 58 mm.

## Funcionalidades

- Captura o ID e o nome do paciente ao clicar em sua entrada na tabela de pacientes.
- Gera um cupom pronto para impressão com o nome, ID do paciente e uma mensagem personalizada de atendimento.
- Inclui a logo do Laboratório Bioklin no cupom.
- Compatível com impressoras térmicas com bobinas de largura 58 mm e área de impressão de 48 mm.

## Instalação

1. Baixe o repositório e extraia o conteúdo em uma pasta local.
2. No Chrome, vá para `chrome://extensions/` e ative o "Modo do desenvolvedor".
3. Clique em "Carregar sem compactação" e selecione a pasta da extensão.
4. A extensão será exibida na barra de extensões com o ícone do Laboratório Bioklin.

## Como Usar

1. Acesse a página de pacientes no [Clinicando](https://app.clinicando.med.br/pacientes).
2. Selecione um paciente clicando em seu nome.
3. Clique no ícone da extensão e selecione "Gerar Cupom".
4. O cupom será gerado em uma nova janela e automaticamente enviado para impressão.

## Estrutura do Projeto

- **background.js**: Gerencia a criação e o envio dos dados para impressão.
- **content.js**: Captura e armazena o ID e nome do paciente ao clicar na entrada da tabela.
- **popup.html**: Interface popup que oferece o botão "Gerar Cupom".
- **popup.js**: Gatilho para captura dos dados e acionamento da impressão.
- **manifest.json**: Configuração do manifesto da extensão.

## Configurações da Impressora

Para obter o melhor resultado, configure a impressora térmica com as seguintes especificações:
- **Largura da bobina**: 58 mm
- **Área de impressão**: 48 mm
- **Resolução**: 203 dpi

## Notas Técnicas

- **Permissões Necessárias**:
  - `activeTab`: Para acessar a página ativa e capturar dados.
  - `scripting`: Permite a injeção do script de conteúdo na página Clinicando.
- **Codificação**: Certifique-se de que a impressora térmica está configurada para UTF-8 para suportar caracteres acentuados.

## Exemplo de Cupom Gerado

O cupom impresso inclui:
- **Logo**: Em tamanho otimizado para 80px de largura.
- **ID e Nome do Paciente**: Dados capturados diretamente da plataforma Clinicando.
- **Mensagem de Atendimento**: "Atendimento com Qualidade e Precisão!".


src/
├── components/
│   ├── CupomGenerator.js      # Componente principal para geração do cupom
│   ├── SupportButton.js       # Componente para botão de suporte do WhatsApp
├── assets/
│   ├── logo.png               # Logo do laboratório
├── App.js                     # Componente principal da extensão
├── styles.css                 # Estilos globais
popup.html                     # Estrutura HTML inicial
manifest.json                  # Arquivo de configuração da extensão


## Capturas de Tela

| Tela de Seleção | Cupom Gerado |
|-----------------|--------------|
| ![Tela de Seleção](./screenshots/tela-selecao.png) | ![Cupom Gerado](./screenshots/cupom-gerado.png) |

## Licença

Este projeto é licenciado sob os termos da licença MIT.
