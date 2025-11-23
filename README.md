# Aplicação – Estados e Cidades (API IBGE)

Este projeto web utiliza a API oficial do IBGE para listar todos os estados brasileiros e, a partir da seleção de um deles, exibir todas as cidades associadas.

---

## Funcionalidades
- Listagem automática dos estados do Brasil via API.
- Redirecionamento para a página de cidades.
- Exibição das cidades em ordem alfabética.
- Navegação simples entre as páginas.

---

## Estrutura do Projeto

📁/
├── 📄 index.html # Página inicial (lista de estados)
├── 📄 cidade.html # Página com cidades do estado selecionado
├── 📄 INFO.txt # Instruções gerais do projeto
├── 📄 README.md # Documentação do repositório
│
├── 📁assets/ 
│   ├── 📁css/
│   │   └── 📄 style.css # Estilos da aplicação
│   │
│   ├── 📁images/
│   │   └── 📄 image.png # Imagem usada no projeto
│   │
│   └── 📁js/
│       ├── 📄 main.js # Lógica da página inicial (estados)
│       └── 📄 cidade.js # Lógica da página de cidades

---

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (jQuery)**
- **API do IBGE**  
  https://servicodados.ibge.gov.br/api/v1/localidades

---

## Como executar o projeto

A aplicação está disponível para execução diretamente pelo navegador através do GitHub Pages, sem necessidade de instalação ou servidor local.

Acesse a aplicação aqui:
  https://gustavooxp.github.io/projeto-cidades-estados/

---

## Fluxo de Navegação

Acesse o link do GitHub Pages.

A página inicial (index.html) carregará automaticamente a lista de estados via API do IBGE.

Escolha um estado → o botão "Ver Cidades" será habilitado.

Ao clicar, você será redirecionado para cidade.html com o ID e nome do estado.

A página exibirá todas as cidades em ordem alfabética.

Use o botão Voltar para retornar à página inicial.

---

## Requisitos

Navegador atualizado (Chrome, Edge, Firefox, etc.)

Conexão com a internet (necessária para acessar a API do IBGE)

---

## Autor

**Gustavo Miranda**  
Desenvolvido para o **Teste Técnico – Estágio | AGROSYS**.