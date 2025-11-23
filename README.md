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

/
│-- index.html # Página inicial (lista de estados)
│-- cidade.html # Página com cidades do estado selecionado
│-- INFO.txt # Instruções gerais do projeto
│-- README.md # Documentação do repositório
│
│-- /assets
│ ├── /css
│ │ └── style.css # Estilos da aplicação
│ │
│ ├── /images
│ │ └── image.png # Imagem usada no projeto
│ │
│ └── /js
│ ├── main.js # Lógica da página inicial (estados)
│ └── cidade.js # Lógica da página de cidades

---

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (jQuery)**
- **API do IBGE**  
  https://servicodados.ibge.gov.br/api/v1/localidades

---

## Como Executar o Projeto

As requisições AJAX **não funcionam** ao abrir os arquivos diretamente pelo navegador (file://).  
É necessário executar o projeto em um servidor local.

### Método recomendado – *Live Server (VS Code)*

1. Abra o projeto no **Visual Studio Code**.
2. Instale a extensão **Live Server** (caso não tenha).
3. Clique com o **botão direito** no arquivo `index.html`.
4. Escolha **Open with Live Server**.
5. O navegador abrirá automaticamente com o projeto funcionando.

---

## Fluxo de Navegação

1. Acesse `index.html` pelo Live Server.  
2. A lista de estados será carregada automaticamente via API.  
3. Escolha um estado → o botão **"Ver Cidades"** será habilitado.  
4. O sistema redireciona para `cidade.html` passando o ID e nome do estado na URL.  
5. Todas as cidades deste estado serão exibidas em ordem alfabética.  
6. Clique em **Voltar** para retornar à lista de estados.

---

## Requisitos

- Navegador atualizado (Chrome, Edge, Firefox, etc.)
- Conexão com a internet (para acessar a API do IBGE)
- Servidor local (Live Server ou similar)

---

## Autor

**Gustavo Miranda**  
Desenvolvido para o **Teste Técnico – Estágio | AGROSYS**.