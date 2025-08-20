const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
  {
    enunciado:"1)Em uma entrevista de emprego,como você responde o recrutador?" ,
    alternativas[
  {
    texto"A) direto e prévio, dizendo oque realmente sabe " ,
    afirmação"Você é objetivo(a) e direto(a), comunicando com clareza aquilo que realmente sabe. "
  },
      {
        texto"contando histórias e enrolando nas dúvidas sobre você" ,
        afirmação"Você prefere contar histórias longas e, quando não tem certeza sobre algo, acaba enrolando nas respostas para ter mais glamor."
      }
      ]
      },
      {
         enunciado:"2)Você tem procurado melhorar suas habilidades?" ,
    alternativas[
  {
    texto"A) Sim, procuro sempre aprender mais e melhorar minhas habilidades" ,
    afirmação"Está sempre em busca de aprender mais e se desenvolver continuamente."
  },
      {
        texto"Sim, mas apenas oq é exigido" ,
        afirmação"Busca melhorar apenas o que é necessário sem novos conhecimentos."
      }
      ]
      },
       {
          enunciado:"3)oque é mais valorizado por você na organização do trabalho?" ,
    alternativas[
  {
    texto"trabalho em equipe" ,
    afirmação"Valoriza o trabalho em equipe e acredita na força da equipe"
  },
      {
        texto"competição entre colegas" ,
        afirmação"se importa com o ser unico e não com o resultado"
      }
      ]
       },
       {
         enunciado:"4) Valoriza a competição entre colegas como forma de se destacar." ,
    alternativas[
  {
    texto"Transparência na comunicação" ,
    afirmação"Acredita que a transparência na comunicação é essencial para um bom ambiente"
  },
      {
        texto"hierarquia rígidas" ,
        afirmação"Acredita que hierarquias rígidas são fundamentais para manter a ordem no trabalho."
      }
      ]
      },
      {
         enunciado:") 5)Se você cometesse um erro no trabalho, oque você faria? :" ,
    alternativas[
  {
    texto"Esconder o erro e tentar resolver sozinho" ,
    afirmação"se mantém isolado evitando o julgamento e a ideia de errar"
  },
      {
        texto"Assumir e comunicar ao superiores" ,
        afirmação"entender oque fez e buscar acertar ou arrumar o erro"
      }
      ]
      },
        {
       enunciado:"6) Na hora de buscar feedback sobre o desempenho, o que você prioriza?" ,
    alternativas[
  {
    texto"ouve críticas" ,
    afirmação"Aceita críticas construtivas e usa isso para melhorar"
  },
      {
        texto"se mantém em suas próprias ideias" ,
        afirmação"Prefere sempre defender o próprio ponto de vista diante de críticas."
      }
      ]
      },


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
