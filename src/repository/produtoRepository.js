let listaProdutos =[]; // Cria lista de produtos - Banco de dados
 let idInicial=1;


const fs = require("fs");
const path = require("path");

const arquivo = path.join(__dirname, "../data/produtos.json");

// 🔹 Ler arquivo
function lerArquivo() {
  if (!fs.existsSync(arquivo)) {
    fs.writeFileSync(arquivo, JSON.stringify([]));
  }

  const dados = fs.readFileSync(arquivo, "utf-8");
  return JSON.parse(dados);
}


function salvarArquivo(produtos) {
  fs.writeFileSync(arquivo, JSON.stringify(produtos, null, 2));
}


exports.criarProduto = (produto) => {
  const produtos = lerArquivo();
  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    ...produto
  };

  produtos.push(novoProduto);
  salvarArquivo(produtos);
  return novoProduto;
};


exports.listarProdutos = () => {
  return lerArquivo();
};


exports.buscarPorId = (id) => {
  const produtos = lerArquivo();
  return produtos.find(p => p.id === id) || null;
};


exports.excluirProduto = (id) => {
  const produtos = lerArquivo();
  const index = produtos.findIndex(p => p.id === id);

  if (index === -1) return false;

  produtos.splice(index, 1);
  salvarArquivo(produtos);
  return true;
};


exports.atualizarProduto = (produtoAtualizado) => {
  const produtos = lerArquivo();
  const index = produtos.findIndex(p => p.id === produtoAtualizado.id);

  if (index === -1) return false;

  produtos[index] = produtoAtualizado;
  salvarArquivo(produtos);
  return true;
};



