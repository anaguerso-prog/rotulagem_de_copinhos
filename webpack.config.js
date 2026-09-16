const path = require('path')

module.exports = {
  // Arquivo principal de entrada
  entry: './index.js', 
  output: {
    // Arquivo de saída final que o navegador vai ler
    filename: 'bundle.js', 
    // O Webpack vai salvar dentro de uma pasta chamada "dist" na raiz do projeto
    path: path.resolve(__dirname, 'public'), 
  },
  // Mantém o código legível no bundle.js facilitando a depuração
  mode: 'development' 
}