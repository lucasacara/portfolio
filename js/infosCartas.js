function criarCarta(carta, pos) {
    var vHTML =`<div class="carta"
                     id="c`+pos+`"
                     data-naipe="`+carta.naipe+`"
                     data-numero="`+carta.numero+`"
                     style="background-image: url(img/sobre-mim/carta-`+(carta.numero)+`.jpg)"
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
    {numero: "1", titulo: "Minas Gerais", naipe: "verde", descricao: "Sem descrição."},
    {numero: "2", titulo: "TDAH", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-2.jpg"},
    {numero: "3", titulo: "IFSul", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-3.jpg"},
    {numero: "4", titulo: "Laura", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-4.jpg"},
    {numero: "5", titulo: "Mãe e Pai", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-4.jpg"},
    {numero: "6", titulo: "Linha Grão-Pará", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-5.jpg"},
    {numero: "7", titulo: "Riveira", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-6.jpg"},
    {numero: "8", titulo: "Filmes preferidos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "9", titulo: "AP Porto Alegre", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-7.jpg"},
    {numero: "10", titulo: "Perto e longe", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-8.jpg"},
    {numero: "11", titulo: "Violão", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-9.jpg"},
    {numero: "12", titulo: "UI/UX", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-10.jpg"},
    {numero: "13", titulo: "Programação", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-11.jpg"},
    {numero: "14", titulo: "Design", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-12.jpg"},
    {numero: "15", titulo: "ESPM", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-13.jpg"},
    {numero: "16", titulo: "Muda-te!", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-14.jpg"},
    {numero: "17", titulo: "Educação Social", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-15.jpg"},
    {numero: "18", titulo: "Tarot", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-16.jpg"},
    {numero: "19", titulo: "Gamificação", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-17.jpg"},
    {numero: "20", titulo: "Cafeterias", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-18.jpg"},
    {numero: "21", titulo: "Palanque", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-19.jpg"},
    {numero: "22", titulo: "Músicas e Estilos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-20.jpg"},
    {numero: "23", titulo: "Pepino", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-21.jpg"},
    {numero: "24", titulo: "Curitiba", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-22.jpg"},
    {numero: "25", titulo: "LGBT", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-23.jpg"},
    {numero: "26", titulo: "Meu 1º AP", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-24.jpg"},
    {numero: "27", titulo: "Plantas", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-25.jpg"},
    {numero: "28", titulo: "Batata Palha", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-26.jpg"},
    {numero: "29", titulo: "São Paulo", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-27.jpg"},
    {numero: "30", titulo: "Prêmios", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-28.jpg"},
    {numero: "31", titulo: "São Jerônimo", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-29.jpg"},
    {numero: "32", titulo: "Surrealismo", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "33", titulo: "Jogos favoritos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "34", titulo: "IFantasy", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "35", titulo: "Ilustração", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "36", titulo: "Empresas", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "37", titulo: "CTG Coxilha Verde", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "38", titulo: "Cabelo colorido", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "39", titulo: "Alê", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
    {numero: "40", titulo: "Hiperfoco", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.jpg"},
)

vBaralho = vBaralho.sort(() => Math.random() - 0.5);

console.log(vBaralho);

var contBaralho = document.getElementById("contBaralho");

var vHTMLDefault = document.createElement("div");
vHTMLDefault.innerHTML = "Organize";
vHTMLDefault.className = "msgDefault";
vHTMLDefault.addEventListener("click", organizarCartas);

contBaralho.innerHTML = vBaralho.map((carta, pos) => criarCarta(carta, pos)).join("");

contBaralho.prepend(vHTMLDefault);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function organizarCartas() {
    console.log("Organizando...");

    const W_TELA = window.innerWidth;
    const H_TELA = window.innerHeight;
    const N_COL  = 7;
    const N_LIN  = 7;

    // Calcula novos tamanhos das cartas de acordo com o espaço disponível
    const WO_CARTA = 224;
    const HO_CARTA = 350;
    const HN_CARTA = H_TELA / N_LIN;
    const WN_CARTA = (HN_CARTA * WO_CARTA) / HO_CARTA;

    // Redimensiona as cartas
    var lCartas = document.getElementsByClassName("carta");
    for (let x = 0; x < lCartas.length; x++) {
        var vTempoR = getRandomArbitrary(2, 3);
        var vDelayR = getRandomArbitrary(0, 1);

        lCartas[x].style.transition = "ease-in-out "+vTempoR+"s "+vDelayR+"s";
        lCartas[x].style.height = HN_CARTA+"px";
        lCartas[x].style.width  = WN_CARTA+"px";
        lCartas[x].style.borderRadius  = "0px";
    }

    //Oculta os títulos das cartas
    var lTitulosCartas = document.getElementsByClassName("titulo");
    for (let x = 0; x < lTitulosCartas.length; x++) {
        lTitulosCartas[x].style.opacity = "0";
    }

    //Calcula a posição em que as cartas devem ficar
    const W_TOTAL = WN_CARTA * N_COL;
    const H_TOTAL = HN_CARTA * N_LIN;

    const RECUO_LIN_1 = WN_CARTA * 1.5;
    const RECUO_LIN_2 = WN_CARTA * 0.5;
    const RECUO_LIN_3 = 0;
    const RECUO_LIN_4 = 0;
    const RECUO_LIN_5 = WN_CARTA * 0.5;
    const RECUO_LIN_6 = WN_CARTA * 0.5;
    const RECUO_LIN_7 = WN_CARTA * 1.5;
    
    //Posiciona as cartas para formar a imagem final
    var vNumCarta = 0;
    for (let x = 0; x < lCartas.length; x++) {
        vNumCarta = lCartas[x].attributes.getNamedItem("data-numero").value;
        
        // LINHA 1
        if (vNumCarta == 1) {
            lCartas[x].style.top  = 0 + "px";
            lCartas[x].style.left = RECUO_LIN_1 + "px";
        } else if (vNumCarta == 2) {
            lCartas[x].style.top  = 0 + "px";
            lCartas[x].style.left = RECUO_LIN_1 + (WN_CARTA * 1) + "px";
        } else if (vNumCarta == 3) {
            lCartas[x].style.top  = 0;
            lCartas[x].style.left = RECUO_LIN_1 + (WN_CARTA * 2) + "px";
        } else if (vNumCarta == 4) {
            lCartas[x].style.top  = 0;
            lCartas[x].style.left = RECUO_LIN_1 + (WN_CARTA * 3) + "px";

        // LINHA 2
        }  else if (vNumCarta == 5) {
            lCartas[x].style.top  = (HN_CARTA * 1) + "px";
            lCartas[x].style.left = RECUO_LIN_2 + (WN_CARTA * 0) + "px";
        } else if (vNumCarta == 6) {
            lCartas[x].style.top  = (HN_CARTA * 1) + "px";
            lCartas[x].style.left = RECUO_LIN_2 + (WN_CARTA * 1) + "px";
        } else if (vNumCarta == 7) {
            lCartas[x].style.top  = (HN_CARTA * 1) + "px";
            lCartas[x].style.left = RECUO_LIN_2 + (WN_CARTA * 2) + "px";
        } else if (vNumCarta == 8) {
            lCartas[x].style.top  = (HN_CARTA * 1) + "px";
            lCartas[x].style.left = RECUO_LIN_2 + (WN_CARTA * 3) + "px";
        } else if (vNumCarta == 9) {
            lCartas[x].style.top  = (HN_CARTA * 1) + "px";
            lCartas[x].style.left = RECUO_LIN_2 + (WN_CARTA * 4) + "px";
        } else if (vNumCarta == 10) {
            lCartas[x].style.top  = (HN_CARTA * 1) + "px";
            lCartas[x].style.left = RECUO_LIN_2 + (WN_CARTA * 5) + "px";
        } 

        // LINHA 3
        else if (vNumCarta == 11) {
            lCartas[x].style.top  = (HN_CARTA * 2) + "px";
            lCartas[x].style.left = RECUO_LIN_3 + (WN_CARTA * 0) + "px";
        } else if (vNumCarta == 12) {
            lCartas[x].style.top  = (HN_CARTA * 2) + "px";
            lCartas[x].style.left = RECUO_LIN_3 + (WN_CARTA * 1) + "px";
        } else if (vNumCarta == 13) {
            lCartas[x].style.top  = (HN_CARTA * 2) + "px";
            lCartas[x].style.left = RECUO_LIN_3 + (WN_CARTA * 2) + "px";
        } else if (vNumCarta == 14) {
            lCartas[x].style.top  = (HN_CARTA * 2) + "px";
            lCartas[x].style.left = RECUO_LIN_3 + (WN_CARTA * 3) + "px";
        } else if (vNumCarta == 15) {
            lCartas[x].style.top  = (HN_CARTA * 2) + "px";
            lCartas[x].style.left = RECUO_LIN_3 + (WN_CARTA * 4) + "px";
        } else if (vNumCarta == 16) {
            lCartas[x].style.top  = (HN_CARTA * 2) + "px";
            lCartas[x].style.left = RECUO_LIN_3 + (WN_CARTA * 5) + "px";
        } else if (vNumCarta == 17) {
            lCartas[x].style.top  = (HN_CARTA * 2) + "px";
            lCartas[x].style.left = RECUO_LIN_3 + (WN_CARTA * 6) + "px";
        }

        // LINHA 4
        else if (vNumCarta == 18) {
            lCartas[x].style.top  = (HN_CARTA * 3) + "px";
            lCartas[x].style.left = RECUO_LIN_4 + (WN_CARTA * 0) + "px";
        } else if (vNumCarta == 19) {
            lCartas[x].style.top  = (HN_CARTA * 3) + "px";
            lCartas[x].style.left = RECUO_LIN_4 + (WN_CARTA * 1) + "px";
        } else if (vNumCarta == 20) {
            lCartas[x].style.top  = (HN_CARTA * 3) + "px";
            lCartas[x].style.left = RECUO_LIN_4 + (WN_CARTA * 2) + "px";
        } else if (vNumCarta == 21) {
            lCartas[x].style.top  = (HN_CARTA * 3) + "px";
            lCartas[x].style.left = RECUO_LIN_4 + (WN_CARTA * 3) + "px";
        } else if (vNumCarta == 22) {
            lCartas[x].style.top  = (HN_CARTA * 3) + "px";
            lCartas[x].style.left = RECUO_LIN_4 + (WN_CARTA * 4) + "px";
        } else if (vNumCarta == 23) {
            lCartas[x].style.top  = (HN_CARTA * 3) + "px";
            lCartas[x].style.left = RECUO_LIN_4 + (WN_CARTA * 5) + "px";
        } else if (vNumCarta == 24) {
            lCartas[x].style.top  = (HN_CARTA * 3) + "px";
            lCartas[x].style.left = RECUO_LIN_4 + (WN_CARTA * 6) + "px";
        } 

        // LINHA 5
        else if (vNumCarta == 25) {
            lCartas[x].style.top  = (HN_CARTA * 4) + "px";
            lCartas[x].style.left = RECUO_LIN_5 + (WN_CARTA * 0) + "px";
        } else if (vNumCarta == 26) {
            lCartas[x].style.top  = (HN_CARTA * 4) + "px";
            lCartas[x].style.left = RECUO_LIN_5 + (WN_CARTA * 1) + "px";
        } else if (vNumCarta == 27) {
            lCartas[x].style.top  = (HN_CARTA * 4) + "px";
            lCartas[x].style.left = RECUO_LIN_5 + (WN_CARTA * 2) + "px";
        } else if (vNumCarta == 28) {
            lCartas[x].style.top  = (HN_CARTA * 4) + "px";
            lCartas[x].style.left = RECUO_LIN_5 + (WN_CARTA * 3) + "px";
        } else if (vNumCarta == 29) {
            lCartas[x].style.top  = (HN_CARTA * 4) + "px";
            lCartas[x].style.left = RECUO_LIN_5 + (WN_CARTA * 4) + "px";
        } else if (vNumCarta == 30) {
            lCartas[x].style.top  = (HN_CARTA * 4) + "px";
            lCartas[x].style.left = RECUO_LIN_5 + (WN_CARTA * 5) + "px";
        }

        // LINHA 6
        else if (vNumCarta == 31) {
            lCartas[x].style.top  = (HN_CARTA * 5) + "px";
            lCartas[x].style.left = RECUO_LIN_6 + (WN_CARTA * 0) + "px";
        } else if (vNumCarta == 32) {
            lCartas[x].style.top  = (HN_CARTA * 5) + "px";
            lCartas[x].style.left = RECUO_LIN_6 + (WN_CARTA * 1) + "px";
        } else if (vNumCarta == 33) {
            lCartas[x].style.top  = (HN_CARTA * 5) + "px";
            lCartas[x].style.left = RECUO_LIN_6 + (WN_CARTA * 2) + "px";
        } else if (vNumCarta == 34) {
            lCartas[x].style.top  = (HN_CARTA * 5) + "px";
            lCartas[x].style.left = RECUO_LIN_6 + (WN_CARTA * 3) + "px";
        } else if (vNumCarta == 35) {
            lCartas[x].style.top  = (HN_CARTA * 5) + "px";
            lCartas[x].style.left = RECUO_LIN_6 + (WN_CARTA * 4) + "px";
        } else if (vNumCarta == 36) {
            lCartas[x].style.top  = (HN_CARTA * 5) + "px";
            lCartas[x].style.left = RECUO_LIN_6 + (WN_CARTA * 5) + "px";
        } 

        // LINHA 7
        else if (vNumCarta == 37) {
            lCartas[x].style.top  = (HN_CARTA * 6) + "px";
            lCartas[x].style.left = RECUO_LIN_7 + (WN_CARTA * 0) + "px";
        } else if (vNumCarta == 38) {
            lCartas[x].style.top  = (HN_CARTA * 6) + "px";
            lCartas[x].style.left = RECUO_LIN_7 + (WN_CARTA * 1) + "px";
        } else if (vNumCarta == 39) {
            lCartas[x].style.top  = (HN_CARTA * 6) + "px";
            lCartas[x].style.left = RECUO_LIN_7 + (WN_CARTA * 2) + "px";
        } else if (vNumCarta == 40) {
            lCartas[x].style.top  = (HN_CARTA * 6) + "px";
            lCartas[x].style.left = RECUO_LIN_7 + (WN_CARTA * 3) + "px";
        }
    }

    //Centraliza na tela
    var contBaralho = document.getElementById("contBaralho");
    contBaralho.style.backgroundColor = "transparent";
    contBaralho.style.borderColor = "transparent";
    contBaralho.style.height = H_TOTAL + "px";
    contBaralho.style.width = W_TOTAL + "px";

    console.log("Organizadas...");
}