# Aplicação – Estados e Cidades (API IBGE)

Este projeto web utiliza a API oficial do IBGE para listar todos os estados brasileiros e, a partir da seleção de um deles, exibir todas as cidades associadas.

---

## Solicitações do Teste Técnico

O teste tem como objetivo avaliar a capacidade de consumir uma API pública e apresentar os dados de maneira organizada usando HTML, CSS e JavaScript.

Requisitos:

Utilizar a API pública de localidades do IBGE
  https://servicodados.ibge.gov.br/api/docs/localidades

Desenvolver uma tela para consulta de estados
(obtendo a lista via AJAX).

Desenvolver uma segunda tela que:

- Receba o estado selecionado;
- Lista todas as cidades vinculadas;
- Utiliza AJAX para requisições para a API.
- Utiliza HTML, CSS e JavaScript (Vanilla) no desenvolvimento.
- Utiliza jQuery para auxiliar na implementação.
- Fazer uso de criatividade na construção das telas.

---

## Funcionalidades
- Listagem automática dos estados do Brasil via API.
- Redirecionamento para a página de cidades.
- Exibição das cidades em ordem alfabética.
- Navegação simples entre as páginas.

---

## Estrutura do Projeto

```bash
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
```

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