function criaCartao (categoria,pergunta,resposta){

    let container = document.getElementById ('container');
    let cartao = document.createElement ('article');
    cartao.className= 'cartao';
    cartao.innerHTML = `
    
    <div class="conteudo-Cartao">
    <h3>$categoria</h3>
    <div class="pergunta-cartao">
        <p>$pergunta</p>
    </div>
    <div class="respostaCartao">
        <p>resposta</p>
    </div>
</div>
`
container.appendChild(Car);
}