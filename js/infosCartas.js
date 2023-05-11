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
    {numero: "1", titulo: "O Dinossauro Rosa", naipe: "verde", descricao: "Quando eu era pequeno, ganhei uma caneta de dinossauro rosa que boxeava. Não, não era o desenho de um dinossauro com luvas de boxe. A caneta literalmente desferia soquinhos quando você apertava um botão. Ela não me tornou alguém agressivo, nem é um item que guardo com esmero até hoje. Mas por algum motivo, essa caneta grudou na minha memória e, até hoje, esboço um sorriso involuntário quando lembro dela.", img: "img/sobre-mim/carta-1.png"},
    {numero: "2", titulo: "TDAH", naipe: "amarelo", descricao: "Esse é um tópico importante, de verdade. Tem muita coisa aqui que é corriqueira, mas o TDAH não é uma delas. Eu nasci com Déficit de Atenção e Hiperatividade e vou carregar esse Transtorno mental até meu último suspiro. Mas calma, essa não é uma carta triste. Pelo contrário, tem dias que é bem doido e até consigo rir de mim mesmo, mas eu também fico triste quando simplesmente não consigo entregar uma tarefa no prazo ou esqueço do que tava falando no meio da frase. Fui diagnosticado apenas na fase adulta, porque quando eu era criança não desconfiaram que eu pudesse ter algo do tipo. Mas também não desconfiaram que eu não enxergava direito, e fui descobrir por conta própria que eu tinha mais de 3 graus de Astigmatismo e Miopia lá pelos meus 18 anos. Quando meu diagnóstico foi confirmado, senti uma peça se encaixando e muita coisa fazendo sentido. Senti um peso saindo das minhas costas, por finalmente entender que minhas “disfuncionalidades” não eram necessariamente minha culpa, minha tão grande culpa. Minha primeira tatuagem - um psyduck em Euforia e em Confusão - foi pra registrar essa característica que molda uma boa parte de quem eu fui, de quem eu sou e pra onde vou ir.", img: "img/sobre-mim/carta-2.png"},
    {numero: "3", titulo: "IFSul", naipe: "azul", descricao: "Tive a sorte e a oportunidade de nascer em uma cidade onde um Câmpus do IFSul foi implantado. Foi por conta desse lugar que tive acesso a tantas novas portas. Foi aqui que encontrei apoio em momentos complexos demais para meu eu de 15 anos conseguir lidar sozinho. Me formei Técnico em Informática e tive minha primeira oportunidade de trabalho ainda durante meu ensino médio-técnico. Desenvolvi projetos, visitei outras cidades e conheci gente incrível no meio desse processo todo. Dizem as más línguas (e elas não mentem) que, se não fosse o IFSul, eu não estaria namorando hoje.", img: "img/sobre-mim/carta-3.png"},
    {numero: "4", titulo: "Laura", naipe: "vermelho", descricao: "Tenho dois irmãos mais velhos, uma irmã mais velha e uma irmã mais nova. Essa última é a Laura, seis anos mais nova do que eu. Ela é meio doida e avoada, parece que nunca sabe o que tá acontecendo ao redor dela e vive com fome. Acho que eu gosto tanto dela porque me identifico com tudo isso. A gente sempre se apoiou ao longo desse processo estranho que é atingir a idade adulta, e as vezes eu acho que ela nem tem noção do quanto é importante pra mim. Ainda hoje, sempre que me despeço dela, repito o mesmo boa noite que dizia quando a gente era pequeno: “Boa noite, te amo de verdade, sonhe com os anjinhos, te amo”.", img: "img/sobre-mim/carta-4.png"},
    {numero: "5", titulo: "Mãe e Pai", naipe: "vermelho", descricao: "Meu pai é Técnico em Eletrônica e sabe arrumar quase tudo, menos ovos quebrados e toucas de tecido. Ama tecnologia e tudo voltado à inovação, ainda que às vezes ele não consiga acompanhar o ritmo desse mundo todo. Minha mãe é Professora de Educação Infantil. Sim, isso significa que cresci em uma casa rodeada de EVA, TNT, tinta têmpera e fantasias feitas à mão. Quando eu era pequeno e ficava com medo dos cachorros latindo na rua (porque achava que tinha alguma coisa do lado de fora), ela me dizia que eles só estavam aproveitando que os donos foram dormir pra colocar o papo em dia. De alguma forma, sinto que eu sou um aglomerado das tech-fantasias desses dois.", img: "img/sobre-mim/carta-5.png"},
    {numero: "6", titulo: "Linha Grão-Pará", naipe: "verde", descricao: "Asfalto, prédios altos, carros passando e vizinhos que nunca se cumprimentam. Se você visualizar tudo isso junto, vai chegar em um cenário que não tem absolutamente nada a ver com o lugar onde nasci e passei meus primeiros 20 anos de vida. Linha Grão-Pará fica no interior do interior do estado do RS. Tem estrada de chão, mato, boi, umas criança indo à pé pra escola, uma comunidade católica e um campo de futebol bem grande. Lá todo mundo é vizinho, mesmo que more à 6km de distância um do outro. Um fim de semana por mês tinha missa na comunidade e depois a gente voltava pra casa pra fazer um almoço diferenciado - lasanha, frango a milanesa ou uma batatinha frita. Ainda hoje, não tem iFood que entregue comida lá, então é bom você se preparar com antecedência caso queira fazer uma janta diferente no finde, ou então vai precisar fazer uma viagenzinha de 15 minutos de carro até chegar na cidade.", img: "img/sobre-mim/carta-6.png"},
    {numero: "7", titulo: "Cabana de cobertor", naipe: "verde", descricao: "Acho que todo mundo já fez isso na infância, né? Pega quatro cadeiras, pega um cobertor e joga por cima da estrutura. Tá pronta a cabaninha! Eu adorava brincar disso quando era menor. Nunca esqueço de uma vez que cheguei em casa e minha mãe tinha montado uma cabaninha surpresa pra mim. Ao invés de usar só as cadeiras, ela juntou vários lençóis e fez eles irem até o teto! Foi o suprassumo das cabaninhas de cobertor. Por umas 3 noites seguidas, eu e minha irmã mais nova dormimos naquela cabana que tomou conta de toda a sala de casa.", img: "img/sobre-mim/carta-7.png"},
    {numero: "8", titulo: "Filmes preferidos", naipe: "amarelo", descricao: "Ainda que boa parte da minha geração tenha vivenciado apenas a era dos filmes em DVD, lá em casa nós tivemos por muito tempo um videocassete. Internet, então, fui ter só por volta dos meus 13 anos. Até lá, eu assistia as fitas que tinham em casa. Matilda, Harry Potter e Shrek foram, com toda a certeza, os filmes que eram assistidos e rebobinados diariamente. Ponte para Terabítia também foi um marco pra mim, por conta de toda a riqueza imaginativa dos protagonistas. Mais recentemente, me encantei com Gato de Botas 2 pelo estilo artístico e com Tudo em Todo Lugar ao Mesmo Tempo por… bem, ser o que ele é.", img: "img/sobre-mim/carta-8.png"},
    {numero: "9", titulo: "AP Porto Alegre", naipe: "verde", descricao: "Me mudar para Porto Alegre foi minha segunda experiência com mudanças, mas a primeira vez em que me mudei para fora da cidade de onde meus pais moravam. Vim morar na capital gaúcha por conta da faculdade em 2021, acompanhado do meu namorado, da minha antiga colega de ensino médio e do meu gato, Pepino.", img: "img/sobre-mim/carta-9.png"},
    {numero: "10", titulo: "Perto e longe", naipe: "vermelho", descricao: "Tive a oportunidade de conhecer meus 4 avós ainda em vida. Os pais da minha mãe moravam na cidade, e os meus avós paternos moravam no interior, na casa ao lado da nossa. A dinâmica com meus dindos também era parecida: tinha uma madrinha que morava pertinho da minha casa e outra que morava longe. Por isso, passei a minha infância toda chamando esses parentes não pelo nome, mas pela mistura do “cargo” que ocupavam na minha vida + a distância com que moravam de mim. Assim, eu tinha a minha “Dinda de perto” e o meu “Vovô de longe” (e todos os desdobramentos restantes).", img: "img/sobre-mim/carta-10.png"},
    {numero: "11", titulo: "Violão", naipe: "amarelo", descricao: "Ganhei meu primeiro violão aos 6 anos, presente do meu Dindo de Longe. Ele era preto e tinha um adesivo do Grêmio - time que eu torço porque me disseram que eu tinha que torcer para algum time -. Foi nessa mesma idade que comecei a fazer curso de violão, mas fiquei nas aulas só por 3 meses. Com o passar dos anos, fui aprendendo e dominando o instrumento com a ajuda do Agostinho (um senhor que morava perto da minha casa) e com algumas aulas comunitárias. Tive outros dois violões: um que ganhei em uma rifa da comunidade em Linha Grão Pará e outro que ganhei do meu Vovô de Perto. Esse último eu ainda tenho até hoje, e toda vez que toco, sinto que entro em um estado quase meditativo. Sou só eu e o Violão. Meu Dindo me dizia que um dia eu seria um cantor famoso e ia dizer em um show que o primeiro violão que eu tinha ganhado era dele. Acho que isso não vai chegar a acontecer, então eu aproveito esse espaço para dar os devidos créditos a ele.", img: "img/sobre-mim/carta-11.png"},
    {numero: "12", titulo: "UI/UX", naipe: "azul", descricao: "Uma das minhas principais áreas de atuação dentro do Design. Tive 2 despertares para essa área: o primeiro ocorreu durante uma aula de Web Design no 3º ano do IFSul, e o segundo foi enquanto eu trabalhava como Programador no meu 1º emprego. Percebia que as interfaces dos sites e dos aplicativos podiam ser tanto mais, mas eram tão pouco exploradas e aproveitadas; percebi que as empresas costumavam não ligar para a usabilidade dos seus sistemas, mesmo que isso pudesse custar - inclusive - a sanidade dos seus colaboradores. Foi querendo lutar contra isso que decidi começar a projetar interfaces criativas, acessíveis e diferentes para quaisquer que fossem as empresas ou o propósito. Hoje acumulo mais de 5 anos de experiência na área e muitos estilos de botões diferentes já desenhados.", img: "img/sobre-mim/carta-12.png"},
    {numero: "13", titulo: "Programação", naipe: "azul", descricao: "Eu gostava de mexer em computadores desde sempre, sabe? Meu pai, por ser Técnico em Informática, vivia trabalhando com computadores, formatando eles, desmontando e montando de novo. Por influência direta, desenvolvi um gosto pela coisa. Quando ingressei no IFSul, percebi que programação realmente era a minha praia. Porém, por conta de um TDAH não diagnosticado, acabei enjoando logo da rotina de códigos e acabei migrando para o Design depois de trabalhar 2 anos com programação. Entretanto, ainda hoje utilizo dessa área do conhecimento para dar vida ao lado tecno criativo da minha cabeça.", img: "img/sobre-mim/carta-13.png"},
    {numero: "14", titulo: "Design", naipe: "azul", descricao: "Um belo dia, enquanto eu trabalhava na CantuStange em meio à pandemia, caiu a ficha de que talvez não fosse a área em que eu mais gostasse de trabalhar. Durante este trabalho, passei a entender que eu achava mais prazeroso desenhar as telas do que propriamente programá-las. Apesar do medo de “trocar de carreira”, minha família e até meu próprio chefe me apoiaram nessa escolha. Comecei a estudar Design Visual na ESPM em 2020, em meio à pandemia, e hoje me sinto abraçado pela multiplicidade de atuações possíveis dentro de uma mesma carreira.", img: "img/sobre-mim/carta-14.png"},
    {numero: "15", titulo: "ESPM", naipe: "azul", descricao: "Eu estudei minha vida toda em escolas públicas. Minha família nunca teve dinheiro para pagar uma escola particular, mas isso não era necessariamente um problema. Sou grato todos os dias por ter tido a oportunidade de estudar nas escolas que estudei e seguirei defendendo o ensino público, gratuito e de qualidade. Quando pensei em cursar uma universidade, descobri que existia uma faculdade de Design em Porto Alegre que era muito bem conceituada e parecia ter uma estrutura incrível para o meu curso. O único problema é que ela era particular e totalmente inacessível para a minha classe social. Entretanto, descobri que existia uma bolsa 100% para alunos vindos de escola pública que passassem em 1º ou 2º lugar no vestibular deles. E bem… não é que deu certo?!", img: "img/sobre-mim/carta-15.png"},
    {numero: "16", titulo: "Muda-te!", naipe: "vermelho", descricao: "Eram umas 12 crianças e adolescentes do interior de Venâncio Aires, de diferentes realidades e classes sociais. Entre meus 17 e 20 anos, me envolvi na criação e na condução deste grupo de atividades sociais, que tinha como propósito usar da Música, da Dança e do Teatro para promover uma mudança em seus integrantes - daí que veio o nome do projeto, Muda-te! -. Junto da minha mãe, Elisa, ajudamos os integrantes a perceberem a importância que cada um deles tem para o mundo, e o quanto eles podem transformar o mundo a sua volta de acordo com suas ações. Me desliguei do grupo em 2020, mas as risadas de cada um deles nunca saiu de mim.", img: "img/sobre-mim/carta-16.png"},
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
    {numero: "28", titulo: "Natais", naipe: "amarelo", descricao: "Sem descrição.", img: "img/sobre-mim/carta-28.png"},
    {numero: "29", titulo: "Catavento", naipe: "verde", descricao: "Sem descrição.", img: "img/sobre-mim/carta-29.png"},
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
        vBordas[x].style.display = "none";
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