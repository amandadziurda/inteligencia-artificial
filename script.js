const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
        {
        enunciado: "Você já sabe quais são as perguntas que te ajudarão a se descobrir?",
        alternativas: [
            {
                texto: "Sim, com certeza",
                    afirmacao: " "
            },
            {
                texto:  "Não, ainda tenho algumas dúvidas",
                    afirmacao: " "
                            }    
           
        ]
    },



    
    {
        enunciado: "Sobre as suas aptidões profissionais, o que você prefere?",
        alternativas: [
            {
                texto: "Resolver problemas técnicos e trabalhar com lógica e sistemas",
                afirmacao: "Você tem um perfil voltado para áreas como engenharia, tecnologia da informação, matemática ou ciência de dados. Gosta de raciocínio lógico, resolver problemas e trabalhar com sistemas e estruturas. Consequentemente se dá bem em ambientes mais estruturados e com foco em resultados."
            },
            {
                texto:  "Ajudar pessoas diretamente e lidar com emoções no dia a dia",
                afirmacao: "Você tem um perfil voltado para profissões que envolvem empatia, comunicação e ajuda ao próximo. Prefere lidar com pessoas, entender sentimentos e contribuir diretamente para o bem-estar de outros."
            }    
           
        ]
    },
    {
       
            enunciado: "Quando você tem um tempo livre no fim de semana, o que gosta de fazer?",
            alternativas: [
                {
                    texto: "Sair para uma trilha ou atividade ao ar livre, como andar de bicicleta ou explorar novos lugares",
                    afirmacao: "Você certamente é aventureiro e ativo. Gosta de estar em movimento, explorando o mundo e buscando experiências novas. Valorizando a liberdade, natureza e desafios físicos."
                },
                {
                    texto:  "Ficar em casa lendo um livro, assistindo filmes ou jogando videogame",
                    afirmacao: "Você certamente introspectivo e criativo. Prefere ambientes tranquilos e atividades que estimulam a mente. Gosta de mergulhar em histórias, ideias e experiências mais calmas, mas profundas."
                }    
               
            ]
        },
        {
            enunciado: "Qual dos seguintes objetivos mais se alinha com você neste momento da sua vida?",

            alternativas: [
                {
                    texto: "Crescer profissionalmente, conquistar estabilidade financeira e alcançar uma posição de liderança",
                    afirmacao: "Você está focado(a) em crescimento, realizações e sucesso material. Provavelmente é alguém que valoriza metas claras, desafios e está disposto(a) a se esforçar bastante para conquistar reconhecimento e segurança no trabalho. Seu perfil combina com liderança, empreendedorismo ou planos de carreira bem definidos."
                },
               {
                    texto: "Encontrar equilíbrio pessoal, ter mais tempo livre e viver com mais propósito e bem-estar",
                    afirmacao: "Você busca qualidade de vida e valoriza experiências significativas mais do que conquistas materiais. Seu foco está em equilíbrio, saúde mental e viver de acordo com seus valores. Esse perfil se alinha com profissões ou estilos de vida mais flexíveis, criativos ou voltados ao autoconhecimento e impacto pessoal."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Isso é o que descobrimos sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();
