  //Selecionamento principais elementos
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

  //Selecionando os elementos referente as alternativas  as perguntas
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

  //Selecionando os elementos referente as alternativas (li)
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

  //Selecionando o article com a class questões
let articleQuestoes = document.querySelector('.questoes')
  //Selecionando ol e li com as alternativas
let alternativas = document.querySelector('#alternativas')

  //Criando as constantes para a estrutura das questões, com objetos
const q0 = {  // Questão 0 passando suas propriedades
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = { // Questão 1 passando suas propriedades
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    correta      : "Norte",
}

const q2 = { // Questão 2 passando suas propriedades
    numQuestao   : 2,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Sul",
    alternativaC : "Norte",
    correta      : "Sul",
}

const q3 = { // Questão 3 passando suas propriedades
    numQuestao   : 3,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Leste",
}

const q4 = { // Questão 4 passando suas propriedades
    numQuestao   : 4,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Norte",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Oeste",
}

const q5 = { // Questão 5 passando suas propriedades
    numQuestao   : 5,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "América",
}

  // Criando constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5]

  //Selecionando o número da questão
let numero = document.querySelector('#numero') 
  //Selecionando quantas questões vai ter, o tamanho
let total  = document.querySelector('#total')

  // obtendo o conteúdo do q1
numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

  // Montando a primeita questão
numQuestao.textContent = q1.numQuestao // o texto do numQuestao vai ser o numQuestao que está no objeto em q1
  // O texto da pergunta vai ser o texto que está o objeto q1
pergunta.textContent   = q1.pergunta
  // O texto da alternativa a vai ser o texto da alternativa do objeto q1
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

  //Configurando o VALUE inicial da primeira questão completa
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

  //função para montar as próximas questões
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

  // Função para bloquear alternativas
function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

  //Função para desbloquear alternativas
function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

  //Função para verificar se acertou a questão
function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

      //Atualizando o placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

      //Bloquear a escolha de opções
    bloquearAlternativas()

    setTimeout(function() {
           //Passar para a próxima pergunta
        proxima = numeroDaQuestao+1
           //Verifica se está na ultima pergunta do QUIZ
        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
      //Se a quantidade de pontos for 0, escreve ponto se não escreve pontos
    pontos == 0 ? pont = 'ponto' : pont = 'pontos' 

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

      //Zerando conteúdo de texto
    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

      //Zerando conteúdo dos atributos
    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

      //Ocultando o ARTICLE da questão
    articleQuestoes.style.display = 'none'

      //Após o tempo(s) determinado, reload da página e começa novamente
    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 10000)
}