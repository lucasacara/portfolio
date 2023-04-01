function criarCarta(carta, pos) {
    var vHTML = "<div class='carta' style='background-image: url("+carta.img+")' onClick='clickCarta("+pos+")'></div>"
    return vHTML
}

function clickCarta(posVetor) {
    if (!vArrastando) {
        console.log(vBaralho[posVetor].titulo)
    } else {
        vArrastando = false;
    }
    
}

var vBaralho = []
var vArrastando = false

vBaralho.push(
    {titulo: "Carta 1", descricao: "Teste", img: "img/sobre-mim/carta-0.jpg"},
    {titulo: "Carta 2", descricao: "Teste 2", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Carta 3", descricao: "Teste 2", img: "img/sobre-mim/carta-0.jpg"},
    {titulo: "Carta 4", descricao: "Teste 2", img: "img/sobre-mim/carta-1.jpg"},
    {titulo: "Carta 5", descricao: "Teste 2", img: "img/sobre-mim/carta-0.jpg"},
    {titulo: "Carta 6", descricao: "Teste 2", img: "img/sobre-mim/carta-1.jpg"},
)

vBaralho = vBaralho.sort(() => Math.random() - 0.5);

console.log(vBaralho)

var contBaralho = document.getElementById("contBaralho")

/* var vHTMLDefault = document.createElement("div")
vHTMLDefault.innerHTML = "Sem mais cartas"
vHTMLDefault.className = "msgDefault" */

contBaralho.innerHTML = vBaralho.map((carta, pos) => criarCarta(carta, pos)).join("")

/* contBaralho.append(vHTMLDefault) */