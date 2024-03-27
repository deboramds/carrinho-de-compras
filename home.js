

const items = [
    {
        id: 0,
        nome:"camiseta",
        img: "img/image.jpg",
        quantidade: 10
    },
    {
        id: 1,
        nome:"short",
        img: "img/image.jpg",
        quantidade: 20
    },
    {
        id: 2,
        nome:"sapato",
        img: "img/image.jpg",
        quantidade: 11
    }
]



let inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `


    <div class="produto-single">
    <img src="${val.img}"/>
    <p> ${val.nome}</p>
    <a key="${val.id}" href="#">Adicionar ao Carrinho!</a>
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
        
        <p>${val.nome} | quantidade: ${val.quantidade}</p>
        <hr>


        `;
        }
    })
 

}

atualizarCarrinho();


var links = document.getElementsByTagName('a');


for(var i = 0; 1 < links.length; i++){
    links[i].addEventListener("click",function(){
        let  key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
})

}

