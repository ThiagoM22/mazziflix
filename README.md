<h1 align="center"> 🎬 Mazziflix 🍿</h1>
<p align="center">  
<img src="https://img.shields.io/badge/Status-FINALIZADO-green?style=for-the-badge"/> 
<img src="https://img.shields.io/badge/Ferramenta-Vite-yellow?style=for-the-badge"/> 
<img src="https://img.shields.io/badge/API-TMDB-blue?style=for-the-badge"/> 
<br/>
<img src="https://img.shields.io/badge/React-purple?style=for-the-badge"/> 
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge"/> 
<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge"/> 
<img src="https://img.shields.io/badge/CSS-blue?style=for-the-badge"/> 






</p>
  
</p>

## 📖 Descrição
Este projeto é um clone da interface do Netflix, desenvolvido utilizando a biblioteca React (com Vite como bundler) e consumindo dados de filmes e séries através da API do The Movie Database (TMDB).

O objetivo é replicar a experiência de navegação, exibindo listas de títulos categorizados (como "Em Alta", "Originais Netflix", "Ação", etc.), e fornecer informações detalhadas sobre os títulos.

<hr>

## ⚙️ Tecnologias Utilizadas
- **Linguagens/Plataformas:** React, JavaScript, HTML, CSS
- **Ferramentas:** Vite
- **Fonte de dados:** API TMDB

<hr>

## 📊 Funcionalidades
- Exibição de uma lista de filmes e séries, segmentada por categorias (listas da API TMDB).
- Componente de Header e Hero dinâmico, com informações do título em destaque.
- Navegação por carrosséis (rows) de filmes.
- Design responsivo para diferentes tamanhos de tela.

<hr>

## 🚀 Instalação e Execução
Siga os passos para clonar e rodar o projeto em usa máquina local

### 🔸 Requisitos Prévios

- Certifique-se de ter o Node.js e o npm intalados no seu sistema.

### 1. Clonar Repositório
```bash
git clone https://github.com/ThiagoM22/mazziflix
cd mazziflix
```

### 2. Instalar Dependências
Use o seu gerenciador de pacotes preferidos:

```bash
npm i 
```

### 3. Configurar API TMDB
Esse projeto utiliza a **API TMDB** para buscar os dados dos filmes. Você precisa de uma chave API e de um token de acesso para a API.
1. Crie uma conta no The Movie Database (TMDB)
2. Gere sua **API Key**
3. Crie um arquivo chamado ```.env```  na raiz do projeto (o Vite irá carrega-lo) e adicione suas chaves:

```bash
VITE_TMDB_API_KEY = "SUA_CHAVE_AQUI"
```

>  ⚠️ *Certifique-se de **não** enviar o arquivo ```.env``` para seu repositório Git! Adicione-o ao seu ```.gitignore```*.

### 4. iniciar o Servidor de Desenvolvimento
Após configurar a chave, você pode iniciar o projeto:
```bash
npm run dev
```
O projeto será aberto em ```http://localhost:5173/```(ou na porta que o Vite indicar).

<hr>

## 🧑‍💻 Autor

<table>

  <tr>
  <td align="center">
            <a href="https://github.com/ThiagoM22" style="text-decoration: none;">
                <img src="https://avatars.githubusercontent.com/u/158314044" width="100px;" alt="Avatar de Thiago Mazzi"/><br />
                <sub><b>Thiago Mazzi</b></sub><br />
                💻 Dev FullStack
            </a>
        </td>
  </tr>
</table>
