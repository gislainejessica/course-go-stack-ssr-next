## Passo a passo de criação de uma aplicação em NextJs - App number 1

- git clone repositorio.git
- cd repositorio
- yarn init -y
- yarn add next react react-dom
- mkdir pages
- cd pages
- touch index.js
- cd ..
- code .

- add to `package.json`
 ```js
  "scripts":{
    "dev": "next",
    "start": "next start",
    "build": "next build"
  }
```
- yarn add axios

Next só carrega usando o servidor na primeira pagina da aplicação, 
o resto das paginas é carregada pelo navegador.

