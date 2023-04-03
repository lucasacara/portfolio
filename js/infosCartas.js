function criarCarta(carta, pos) {
    var vHTML =`<div class="carta"
                     id="c`+pos+`"
                     data-naipe="`+carta.naipe+`"
                     style="background-image: url(img/sobre-mim/carta-`+(pos+1)+`.jpg)"
                     onClick="clickCarta(`+pos+`)">
                     <div class="titulo">
                        `+carta.titulo+`
                     </div>
                </div>`
    return vHTML;
}

function clickCarta(posVetor) {
    if (!vArrastando) {
        var cartaSelect = document.getElementById("c"+posVetor);
        console.log("Foi");
    } else {
        vArrastando = false;
    }
    
}

var vBaralho = []
var vArrastando = false

vBaralho.push(
    {titulo: "Minas Gerais", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "TDAH", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-2.jpg"},
    {titulo: "IFSul", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-3.jpg"},
    {titulo: "Laura", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-4.jpg"},
    {titulo: "Mãe e Pai", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-4.jpg"},
    {titulo: "Linha Grão-Pará", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-5.jpg"},
    {titulo: "Riveira", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-6.jpg"},
    {titulo: "Filmes preferidos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "AP Porto Alegre", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-7.jpg"},
    {titulo: "Perto e longe", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-8.jpg"},
    {titulo: "Violão", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-9.jpg"},
    {titulo: "UI/UX", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-10.jpg"},
    {titulo: "Programação", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-11.jpg"},
    {titulo: "Design", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-12.jpg"},
    {titulo: "ESPM", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-13.jpg"},
    {titulo: "Muda-te!", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-14.jpg"},
    {titulo: "Educação Social", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-15.jpg"},
    {titulo: "Tarot", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-16.jpg"},
    {titulo: "Gamificação", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-17.jpg"},
    {titulo: "Cafeterias", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-18.jpg"},
    {titulo: "Palanque", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-19.jpg"},
    {titulo: "Músicas e Estilos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-20.jpg"},
    {titulo: "Pepino", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-21.jpg"},
    {titulo: "Curitiba", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-22.jpg"},
    {titulo: "LGBT", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-23.jpg"},
    {titulo: "Meu 1º AP", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-24.jpg"},
    {titulo: "Plantas", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-25.jpg"},
    {titulo: "Batata Palha", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-26.jpg"},
    {titulo: "São Paulo", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-27.jpg"},
    {titulo: "Prêmios", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-28.jpg"},
    {titulo: "São Jerônimo", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-29.jpg"},
    {titulo: "Surrealismo", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Jogos favoritos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "IFantasy", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Ilustração", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Empresas", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "CTG Coxilha Verde", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Cabelo colorido", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Alê", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Hiperfoco", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
)

vBaralho = vBaralho.sort(() => Math.random() - 0.5);

console.log(vBaralho)

var contBaralho = document.getElementById("contBaralho")

/* var vHTMLDefault = document.createElement("div")
vHTMLDefault.innerHTML = "Sem mais cartas"
vHTMLDefault.className = "msgDefault" */

contBaralho.innerHTML = vBaralho.map((carta, pos) => criarCarta(carta, pos)).join("")

/* contBaralho.append(vHTMLDefault) */