function criarCarta(carta, pos) {
    var vHTML =`<div class="carta"
                     id="c`+pos+`"
                     data-naipe="`+carta.naipe+`"
                     data-numero="`+carta.numero+`"
                     style="background-image: url(`+(carta.img)+`)"
                     onClick="clickCarta(`+pos+`)">
                     <div class="borda"></div>
                     <div class="titulo">
                        `+carta.titulo+`
                     </div>
                </div>`
    return vHTML;
}

function clickCarta(posVetor) {
    if (!vArrastando) {
        var cartaSelect = document.getElementById("c"+posVetor);

        document.getElementById("imgCartaSelect").style.backgroundImage = "url('"+vBaralho[posVetor].img+"')";
        document.getElementById("tituloCartaSelect").innerHTML = vBaralho[posVetor].titulo;

        if (vBaralho[posVetor].naipe == "azul") {
            document.getElementById("naipeCartaSelect").innerHTML = "Carreira";
            document.getElementById("naipeCartaSelect").style.backgroundColor = "#3C8AFF";
            document.getElementById("naipeCartaSelect").style.color = "#FFFFFF";
        } else if (vBaralho[posVetor].naipe == "vermelho") {
            document.getElementById("naipeCartaSelect").innerHTML = "Unidades e pessoas";
            document.getElementById("naipeCartaSelect").style.backgroundColor = "#FF6A56";
            document.getElementById("naipeCartaSelect").style.color = "#FFFFFF";
        } else if (vBaralho[posVetor].naipe == "amarelo") {
            document.getElementById("naipeCartaSelect").innerHTML = "Pessoal";
            document.getElementById("naipeCartaSelect").style.backgroundColor = "#FFDB1C";
            document.getElementById("naipeCartaSelect").style.color = "#000000";
        } else if (vBaralho[posVetor].naipe == "verde") {
            document.getElementById("naipeCartaSelect").innerHTML = "Lugares e eventos";
            document.getElementById("naipeCartaSelect").style.backgroundColor = "#39D82B";
            document.getElementById("naipeCartaSelect").style.color = "#FFFFFF";
        }
        
        document.getElementById("descCartaSelect").innerHTML = vBaralho[posVetor].descricao;
        document.getElementById("modalCarta").style.display = "block";
    } else {
        vArrastando = false;
    }
    
}

function recomecarCartas() {
    var DRAG_ELEMENTS = document.querySelectorAll('.carta');
    var vBordas = document.querySelectorAll('.borda');

    for (let x=0; x<DRAG_ELEMENTS.length; x++) {
        DRAG_ELEMENTS[x].style.transition = "ease-in-out .5s";
        DRAG_ELEMENTS[x].style.top = "0px";
        DRAG_ELEMENTS[x].style.left = "0px";
        DRAG_ELEMENTS[x].style.height = "350px";
        DRAG_ELEMENTS[x].style.width = "224px";
        DRAG_ELEMENTS[x].style.transform = "rotate(0deg)";
        DRAG_ELEMENTS[x].style.borderRadius = "21px";
    } 

    //Oculta os títulos das cartas
    var lTitulosCartas = document.getElementsByClassName("titulo");
    for (let x = 0; x < lTitulosCartas.length; x++) {
        lTitulosCartas[x].style.opacity = "1";
    }

    //Centraliza na tela
    var contBaralho = document.getElementById("contBaralho");
    contBaralho.style.backgroundColor = "transparent";
    contBaralho.style.borderColor = "#d6d6d6";
    contBaralho.style.height = "350px";
    contBaralho.style.width = "224px";

    //Retorna as bordas
    for (let x = 0; x < vBordas.length; x++) {
        vBordas[x].style.display = "block";
    }

    setTimeout(function(){
        for (let x=0; x<DRAG_ELEMENTS.length; x++) {
            DRAG_ELEMENTS[x].style.transition = "unset";
        }
    }, 530);
}

function fecharModal() {
    document.getElementById("modalCarta").style.display = "none";
}

var vBaralho = []
var vArrastando = false

vBaralho.push(
    {numero: "1", titulo: "Minas Gerais", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-1.png"},
    {numero: "2", titulo: "TDAH", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-2.png"},
    {numero: "3", titulo: "IFSul", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-3.png"},
    {numero: "4", titulo: "Laura", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-4.png"},
    {numero: "5", titulo: "Mãe e Pai", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-5.png"},
    {numero: "6", titulo: "Linha Grão-Pará", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-6.png"},
    {numero: "7", titulo: "Riveira", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-7.png"},
    {numero: "8", titulo: "Filmes preferidos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-8.png"},
    {numero: "9", titulo: "AP Porto Alegre", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-9.png"},
    {numero: "10", titulo: "Perto e longe", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-10.png"},
    {numero: "11", titulo: "Violão", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-11.png"},
    {numero: "12", titulo: "UI/UX", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-12.png"},
    {numero: "13", titulo: "Programação", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-13.png"},
    {numero: "14", titulo: "Design", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-14.png"},
    {numero: "15", titulo: "ESPM", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-15.png"},
    {numero: "16", titulo: "Muda-te!", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-16.png"},
    {numero: "17", titulo: "Educação Social", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-17.png"},
    {numero: "18", titulo: "Tarot", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-18.png"},
    {numero: "19", titulo: "Gamificação", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-19.png"},
    {numero: "20", titulo: "Cafeterias", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-20.png"},
    {numero: "21", titulo: "Palanque", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-21.png"},
    {numero: "22", titulo: "Músicas e Estilos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-22.png"},
    {numero: "23", titulo: "Pepino", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-23.png"},
    {numero: "24", titulo: "Curitiba", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-24.png"},
    {numero: "25", titulo: "LGBT", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-25.png"},
    {numero: "26", titulo: "Meu 1º AP", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-26.png"},
    {numero: "27", titulo: "Plantas", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-27.png"},
    {numero: "28", titulo: "Batata Palha", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-28.png"},
    {numero: "29", titulo: "São Paulo", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-29.png"},
    {numero: "30", titulo: "Prêmios", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-30.png"},
    {numero: "31", titulo: "São Jerônimo", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-31.png"},
    {numero: "32", titulo: "Surrealismo", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-32.png"},
    {numero: "33", titulo: "Jogos favoritos", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-33.png"},
    {numero: "34", titulo: "IFantasy", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-34.png"},
    {numero: "35", titulo: "Ilustração", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-35.png"},
    {numero: "36", titulo: "Empresas", naipe: "azul", descricao: "Sem descrição.", img: "img/sobre-mim/carta-36.png"},
    {numero: "37", titulo: "CTG Coxilha Verde", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-37.png"},
    {numero: "38", titulo: "Cabelo colorido", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-38.png"},
    {numero: "39", titulo: "Alê", naipe: "vermelho", descricao: "Sem descrição.", img: "img/sobre-mim/carta-39.png"},
    {numero: "40", titulo: "Hiperfoco", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-40.png"},
)

vBaralho = vBaralho.sort(() => Math.random() - 0.5);

console.log(vBaralho);

var contBaralho = document.getElementById("contBaralho");

var vHTMLDefault = document.createElement("div");
vHTMLDefault.innerHTML = `<div class="imagem">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0989 2.7995L15.1889 9.0595L22.0989 10.0695L17.0989 14.9395L18.2789 21.8195L12.0989 18.5695L5.91894 21.8195L7.09894 14.9395L2.09894 10.0695L9.00894 9.0595L12.0989 2.7995Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                        
                            </div>
                          <div class="texto">Organizar</div>`;
vHTMLDefault.className = "botao pCenter";
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
        lCartas[x].style.transform  = "rotate(0deg)";
    }

    //Oculta os títulos das cartas
    var lTitulosCartas = document.getElementsByClassName("titulo");
    for (let x = 0; x < lTitulosCartas.length; x++) {
        lTitulosCartas[x].style.opacity = "0";
    }

    // Oculta as bordas
    var vBordas = document.querySelectorAll('.borda');
    for (let x = 0; x < vBordas.length; x++) {
        vBordas[x].style.display = "block";
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