

const items = [
    {
        id: 0,
        nome:"camiseta",
        img: "img/camiseta.jpg",
        valor: "R$ 39,99",
        quantidade: 10
    },
    {
        id: 1,
        nome:"short",
        img: "img/shorts.jpg",
        valor: "R$ 100,00",
        quantidade: 20
    },
    {
        id: 2,
        nome:"sapato",
        img: "img/sapato.jpg",
        valor: "R$ 199,99",
        quantidade: 11
    }
]



let inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `


    <div class="produto-single">
    <img src="${val.img}"/>
    <div class= "botão-adicionar-carrinho">
    <i class="fa-solid fa-cart-shopping"></i>  
    <a key="${val.id}" href="#" class="botao-comprar">Adicionar ao Carrinho</a>
    </div>
    </div>
        `;
    })
}


inicializarLoja();


let atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML+= `
        
        <img src="${val.img}"/><br/>
        <p>${val.nome}</p>
        <p> quantidade: ${val.quantidade}</p>
        <p>Valor unitário: R$ ${val.valor.replace("R$","")}</p>
        <button onclick='removerDoCarrinho(${val.id})'>Remover
        <hr>
        


        `;
        }
    })
 

}




var links = document.getElementsByTagName('a');


for(var i = 0; 1 < links.length; i++){
    links[i].addEventListener("click",function(){
        let  key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
})

}

atualizarCarrinho();