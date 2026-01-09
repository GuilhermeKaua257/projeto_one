const produtoRepository =require('../repository/produtoRepository'); 

exports.criarProduto = (rl, menuVoltar) => {
  rl.question("Nome do produto: ", nome => {
    rl.question("Categoria: ", categoria => {
      rl.question("Preço: ", preco => {
        rl.question("Quantidade: ", quantidade => {

          const produto = produtoRepository.criarProduto({
            nome,
            categoria,
            preco,
            quantidade
          });

          console.log("\nProduto criado com sucesso!");
          console.log(produto);

          menuVoltar(); 
        });
      });
    });
  });
};


exports.listarProdutos = (menuVoltar) => {
  const produtos = produtoRepository.listarProdutos();
  if(produtos.length != 0){
  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
  } else {
    produtos.forEach(produto => console.log(produto));
  }
  menuVoltar();
  }else{
      console.log("Não há produtos cadastrados")
      menuVoltar();
  }
};

function buscarProdutoPorId(id) {
  const produtos = produtoRepository.listarProdutos();
  if(produtos.length != 0){
  const idNumber = Number(id); 

  return produtos.find(produto => produto.id === idNumber) || null;
  }else{
      console.log("Não há produtos cadastrados")
  }
}



exports.buscarProduto = (rl, menuVoltar) => {
  rl.question("Informe o ID do produto: ", id => {
    const produto = buscarProdutoPorId(id);

    if (!produto) {
      console.log("Produto não encontrado.");
    } else {
      console.log(produto);
    }

    menuVoltar();
  });
};


exports.excluirProduto= (rl, menuVoltar) =>{
  rl.question("Informe o ID do produto: ", id => {
    const produtos = produtoRepository.listarProdutos();
    if(produtos.length != 0){

     const indexProdutoRemovido = produtos.findIndex(produto =>produto.id === Number(id));

    if (indexProdutoRemovido === -1) {
      console.log("Produto não encontrado.");
      menuVoltar()
      return null;
      }

     produtos.splice(indexProdutoRemovido, 1);  

      console.log("produto removido com sucesso ")
      console.log(produtos);
      menuVoltar()
      return id;
    }else{
      console.log("Não há produtos cadastrados")
      menuVoltar();
    }

  })

}
 
exports.atualizarProduto = (rl, menuVoltar) => {
  rl.question("Informe o ID do produto: ", id => {
    
    const produto = buscarProdutoPorId(id);

    if (!produto) {
      console.log("Produto não encontrado.");
      return menuVoltar();
    }

    rl.question(`Nome (${produto.nome}): `, nome => {
      rl.question(`Categoria (${produto.categoria}): `, categoria => {
        rl.question(`Quantidade (${produto.quantidade}): `, quantidade => {
          rl.question(`Preço (${produto.preco}): `, preco => {

            const qtdNum = quantidade ? Number(quantidade) : produto.quantidade;
            const precoNum = preco ? Number(preco) : produto.preco;

            if (qtdNum < 0 || precoNum < 0) {
              console.log("Quantidade ou preço inválido.");
              menuVoltar()
            }

            produto.nome = nome || produto.nome;
            produto.categoria = categoria || produto.categoria;
            produto.quantidade = qtdNum;
            produto.preco = precoNum;

            console.log("\n Produto atualizado com sucesso!");
            console.log(produto);
            menuVoltar()
          });
        });
      });
    });
  });
};


