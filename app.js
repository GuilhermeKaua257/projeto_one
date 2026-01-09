const readline = require("readline");
const {
  criarProduto,
  listarProdutos,
  buscarProduto,
  excluirProduto,
  atualizarProduto
} = require("./src/services/produtoServices");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log(`
======= MENU =======
1 - Criar produto
2 - Listar produtos
3 - Buscar produto
4 - Atualizar produto
5 - Excluir produto
0 - Sair
====================
`);

  rl.question("Escolha uma opção: ", opcao => {
    switch (opcao) {
      case "1":
        criarProduto(rl, menu);
        break;

      case "2":
        listarProdutos(menu);
        break;

      case "3":
        buscarProduto(rl, menu);
        break;

      case "4":
        atualizarProduto(rl, menu);
        break;

      case "5":
        excluirProduto(rl, menu);
        break;

      case "0":
        console.log("Sistema encerrado.");
        rl.close();
        break;

      default:
        console.log("Opção inválida!");
        menu();
    }
  });
}


menu();
